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
          justifyContent: { xs: "flex-start", md: "space-between" },
          alignItems: { xs: "center", lg: "center" },
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2, md: 8, lg: 12.5 },
          mt: { xs: 1, md: 4 },
          height: { xs: "auto", md: `calc(100vh - ${HEADER_HEIGHT_PX}px)` },
          gap: 3,
          pb: { xs: 0, md: 4 },
        }}
      >
        <Stack
          sx={{
            pb: { xs: 0, md: 4 },

            // maxWidth: { xs: "100%", xl: "40%", lg: "60%", md: "70%" },
            maxWidth: { xs: "100%", md: "70%", lg: "668px" },
            height: "100%",
          }}
        >
          {md && <Plane />}
          {!md && (
            <Box
              component="img"
              src={MobileVan}
              sx={{ borderRadius: { xs: 6, md: 10 } }}
            />
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
              mt: { xs: 3, md: 16.25 },
            }}
          >
            Your Ultimate Trip Companion
          </Typography>
          <Typography
            variant="h6"
            sx={{
              lineHeight: { xs: "1.875rem", md: "1.875rem" },
              color: (theme) => theme.palette.text.secondary,
              fontWeight: FontWeights.regular,
              mb: { xs: 5, md: 5 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {`Welcome to ${APP_NAME} – Your Passport to Seamless Adventures!
            Discover, plan, and track your journeys effortlessly with our
            intuitive web application.`}
            {md && ` Start exploring now!`}
          </Typography>

          <Stack
            sx={{
              flexDirection: "row",
              gap: 2,
              mb: { xs: 1, md: 0 },
            }}
          >
            <PlanTripButton fullWidth />

            {md && (
              <AppButton variant="outlined" fullWidth onClick={handleClick}>
                Learn more
              </AppButton>
            )}
          </Stack>

          <Stack
            sx={{
              mt: 3,
              justifyContent: "flex-end",
              height: "100%",
            }}
          >
            <Users />
          </Stack>
        </Stack>

        {md && (
          <Stack
            flex={1}
            gap={3}
            direction="row"
            sx={{
              justifyContent: "flex-end",
              alignItems: "flex-start",
              maxWidth: { xs: "100%", md: "28%", xl: "45%", lg: "25%" },
              maxHeight: { xs: "auto", md: "calc(100vh - 150px)" },
            }}
          >
            <Stack
              gap={3}
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                component="img"
                src={Van}
                alt="Camping van"
                borderRadius={10}
                width="100%"
              />
              <Box
                component="img"
                src={Beach}
                alt="Palm tree on a beach"
                borderRadius={10}
                width="100%"
              />
            </Stack>

            {xl && (
              <Stack
                sx={{
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                  },
                  maxWidth: "364px",
                }}
              >
                <Box
                  component="img"
                  src={City}
                  alt="Sunset in Seattle city"
                  sx={{
                    width: "100%",
                    borderTopRightRadius: "54px",
                    borderBottomRightRadius: "54px",
                  }}
                />
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
    </>
  );
}
