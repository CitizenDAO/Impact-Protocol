import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  bondMaturity: 30,
  bondAPY: 12000,
  ETHBondAmount: 0,
  sectorTextData: {
    climate: {
      title: "$Climate",
      projects: [
        { title: "Planting Trees", content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: "Preserving Rainforests",
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: "Converting Waste to Graphene",
          content: "A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.",
        },
      ],
      nft: {
        background: "#b5ebc1",
      },
    },
    health: {
      title: "$Health",
      projects: [
        { title: "Planting Trees", content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: "Preserving Rainforests",
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: "Converting Waste to Graphene",
          content: "A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.",
        },
      ],
      nft: {
        background: "#2a6df2",
      },
    },
    governance: {
      title: "$Governance",
      projects: [
        { title: "Planting Trees", content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: "Preserving Rainforests",
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: "Converting Waste to Graphene",
          content: "A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.",
        },
      ],
      nft: {
        background: "#ebb3ff",
      },
    },
    finance: {
      title: "$Finance",
      projects: [
        { title: "Planting Trees", content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: "Preserving Rainforests",
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: "Converting Waste to Graphene",
          content: "A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.",
        },
      ],
      nft: {
        background: "#ffb3b3",
      },
    },
    education: {
      title: "$Education",
      projects: [
        { title: "Planting Trees", content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: "Preserving Rainforests",
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: "Converting Waste to Graphene",
          content: "A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.",
        },
      ],
      nft: {
        background: "rgb(215 195 255)",
      },
    },
    housing: {
      title: "$Housing",
      projects: [
        { title: "Planting Trees", content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: "Preserving Rainforests",
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: "Converting Waste to Graphene",
          content: "A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.",
        },
      ],
      nft: {
        background: "rgb(192 211 255)",
      },
    },
  },
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
        ETHBondAmount: state.ETHBondAmount,
        setETHBondAmount,
        selectBondMaturity,
        sectorTextData: state.sectorTextData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
