import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Stack, Typography } from "@mui/material";

import { FontWeights } from "@config/styles/FontWeights";

import AdvantagesCard from "./AdvantagesCard";

function Advantages() {
  return (
    <Stack justifyContent="center" alignItems="center" pb={18}>
      <Typography variant="h6" color={(theme) => theme.palette.primary.main}>
        ADVANTAGES
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "2.187rem",
          lineHeight: "3.125rem",
          mt: 1,
          mb: 3,
          fontWeight: FontWeights.semibold,
        }}
      >
        Why choose us?
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        textAlign="center"
        maxWidth="1506px"
      >
        <AdvantagesCard
          icon={<CameraAltOutlinedIcon />}
          title="Keep memories from the trip"
          text="Keeping your travel photos within your trip-planning app is incredibly practical."
        />
        <AdvantagesCard
          icon={<LocationOnOutlinedIcon />}
          title="Add places you want to visit"
          text="Our user-friendly tools help you plan and organize your packing with ease."
        />
        <AdvantagesCard
          icon={<FolderOpenOutlinedIcon />}
          title="Centralize all your documents"
          text="Simplify Your Life by Bringing Together All Your Essential Documents and Files in a Single, Easily Accessible Location."
        />
      </Stack>
    </Stack>
  );
}

export default Advantages;
