import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const AuthContext = createContext<{
  isAdmin: boolean;
}>({
  isAdmin: false,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
