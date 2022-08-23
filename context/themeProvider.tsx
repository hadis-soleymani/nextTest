import React, { createContext, useReducer } from "react";

//interface of one todo object
interface Theme {
  theme: string;
}

//we define type of actions this way
type ACTIONTYPE =
  | { type: "light"; payload: string }
  | { type: "dark"; payload: string };

//create reducer
const ThemeReducer = (state: Theme, action: ACTIONTYPE) => {
  console.log(action);
  switch (action.type) {
    //add one todo object
    case "light":
      return { ...state, theme: "light" };

    case "dark":
      return { ...state, theme: "dark" };

    default:
      return state;
  }
};

//input type of create context
interface InputCreateContext {
  state: Theme;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

//create a context with empty initialState (state: [])
export const themeContext = createContext<InputCreateContext>({
  state: { theme: "" },
  dispatch: () => {},
});

//define type of children
type ProviderProps = {
  children: React.ReactNode;
};
const initialState = {
  theme: "light",
};

//create context provider for wrapping App component
const ThemeProvider = (props: ProviderProps) => {
  //[] is initialState
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <themeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
