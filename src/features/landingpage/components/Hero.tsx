import { Box, Stack, Typography } from "@mui/material";

import { APP_NAME } from "@config/constants";
import { Colors } from "@config/styles";
import { FontWeights } from "@config/styles/FontWeights";
import AppButton from "@features/ui/AppButton";

import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/Avatar4.png";
import Beach from "../assets/Beach1.jpg";
import City from "../assets/City1.jpg";
import Van from "../assets/Van1.jpg";
import { HEADER_HEIGHT_PX } from "../constants";
import Avatar from "./Avatar";
import PlanTripButton from "./PlanTripButton";
import { Plane } from "./Plane";

interface Props {
  handleClick: () => void;
}

export default function Hero({ handleClick }: Props) {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        flexDirection: "row",
        px: 12.5,
        py: 4,
        width: "100%",
        height: `calc(100vh - ${HEADER_HEIGHT_PX})`,
      }}
    >
      <Stack maxWidth="668px" zIndex={100} flex={1}>
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
        <Stack
          direction="row"
          sx={{
            mt: 20,
            py: 3,
            justifyContent: "flex-start",
            alignItems: "center",
            borderTop: `1px solid ${Colors.lightGrey}`,
            borderBottom: `1px solid ${Colors.lightGrey}`,
            gap: 2,
          }}
        >
          <Typography variant="h2">1200+ users</Typography>
          <Stack
            sx={{
              position: "relative",
              width: "10.5rem",
              height: "3.44rem",
            }}
          >
            <Avatar src={Avatar1} sx={{ left: "0%", zIndex: 10 }} />
            <Avatar src={Avatar2} sx={{ left: "22%", zIndex: 11 }} />
            <Avatar src={Avatar3} sx={{ left: "44%", zIndex: 12 }} />
            <Avatar src={Avatar4} sx={{ left: "66%", zIndex: 13 }} />
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            Track their trips in
            <br /> our App.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        zIndex={100}
        gap={3}
        direction="row"
        sx={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
          maxWidth: "791px",
        }}
      >
        <Stack
          sx={{
            objectFit: 1 / 1,
          }}
          gap={3}
        >
          <Box
            component="img"
            src={Van}
            borderRadius={10}
            maxWidth="100%"
            height="auto"
          />
          <Box
            component="img"
            src={Beach}
            borderRadius={10}
            sx={{ objectFit: 1 / 1, maxWidth: "403px" }}
          />
        </Stack>

        <Box
          component="img"
          src={City}
          sx={{
            width: "364px",
            borderTopRightRadius: "54px",
            borderBottomRightRadius: "54px",

            objectFit: 1 / 1,
          }}
        />
      </Stack>
    </Stack>
  );
}
