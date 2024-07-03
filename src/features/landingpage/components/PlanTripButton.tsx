import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SxProps, Theme, Typography } from "@mui/material";

import { AppRoutes } from "@config/routes";
import AppButton from "@features/ui/AppButton";

interface Props {
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

function PlanTripButton({ fullWidth, sx }: Props) {
  return (
    <AppButton
      onClick={() => {}}
      aria-label="play-your-trip"
      endIcon={<ArrowForwardIcon />}
      fullWidth={fullWidth}
      sx={{ ...sx }}
      href={AppRoutes.signUp}
    >
      <Typography>Plan your trip</Typography>
    </AppButton>
  );
}

export default PlanTripButton;
