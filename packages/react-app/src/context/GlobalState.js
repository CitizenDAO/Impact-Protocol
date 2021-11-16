import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  bondMaturity: 30,
  bondAPY: 12000,
  ETHBondAmount: 0,
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

  function setETHBondAmount(ETH) {
    dispatch({
      type: "UPDATE_ETH_BOND_AMOUNT",
      payload: ETH,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        bondMaturity: state.bondMaturity,
        bondAPY: state.bondAPY,
        ETHBondAmount: state.ETHtoBond,
        setETHBondAmount,
        selectBondMaturity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
