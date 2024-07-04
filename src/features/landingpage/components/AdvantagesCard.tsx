import { Stack, Typography } from "@mui/material";

import { Colors } from "@config/styles";
import { FontWeights } from "@config/styles/FontWeights";

import IconBox from "./IconBox";

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
      sx={{ p: { xs: 3, md: 4 }, maxWidth: { xs: "100%", md: "446px" } }}
    >
      <IconBox icon={icon} />

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
