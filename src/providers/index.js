import { AuthProvider } from "./Auth";
import { HabitsProvider } from "./Habits";
import { GroupProvider } from "./Groups";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <GroupProvider>{children}</GroupProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
