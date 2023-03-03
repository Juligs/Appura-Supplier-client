import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.service";
interface AuthContextProps {
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  user: any;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  storeToken: () => { },
  authenticateUser: () => { },
  user: null,
  logoutUser: () => { },
});

function AuthProviderWrapper(props: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const storeToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const token = localStorage.getItem("authToken");

    if (token !== null) {
      authService
        .verify(token)
        .then(({ data }) => setUser(data))
        .catch((err) => console.error("algo malo paso aw :3", err));
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };



  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeToken, authenticateUser, user, logoutUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProviderWrapper };
