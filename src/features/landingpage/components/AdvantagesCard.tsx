import { Stack, Typography } from "@mui/material";

import { Colors } from "@config/styles";
import { FontWeights } from "@config/styles/FontWeights";

interface Props {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function AdvantagesCard({ icon, title, text }: Props) {
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="center"
      maxWidth="446px"
      p={4}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: Colors.primaryBlue,
          maxWidth: "64px",
          maxHeight: "64px",
          aspectRatio: 1 / 1,
          borderRadius: 2,
          p: 2,
          mb: 4,
          WebkitBoxShadow: `-11px 11px 25px 0px ${Colors.lightGrey}`,
          MozBoxShadow: `-11px 11px 25px 0px ${Colors.lightGrey}`,
          boxShadow: `-11px 11px 25px 0px ${Colors.lightGrey}`,
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ color: Colors.white }}
        >
          {icon}
        </Stack>
      </Stack>
      <Typography variant="h4" sx={{ color: Colors.black, mb: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontWeight: FontWeights.regular,
          fontSize: "1.125rem",
          lineHeight: "1.875rem",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}

export default AdvantagesCard;
