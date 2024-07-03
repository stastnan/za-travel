import { Box, SxProps, Theme } from "@mui/material";

import { Colors } from "@config/styles";

interface Props {
  src: string;
  sx?: SxProps<Theme>;
}

function Avatar({ src, sx }: Props) {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: `1px solid ${Colors.white}`,
        position: "absolute",
        ...sx,
      }}
    ></Box>
  );
}

export default Avatar;
