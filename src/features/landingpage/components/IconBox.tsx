import { Stack } from "@mui/material";

import { Colors } from "@config/styles";

interface Props {
  icon: React.ReactNode;
  isSocialMedia?: boolean;
}

function IconBox({ icon, isSocialMedia }: Props) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        gap: { xs: 2, md: 0 },
        bgcolor: !isSocialMedia ? Colors.primaryBlue : Colors.secondaryGreen,
        maxWidth: !isSocialMedia ? "64px" : "32px",
        maxHeight: !isSocialMedia ? "64px" : "32px",
        aspectRatio: 1 / 1,
        borderRadius: 2,
        p: 2,
        mb: 2,
        WebkitBoxShadow: !isSocialMedia
          ? `-9px 10px 21px -4px ${Colors.shadowGrey}`
          : "none",
        MozBoxShadow: !isSocialMedia
          ? `-9px 10px 21px -4px ${Colors.shadowGrey}`
          : "none",
        boxShadow: !isSocialMedia
          ? `-9px 10px 21px -4px ${Colors.shadowGrey}`
          : "none",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          maxHeight: !isSocialMedia ? "auto" : "19.5",
          color: !isSocialMedia
            ? Colors.white
            : (theme) => theme.palette.primary.main,
        }}
      >
        {icon}
      </Stack>
    </Stack>
  );
}

export default IconBox;
