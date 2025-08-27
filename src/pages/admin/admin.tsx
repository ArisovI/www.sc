import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/header";

const Admin = () => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
