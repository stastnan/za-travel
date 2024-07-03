import { Stack, Typography } from "@mui/material";

import Logo from "@features/ui/logo/Logo";

function Footer() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: "1920px",
        mx: "auto",
        py: 3,
        textAlign: "center",
      }}
    >
      <Logo isCentered sx={{ mb: 2, width: "190px" }} />
      <Typography variant="body1" mb={0.5}>
        Get in touch
      </Typography>
      <Typography
        variant="subtitle1"
        color={(theme) => theme.palette.text.secondary}
        mb={4}
      >
        Contact us anytime for <br /> getting support
      </Typography>
      <Typography variant="body1">
        contact@<b>happytravel</b>.com
      </Typography>
      <Stack></Stack>
    </Stack>
  );
}

export default Footer;
