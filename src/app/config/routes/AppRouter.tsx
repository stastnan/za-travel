import { Route, Routes } from "react-router-dom";

import AuthLayout from "@features/ui/AuthLayout";
import { Home, Login } from "@mui/icons-material";
import NotFoundPage from "@pages/not-found";
import SignUpPage from "@pages/sign-up";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
