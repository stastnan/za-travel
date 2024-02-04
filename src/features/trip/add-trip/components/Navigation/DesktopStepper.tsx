import { Step, StepLabel, Stepper } from "@mui/material";

import { useBreakpoints } from "@hooks/useBreakpoints";

import type { WizardSteps } from "../../types";

interface Props {
  currentStep: number;
  steps: WizardSteps[];
}

export default function DesktopStepper({ currentStep, steps }: Props) {
  const { xl } = useBreakpoints();
  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel={!xl}
      sx={{ mb: 8, display: { xs: "none", lg: "flex" } }}
    >
      {steps.map(({ title }) => (
        <Step key={title}>
          <StepLabel
            StepIconProps={{
              sx: {
                height: { xs: 35, xl: 49 },
                width: { xs: 35, xl: 49 },
              },
            }}
          >
            {title}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
