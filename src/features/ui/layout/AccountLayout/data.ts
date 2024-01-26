import HomeIcon from "@mui/icons-material/Home";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

import { AppRoutes } from "@config/routes/AppRoutes";

interface AccountLinks {
  Icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  text: string;
  path: string;
}

export const ACCOUNT_LINKS: AccountLinks[] = [
  {
    Icon: HomeIcon,
    text: "Home",
    path: AppRoutes.dashboard,
  },
  {
    Icon: LocalAirportIcon,
    text: "Trips",
    path: AppRoutes.trips,
  },
];
