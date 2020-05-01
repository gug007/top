import { createContext, useState, useContext } from "react";
import { isAuthenticated } from "../../actions";
import { post } from "../../../api/request";

const AuthContext = createContext();

const useUser = () => useContext(AuthContext);

const AuthProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);

  const handleAuth = async () => {
    try {
      await isAuthenticated();
      const response = await post("auth");
      if (response.success) {
        setUser(response.user);
      }
    } catch (e) {
      // TODO: handle error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isAuth: handleAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useUser };
