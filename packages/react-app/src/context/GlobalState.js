import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  bondMaturity: 30,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions for changing state
  function selectBondMaturity(n) {
    dispatch({
      type: "UPDATE_BOND_MATURITY",
      payload: n,
    });
  }

  return (
    <GlobalContext.Provider value={{ bondMaturity: state.bondMaturity, selectBondMaturity }}>
      {children}
    </GlobalContext.Provider>
  )
};
