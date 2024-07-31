import React, { createContext, useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Check, OctagonX } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean | undefined;
  loginUser: (e: any) => Promise<void>;
  logoutUser: (e: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  const hasCheckedAuth = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasCheckedAuth.current) return;

    const checkAuth = async () => {
      try {
        hasCheckedAuth.current = true;
        const response = await axios.post(
          "https://php-vanilla.test/validate-token",
          {},
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else if (response.status === 401) {
          throw new Error("Token validation failed");
        } else {
          navigate("/login");
          setIsAuthenticated(false);
        }
      } catch (error: any) {
        toast(error.response?.data?.error, {
          duration: 2000,
          icon: <OctagonX className="h-4 w-4" />,
        });
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const loginUser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://php-vanilla.test/login",
        {
          username: e.target.username.value,
          password: e.target.password.value,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast("Logged in successfully!", {
          duration: 2000,
          icon: <Check className="h-4 w-4" />,
        });
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error: any) {
      toast(error.response?.data?.error || "Login failed", {
        duration: 2000,
        icon: <OctagonX className="h-4 w-4" />,
      });
    }
  };

  const logoutUser = async () => {
    try {
      const response = await axios.post(
        "https://php-vanilla.test/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setIsAuthenticated(false);
        navigate("/login");
      }
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
