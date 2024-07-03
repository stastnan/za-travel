import { Box, Stack, Typography } from "@mui/material";

import { APP_NAME } from "@config/constants";
import { Colors } from "@config/styles";
import { FontFamilies } from "@config/styles/FontFamilies";
import { FontWeights } from "@config/styles/FontWeights";

import DesktopTrips from "../assets/DesktopTrips.jpg";
import DesktopExpenses from "../assets/ExpensesDesktop.jpg";
import AppShowcaseText from "./FeaturesText";

const imgStyles = {
  borderRadius: 2.5,
  height: "100%",
  overflow: "hidden",
  maxWidth: "810px",
  objectFit: "contain",
  mr: 5,
  WebkitBoxShadow: `-11px 11px 25px 0px ${Colors.lightGrey}`,
  MozBoxShadow: `-11px 11px 25px 0px ${Colors.lightGrey}`,
  boxShadow: `-11px 11px 25px 0px ${Colors.lightGrey}`,
};

interface Props {
  contentRef: React.RefObject<HTMLDivElement> | null | undefined;
}

export default function Features({ contentRef }: Props) {
  return (
    <Stack
      sx={{ mx: 12.5, mt: 9.5, pb: 20.125 }}
      alignItems="center"
      ref={contentRef}
    >
      <Typography
        variant="h6"
        color={(theme) => theme.palette.primary.main}
        sx={{ lineHeight: "2.187rem" }}
      >
        FEATURES
      </Typography>
      <Typography
        sx={{
          fontFamily: FontFamilies.poppins,
          fontWeight: FontWeights.semibold,
          fontSize: "2.5rem",
          lineHeight: "4.375rem",
          textAlign: "center",
        }}
      >
        {APP_NAME} best solution for travel
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={8}
        pb={9}
        width="100%"
        flex={1}
        sx={{ borderBottom: `1px solid ${Colors.lightGrey}` }}
      >
        <Box
          component="img"
          src={DesktopTrips}
          alt="App's trip planning screen"
          sx={{
            ...imgStyles,

            mr: 3,
          }}
        />
        <Stack alignItems="flex-start" justifyContent="center" maxWidth="650px">
          <AppShowcaseText
            part="DASHBOARD"
            title="Organize All Your Trips in a Single Application"
            text="With our intuitive application, you can effortlessly organize all
            your trips in one convenient location. From itinerary details and
            booking confirmations to travel notes and essential documents,
            everything you need for a smooth and stress-free journey is just a
            tap away. Enjoy a clutter-free travel experience and stay in control
            of your adventures with ease."
          />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={9}
        width="100%"
        flex={1}
      >
        <Stack alignItems="flex-start" justifyContent="center" maxWidth="650px">
          <AppShowcaseText
            part="EXPENSES"
            title="Expense Tracking for Your Travels"
            text="Keep a Close Watch on Your Travel Costs with our User-Friendly Expense Tracking Solution. Set budget goals, receive real-time updates, and make informed decisions to ensure you get the most out of your travel experiences without any financial surprises. Travel with confidence, knowing that your expenses are well-managed and under control"
          />
        </Stack>
        <Box
          component="img"
          src={DesktopExpenses}
          alt="App's expenses screen"
          sx={{
            ...imgStyles,
            mr: 0,
            ml: 3,
          }}
        />
      </Stack>
    </Stack>
  );
}
