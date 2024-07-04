import { Stack, Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/material";

import { Colors } from "@config/styles";

import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";

interface AvatarProps {
  src: string;
  sx?: SxProps<Theme>;
  alt: string;
}

function Avatar({ src, sx, alt }: AvatarProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
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

interface Props {
  bigScreen?: boolean;
}

export default function Users({ bigScreen }: Props) {
  return (
    <Stack
      direction="row"
      sx={{
        mt: bigScreen ? { xl: 20, lg: 15 } : 5,
        mx: bigScreen ? 0 : 12.5,
        py: 3,
        px: "auto",
        justifyContent: bigScreen ? "flex-start" : "center",
        alignItems: "center",
        borderTop: `1px solid ${Colors.lightGrey}`,
        borderBottom: `1px solid ${Colors.lightGrey}`,
        gap: 10,
      }}
    >
      <Typography variant="h2">1200+ users</Typography>
      <Stack
        sx={{
          position: "relative",
          width: "10.5rem",
          height: "3.44rem",
        }}
      >
        <Avatar
          src={Avatar1}
          alt="User's profile picture"
          sx={{ left: "0%", zIndex: 10 }}
        />
        <Avatar
          src={Avatar2}
          alt="User's profile picture"
          sx={{ left: "22%", zIndex: 11 }}
        />
        <Avatar
          src={Avatar3}
          alt="User's profile picture"
          sx={{ left: "44%", zIndex: 12 }}
        />
        <Avatar
          src={Avatar4}
          alt="User's profile picture"
          sx={{ left: "66%", zIndex: 13 }}
        />
      </Stack>
      <Typography
        variant="subtitle1"
        sx={{ color: (theme) => theme.palette.text.secondary }}
      >
        Track their trips in
        <br /> our App.
      </Typography>
    </Stack>
  );
}
