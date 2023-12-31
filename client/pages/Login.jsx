import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";
import Admin from "../components/Admin";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <div>
          {user?.email === "hellomikefoster@gmail.com" && <Admin />}
          <div className="userDetails">
            <Profile />
            <LogoutButton />
          </div>
        </div>
      ) : (
        <div className="loginContainer">
          <LoginButton />
        </div>
      )}
    </>
  );
}
