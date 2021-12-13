import { useState, createContext, useContext } from "react";
import jwt_decode from "jwt-decode";
import api from "../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

export const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const access = localStorage.getItem("@WeDo:access");
    const user = localStorage.getItem("@WeDo:user");

    if (access && user) {
      return { access, user: JSON.parse(user) };
    }

    return {};
  });

  const history = useHistory();

  const signIn = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const { access } = response.data;

        const user = jwt_decode(access);

        localStorage.setItem("@WeDo:access", access);
        localStorage.setItem("@WeDo:user", JSON.stringify(user));

        setData({ access, user });
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválida"));
  };

  const signOut = () => {
    localStorage.removeItem("@WeDo:token");
    localStorage.removeItem("@WeDo:user");

    setData({});
  };

  const [habits, setHabits] = useState([])
  const [isHabit, isSetHabit] = useState(false)

  const [isEdit, isSetEdit] = useState(false)
  const [actualHabit, setActualHabit] = useState(0)

  const showModalHabit = () => {
    isSetHabit(true)
  }

  const hideModalHabit = () => {
    isSetHabit(false)
  }

  const showEditModal = (habit) => {
    isSetEdit(true)
    setActualHabit(habit.id)
  }

  const hideEditModal = () => {
    isSetEdit(false)
  }

  return (
    <AuthContext.Provider
      value={{ access: data.access, user: data.user, signIn, signOut, habits, setHabits, isHabit, isSetHabit, showModalHabit, hideModalHabit, showEditModal, hideEditModal, isEdit, actualHabit, setActualHabit}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
