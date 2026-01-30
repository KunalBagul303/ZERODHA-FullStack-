import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "./api";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const res = await API.get("/api/auth/me");
        setAuth(res.data.success === true);
      } catch (err) {
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };
    check();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (!auth) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
