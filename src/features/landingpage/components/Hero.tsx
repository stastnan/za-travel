import { Box, Stack, Typography } from "@mui/material";

import { APP_NAME } from "@config/constants";
import { FontWeights } from "@config/styles/FontWeights";
import AppButton from "@features/ui/AppButton";
import { useBreakpoints } from "@hooks/useBreakpoints";

import Beach from "../assets/Beach1.jpg";
import City from "../assets/City1.jpg";
import Van from "../assets/Van1.jpg";
import { HEADER_HEIGHT_PX } from "../constants";
import PlanTripButton from "./PlanTripButton";
import { Plane } from "./Plane";
import Users from "./Users";

interface Props {
  handleClick: () => void;
}

export default function Hero({ handleClick }: Props) {
  const { lg, xl } = useBreakpoints();

  return (
    <>
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "space-between",
          flexDirection: "row",
          px: 12.5,
          pt: 4,
          width: "100%",
          height: `calc(100vh - ${HEADER_HEIGHT_PX})`,
          gap: 3,
        }}
      >
        <Stack maxWidth="668px">
          <Plane />

          <Typography
            variant="h1"
            sx={{
              fontSize: "3.75rem",
              lineHeight: "4.375rem",
              color: (theme) => theme.palette.text.primary,
              fontWeight: FontWeights.bold,
              mb: 2,
              mt: 16.25,
            }}
          >
            Your Ultimate Trip Companion
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontWeight: FontWeights.regular,
              mb: 5,
            }}
          >
            Welcome to {APP_NAME} – Your Passport to Seamless Adventures!
            Discover, plan, and track your journeys effortlessly with our
            intuitive web application. Start exploring now!
          </Typography>

          <Stack
            sx={{
              flexDirection: "row",
              gap: 2,
            }}
          >
            <PlanTripButton fullWidth />

            <AppButton variant="outlined" fullWidth onClick={handleClick}>
              Learn more
            </AppButton>
          </Stack>
          {lg && <Users bigScreen />}
        </Stack>

        <Stack
          flex={1}
          gap={3}
          direction="row"
          sx={{
            justifyContent: "flex-end",
            alignItems: { lg: "flex-start", md: "flex-end" },
          }}
        >
          <Stack
            sx={{
              maxWidth: { lg: "403px", md: "300px" },
            }}
            gap={3}
          >
            <Box
              component="img"
              src={Van}
              alt="Camping van"
              borderRadius={10}
            />
            <Box
              component="img"
              src={Beach}
              alt="Palm tree on a beach"
              borderRadius={10}
            />
          </Stack>

          {xl && (
            <Box
              component="img"
              src={City}
              alt="Sunset in Seattle city"
              sx={{
                maxWidth: "364px",
                borderTopRightRadius: "54px",
                borderBottomRightRadius: "54px",
              }}
            />
          )}
        </Stack>
      </Stack>
      {!lg && <Users />}
    </>
  );
}
