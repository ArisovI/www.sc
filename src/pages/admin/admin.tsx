import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/header";
import { Flex, Stack } from "@mantine/core";

const Admin = () => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Stack h="100vh" gap={0}>
      <Header />
      <Flex gap={0}>
        <Sidebar />
        <Outlet />
      </Flex>
    </Stack>
  );
};

export default Admin;
