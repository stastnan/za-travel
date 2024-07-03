import { Stack } from "@mui/material";

import { AppRoutes } from "@config/routes";
import AppButton from "@features/ui/AppButton";
import Logo from "@features/ui/logo/Logo";

import { HEADER_HEIGHT_PX } from "../constants";

function Header() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: HEADER_HEIGHT_PX,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        px: 12.5,
      }}
    >
      <Logo
        isLanding
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      />
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "12.125rem",

          gap: 2.5,
        }}
      >
        <AppButton
          variant="outlined"
          href={AppRoutes.login}
          typography="subtitle2"
          sx={{
            height: "3rem",
            minWidth: "5rem",
            textAlign: "center",
            py: 2,
            px: 1,
          }}
        >
          Log in
        </AppButton>
        <AppButton
          href={AppRoutes.signUp}
          typography="subtitle2"
          sx={{
            height: "3rem",
            minWidth: "5.88rem",
            textAlign: "center",
            py: 2,
            px: 1,
          }}
        >
          Sign up
        </AppButton>
      </Stack>
    </Stack>
  );
}

export default Header;
