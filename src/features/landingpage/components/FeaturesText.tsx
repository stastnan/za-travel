import { Typography } from "@mui/material";

import { FontWeights } from "@config/styles/FontWeights";

import PlanTripButton from "./PlanTripButton";

interface Props {
  part: string;
  title: string;
  text: string;
}

export default function FeaturesText({ part, title, text }: Props) {
  return (
    <>
      <Typography variant="h6" color={(theme) => theme.palette.primary.main}>
        {part}
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: "2.187rem", lineHeight: "3.125rem", mt: 1, mb: 3 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        mb={4}
        sx={{
          fontWeight: FontWeights.regular,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        {text}
      </Typography>
      <PlanTripButton sx={{ minWidth: "16.25rem" }} />
    </>
  );
}
