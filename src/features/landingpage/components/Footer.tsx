import { SlSocialFacebook } from "react-icons/sl";

import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Stack, Typography } from "@mui/material";

import { FontWeights } from "@config/styles/FontWeights";
import Logo from "@features/ui/logo/Logo";
import { useBreakpoints } from "@hooks/useBreakpoints";

import IconBox from "./IconBox";

function Footer() {
  const { md } = useBreakpoints();
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: "1920px",
        mx: "auto",
        py: 3,
        textAlign: "center",
        pb: 3,
      }}
    >
      <Logo isCentered sx={{ mb: 2, width: "190px" }} />
      <Typography
        variant={md ? "body1" : "h6"}
        component="span"
        mb={0.5}
        sx={{ fontWeight: FontWeights.regular }}
      >
        Get in touch
      </Typography>
      <Typography
        variant="body1"
        component="span"
        color={(theme) => theme.palette.text.secondary}
        mb={4}
      >
        Contact us anytime for <br /> getting support
      </Typography>
      <Typography
        variant={md ? "body1" : "h6"}
        component="span"
        sx={{ fontWeight: FontWeights.regular, mb: { xs: 1, md: 0.5 } }}
      >
        contact@<b>happytravel</b>.com
      </Typography>
      <Stack direction="row" sx={{ gap: 1, mt: 2 }}>
        <IconBox
          isSocialMedia
          icon={<InstagramIcon sx={{ width: "19px" }} />}
        />
        <IconBox
          isSocialMedia
          icon={<SlSocialFacebook style={{ height: "20px" }} />}
        />
        <IconBox isSocialMedia icon={<XIcon sx={{ width: "19px" }} />} />
      </Stack>
    </Stack>
  );
}

export default Footer;
