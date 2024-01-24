import { Button, type SxProps, type Theme } from "@mui/material";

interface Props {
  isSmall?: boolean;
  children: JSX.Element;
  sx: SxProps<Theme>;
  onClick: () => void;
  "aria-label": string;
}

export default function AppIconButton(props: Props) {
  return (
    <Button
      variant="outlined"
      onClick={props.onClick}
      aria-label={props["aria-label"]}
      sx={{
        borderRadius: 2,
        minWidth: "auto",
        width: props.isSmall ? 34 : 58,
        height: props.isSmall ? 34 : 58,
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
}
