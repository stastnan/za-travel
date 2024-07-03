import { Stack, Typography } from "@mui/material";

import PlaneBackground from "../assets/PlaneBackground.jpg";
import PlanTripButton from "./PlanTripButton";

function PlanNextTrip() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${PlaneBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "384px",
        gap: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: (theme) => theme.palette.primary.main,
          fontSize: "3.125rem",
          lineHeight: "3,437rem",
          zIndex: 10,
        }}
      >
        Let's plan your next trip together?
      </Typography>
      <PlanTripButton sx={{ width: "16.25rem" }} />
    </Stack>
  );
}

export default PlanNextTrip;
