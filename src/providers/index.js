import { AuthProvider } from './Auth';
import { HabitsProvider } from './Habits';
import { GroupProvider } from './Groups';
import { UserProvider } from './User';
import { ActivitiesProvider } from './Activities';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <GroupProvider>
          <ActivitiesProvider>
            <UserProvider>{children}</UserProvider>
          </ActivitiesProvider>
        </GroupProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
