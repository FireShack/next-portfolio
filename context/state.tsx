import { createContext, useContext, useReducer, useState } from "react";

type providerProps = {
  children: JSX.Element | JSX.Element[];
};

export const UseAppContext = createContext([{}]);

export const ThemeProvider = ({ children }: providerProps) => {
  const [theme, setTheme] = useState({ theme: "light" });
  return (
    <UseAppContext.Provider value={[theme, setTheme]}>
      {children}
    </UseAppContext.Provider>
  );
};
