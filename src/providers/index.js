import { AuthProvider } from "./AuthContext";
import { HabitsProvider} from "./Habits"

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        {children}
      </HabitsProvider>
    </AuthProvider>
  )
};

export default Providers;
