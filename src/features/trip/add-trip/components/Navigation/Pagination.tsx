import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MobileStepper } from "@mui/material";

import AppButton from "@features/ui/AppButton";
import { useBreakpoints } from "@hooks/useBreakpoints";

import { WIZARD_STEPS } from "../../data";

export default function Pagination() {
  const { md, lg } = useBreakpoints();
  const currentStep = 0;

  return (
    <MobileStepper
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        p: { xs: 2, md: 3 },
        borderRadius: 4,
        ".MuiMobileStepper-dots": {
          visibility: "hidden",
        },
        display: "flex",
        whiteSpace: "nowrap",
        gap: 2,
      }}
      variant={lg ? "dots" : "text"}
      steps={WIZARD_STEPS.length}
      position="static"
      activeStep={currentStep}
      nextButton={
        <AppButton type="submit" endIcon={<ArrowForwardIcon />} fullWidth={!md}>
          Next
        </AppButton>
      }
      backButton={
        <AppButton
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          fullWidth={!md}
          sx={{ visibility: currentStep === 0 ? "hidden" : "visible" }}
        >
          Back
        </AppButton>
      }
    />
  );
}
