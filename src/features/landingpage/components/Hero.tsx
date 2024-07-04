import { Box, Stack, Typography } from "@mui/material";

import { APP_NAME } from "@config/constants";
import { FontWeights } from "@config/styles/FontWeights";
import AppButton from "@features/ui/AppButton";
import { useBreakpoints } from "@hooks/useBreakpoints";

import Beach from "../assets/Beach1.jpg";
import City from "../assets/City1.jpg";
import MobileVan from "../assets/MobileVan.jpg";
import Van from "../assets/Van1.jpg";
import { HEADER_HEIGHT_PX } from "../constants";
import PlanTripButton from "./PlanTripButton";
import { Plane } from "./Plane";
import Users from "./Users";

interface Props {
  handleClick: () => void;
}

export default function Hero({ handleClick }: Props) {
  const { md, xl } = useBreakpoints();

  return (
    <>
      <Stack
        sx={{
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "flex-end", md: "flex-end" },
          flexDirection: { xs: "column", md: "row" },
          px: md ? 12.5 : 2,
          pt: { xs: 1, md: 4 },
          width: md ? "100%" : "auto",
          height: `calc(100vh - ${HEADER_HEIGHT_PX})`,
          gap: 3,
        }}
      >
        <Stack sx={{ maxWidth: { xs: "100%", md: "668px" } }}>
          {md && <Plane />}
          {!md && (
            <Box component="img" src={MobileVan} sx={{ borderRadius: 10 }} />
          )}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3.75rem" },
              lineHeight: { xs: "3rem", md: "4.375rem" },
              color: (theme) => theme.palette.text.primary,
              fontWeight: FontWeights.bold,
              textAlign: { xs: "center", md: "left" },
              mb: 2,
              mt: { xs: 4, md: 16.25 },
            }}
          >
            Your Ultimate Trip Companion
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontWeight: FontWeights.regular,
              mb: { xs: 10, md: 5 },
              textAlign: { xs: "center", md: "left" },
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

            {md && (
              <AppButton variant="outlined" fullWidth onClick={handleClick}>
                Learn more
              </AppButton>
            )}
          </Stack>

          <Users />
        </Stack>

        {md && (
          <Stack
            flex={1}
            gap={3}
            direction="row"
            sx={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Stack
              sx={{
                maxWidth: { xl: "403px", lg: "350px", md: "250px" },
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
        )}
      </Stack>
    </>
  );
}
