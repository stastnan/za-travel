import dayjs from "dayjs";
import { type Control, Controller } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, unknown>;
  name: string;
  label: string;
  requiredErrorText?: string;
  minDate?: Date | null;
  maxDate?: Date | null;
}

export default function DateSelectInput({
  control,
  name,
  label,
  requiredErrorText,
  minDate,
  maxDate,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredErrorText }}
      render={({ field: { ref, ...field }, fieldState }) => (
        <DatePicker
          label={label}
          slotProps={{
            textField: {
              inputRef: ref,
              variant: "standard",
              helperText: fieldState.error?.message,
              error: Boolean(fieldState.error),
            },
            inputAdornment: { position: "start" },
          }}
          {...field}
          onChange={(newValue) => {
            let value;
            try {
              value = dayjs(newValue).toISOString();
            } catch (_) {
              /* empty */
            }
            field.onChange(value ?? newValue);
          }}
          sx={{
            width: "100%",
            "& .MuiSvgIconRoot": { xs: 0.1, md: 0 },
          }}
          value={field.value ? dayjs(field.value) : null}
          minDate={minDate ? dayjs(minDate) : null}
          maxDate={maxDate ? dayjs(maxDate) : null}
        />
      )}
    />
  );
}
