import { useState, createContext, useContext } from "react";
import jwt_decode from "jwt-decode";
import api from "../services/api";
import { toast } from "react-toastify";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@WeDo:token");
    const user = localStorage.getItem("@KWeDo:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const { access } = response.data;

        const user = jwt_decode(access);

        localStorage.setItem("@WeDo:token", access);
        localStorage.setItem("@WeDo:user", JSON.stringify(user));

        setData({ access, user });
      })
      .catch((err) => toast.error("Email ou senha inválida"));
  };

  const signOut = () => {
    localStorage.removeItem("@WeDo:token");
    localStorage.removeItem("@WeDo:user");

    setData({});
  };

  return (
    <AuthContext.Provider
      value={{ access: data.access, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
