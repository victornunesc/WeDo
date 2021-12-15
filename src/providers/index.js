import { AuthProvider } from './Auth';
import { HabitsProvider } from './Habits';
import { GroupProvider } from './Groups';
import { UserProvider } from './User';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <GroupProvider>
          <UserProvider>{children}</UserProvider>
        </GroupProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
