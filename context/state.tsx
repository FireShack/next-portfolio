import { createContext, useReducer } from "react";

type providerProps = {
  children: React.ReactNode;
};

export const initState = {
  language: "en",
  theme: "light",
};

export const UseAppContext = createContext(initState);

const contextReducer = (state: string, action: string) => {
  switch (action) {
    case "change-language":
      return {};

    default:
      return state;
  }
};

export const ContextProvider = ({ children }: providerProps) => {
  return (
    <UseAppContext.Provider value={initState}>
      {children}
    </UseAppContext.Provider>
  );
};
