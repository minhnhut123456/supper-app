import { Outlet } from "react-router";
import Layout from "./layout";

function AuthLayout() {
  return <Layout children={<Outlet />} />;
}

export default AuthLayout;
