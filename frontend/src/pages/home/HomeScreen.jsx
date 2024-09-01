import { useAuthStore } from '../../store/authUser';

const HomeScreen = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <h1>HomeScreen</h1>
      <button
        onClick={logout}
        className="m-8 p-4 rounded-lg bg-red-500 text-white"
      >
        Log out{' '}
      </button>
    </div>
  );
};

export default HomeScreen;
