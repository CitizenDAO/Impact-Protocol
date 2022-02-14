import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  bondMaturity: 60,
  bondAPY: 500,
  CDAOPriceDollar: 0.1,
  CDAOPriceETH: 0.000025,
  initCDAO: 0,
  initiatives: {
    climate: {
      title: '$Climate',
      description:
        'We built $Climate bonds to fund emerging web3 & hard tech climate projects that can help heal our planet. All bond holders will receive $Climate index tokens in porportion to their investment.',
      projects: [
        { title: 'Planting Trees', content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: 'Preserving Rainforests',
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: 'Converting Waste to Graphene',
          content: 'A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.',
        },
      ],
      nft: {
        background: '#b5ebc1',
      },
      targetedSDGs: [13, 15, 11, 12, 14, 7, 6],
    },
    health: {
      title: '$Health',
      description: 'Lorem ipsum dolor samet',
      projects: [
        { title: 'Planting Trees', content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: 'Preserving Rainforests',
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: 'Converting Waste to Graphene',
          content: 'A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.',
        },
      ],
      nft: {
        background: '#2a6df2',
      },
      targetedSDGs: [13, 15, 11, 12, 14, 7, 6],
    },
    governance: {
      title: '$Governance',
      description: 'Lorem ipsum dolor samet',
      projects: [
        { title: 'Planting Trees', content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: 'Preserving Rainforests',
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: 'Converting Waste to Graphene',
          content: 'A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.',
        },
      ],
      nft: {
        background: '#ebb3ff',
      },
      targetedSDGs: [13, 15, 11, 12, 14, 7, 6],
    },
    finance: {
      title: '$Finance',
      description: 'Lorem ipsum dolor samet',
      projects: [
        { title: 'Planting Trees', content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: 'Preserving Rainforests',
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: 'Converting Waste to Graphene',
          content: 'A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.',
        },
      ],
      nft: {
        background: '#ffb3b3',
      },
      targetedSDGs: [13, 15, 11, 12, 14, 7, 6],
    },
    education: {
      title: '$Education',
      description: 'Lorem ipsum dolor samet',
      projects: [
        { title: 'Planting Trees', content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: 'Preserving Rainforests',
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: 'Converting Waste to Graphene',
          content: 'A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.',
        },
      ],
      nft: {
        background: 'rgb(215 195 255)',
      },
      targetedSDGs: [13, 15, 11, 12, 14, 7, 6],
    },
    housing: {
      title: '$Housing',
      description: 'Lorem ipsum dolor samet',
      projects: [
        { title: 'Planting Trees', content: "Working with Terraformation, we're planting as many trees as possible." },
        {
          title: 'Preserving Rainforests',
          content: "Working with (insert partner), we're buying rainforest land & turning it into nature preserves.",
        },
        {
          title: 'Converting Waste to Graphene',
          content: 'A Citizen DAO project to convert household waste to graphene for use in geopolymer concrete.',
        },
      ],
      nft: {
        background: 'rgb(192 211 255)',
      },
      targetedSDGs: [13, 15, 11, 12, 14, 7, 6],
    },
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions for changing state
  function selectBondMaturity(n) {
    dispatch({
      type: 'UPDATE_BOND_MATURITY',
      payload: n,
    });
  }

  function setETHBondAmount(ETH) {
    dispatch({
      type: 'UPDATE_ETH_BOND_AMOUNT',
      payload: ETH,
    });
  }

  function setInitCDAO(CDAO) {
    console.log('SET INIT CDAO ', CDAO);
    dispatch({
      type: 'UPDATE_INIT_CDAO',
      payload: CDAO,
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
        setInitCDAO,
        initiatives: state.initiatives,
        CDAOPriceDollar: state.CDAOPriceDollar,
        CDAOPriceETH: state.CDAOPriceETH,
        initCDAO: state.initCDAO,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
