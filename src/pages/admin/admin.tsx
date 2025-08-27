import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth-context";
import { Navigate } from "react-router-dom";
import { api } from "../../api/api";

const Admin = () => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const res = api("/positions");
    console.log(res);
  }, []);

  return <div>Admin</div>;
};

export default Admin;
