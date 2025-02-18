import { Fragment, useEffect, useRef } from "react";
import {
  Controller,
  type SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import { Stack } from "@mui/material";

import useToast from "@hooks/useToast";
import { getDownloadURL, useStorage } from "@services/firebase";

import { MAX_FILES_SIZE_MB } from "../../constants";
import type { DocumentToUpload, TripFile } from "../../types";
import DocumentCard from "./DocumentCard";
import UploadFileButton from "./UploadFileButton";

interface Props {
  defaultFiles: TripFile[];
  onSubmit: (files: TripFile[]) => void;
  SubmitComponent: React.ReactNode;
}

interface FormInput {
  files: DocumentToUpload[];
}

export default function FilesForm(props: Props) {
  const {
    files,
    onSubmit,
    handleSubmit,
    control,
    onFileInputChange,
    onFileRemove,
    onFileAdd,
    fileInputRef,
    uploadProgresses,
  } = useFilesUploadForm(props);

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ width: "100%", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
      gap={3}
    >
      <UploadFileButton
        onClick={onFileAdd}
        mainText="Upload Document"
        subText={`PDF (max. ${MAX_FILES_SIZE_MB}MB)`}
        showSubText
        sx={{ width: { xs: "100%", md: 200 }, height: { xs: 140, md: 260 } }}
      />

      {files.map((file, index) => {
        const showCard = Boolean(file?.url || file.storagePath);

        return (
          <Fragment key={file.fileName}>
            {showCard && (
              <DocumentCard
                name={file.fileName}
                url={file.url}
                onRemoveClick={() => onFileRemove(index)}
                uploadProgress={uploadProgresses[index]}
              />
            )}
            <Controller
              name={`files.${index}`}
              control={control}
              rules={{ required: "Please specify the file" }}
              render={({ field }) => (
                <input
                  type="file"
                  id="fileInput"
                  ref={index === files.length - 1 ? fileInputRef : null}
                  hidden
                  onChange={(event) => onFileInputChange(event, field.onChange)}
                />
              )}
            />
          </Fragment>
        );
      })}
      {props.SubmitComponent}
    </Stack>
  );
}

function useFilesUploadForm(props: Props) {
  const { uploadFiles, uploadProgresses } = useStorage({
    onAllUploadSuccess: (uploadedFiles) => {
      props.onSubmit(uploadedFiles);
    },
  });
  const { showErrorMessage } = useToast();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { watch, handleSubmit, control } = useForm<FormInput>({
    defaultValues: {
      files: props.defaultFiles,
    },
  });
  const files = watch("files");

  const { append, remove, update } = useFieldArray({
    control,
    name: "files",
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const filteredFiles = [...data.files];
    if (!filteredFiles[filteredFiles.length - 1].fileName) {
      filteredFiles.pop();
    }
    uploadFiles("documents", data.files);
  };

  const onFileRemove = (index: number) => {
    remove(index);
  };

  const onFileAdd = () => {
    if (files.length === 0 || files[files.length - 1]?.fileName) {
      append({ fileName: "" });
    }
    setTimeout(() => fileInputRef.current?.click(), 0);
  };

  const onFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (newFile: DocumentToUpload) => void,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (files.find((existingFile) => existingFile.fileName === file.name)) {
      if (!files[files.length - 1].fileName) {
        onFileRemove(files.length - 1);
      }

      return showErrorMessage(
        "You have already uploaded file with the same name",
      );
    }

    onChange({
      fileName: file?.name,
      file,
    });
  };

  useEffect(() =>
    files.forEach(
      async (file, index) => {
        if (file.url) {
          return;
        }

        let url: string | null = null;
        if (file.storagePath) {
          url = await getDownloadURL(file.storagePath);
        } else if (file.file) {
          url = URL.createObjectURL(file.file);
        }

        if (url) {
          update(index, {
            ...files[index],
            url,
          });
        }
      },
      [files, update],
    ),
  );

  return {
    onSubmit,
    handleSubmit,
    files,
    control,
    onFileInputChange,
    onFileRemove,
    onFileAdd,
    fileInputRef,
    uploadProgresses,
  };
}
