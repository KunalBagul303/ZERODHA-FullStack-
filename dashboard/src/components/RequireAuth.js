import React, { useEffect, useState } from "react";
import axios from "axios";

const RequireAuth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("https://zerodha-fullstack-project-wwf5.onrender.com/api/auth/me", {
          withCredentials: true,
        });

        if (res.data.success) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (err) {
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  // ❌ If not logged in, redirect to signup (NOT login)
  if (!auth) {
   window.location.href = "https://zerodha-fullstack-ui.onrender.com/signup";

    return null;
  }

  // ✅ Logged in: allow dashboard
  return children;
};

export default RequireAuth;
