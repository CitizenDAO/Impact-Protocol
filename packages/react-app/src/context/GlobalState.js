import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  bondMaturity: 30,
  bondAPY: 500,
  ETHBondAmount: 0,
  CDAOPriceDollar: 0.1,
  CDAOPriceETH: 0.000025,
  initCDAO: 0,
  sectorTextData: {
    sdg1: {
      title: 'SDG1 - No Poverty',
      nft: {
        title: 'SDG1',
        background: '#e5243b',
      },
    },
    sdg2: {
      title: 'SDG2 - Zero Hunger',
      nft: {
        title: 'SDG2',
        background: '#dda83a',
      },
    },
    sdg3: {
      title: 'SDG3 - Good Health and Well-Being',
      nft: {
        title: 'SDG3',
        background: '#4c9f38',
      },
    },
    sdg4: {
      title: 'SDG4 - Quality Education',
      nft: {
        title: 'SDG4',
        background: '#c5192d',
      },
    },
    sdg5: {
      title: 'SDG5 - Gender Equality',
      nft: {
        title: 'SDG5',
        background: '#ff3a21',
      },
    },
    sdg6: {
      title: 'SDG6 - Clean Water and Sanitation',
      nft: {
        title: 'SDG6',
        background: '#26bde2',
      },
    },
    sdg7: {
      title: 'SDG7 - Affordable and Clean Energy',
      nft: {
        title: 'SDG7',
        background: '#fcc30b',
      },
    },
    sdg8: {
      title: 'SDG8 - Decent Work and Economic Growth',
      nft: {
        title: 'SDG8',
        background: '#a21942',
      },
    },
    sdg9: {
      title: 'SDG9 - Industry, Innovation, and Infrastructure',
      nft: {
        title: 'SDG9',
        background: '#fd6925',
      },
    },
    sdg10: {
      title: 'SDG10 - Reduced Inequalities',
      nft: {
        title: 'SDG10',
        background: '#dd1367',
      },
    },
    sdg11: {
      title: 'SDG11 - Sustainable Cities and Communities',
      nft: {
        title: 'SDG11',
        background: '#fd9d24',
      },
    },
    sdg12: {
      title: 'SDG12 - Responsible Consumption and Production',
      nft: {
        title: 'SDG12',
        background: '#bf8b2e',
      },
    },
    sdg13: {
      title: 'SDG13 - Climate Action',
      nft: {
        title: 'SDG13',
        background: '#bf8b2e',
      },
    },
    sdg14: {
      title: 'SDG14 - Life Below Water',
      nft: {
        title: 'SDG14',
        background: '#0a97d9',
      },
    },
    sdg15: {
      title: 'SDG15 - Life On Land',
      nft: {
        title: 'SDG15',
        background: '#56c02b',
      },
    },
    sdg16: {
      title: 'SDG16 - Peace, Justice, and Strong Institutions',
      nft: {
        title: 'SDG16',
        background: '#00689d',
      },
    },
    sdg17: {
      title: 'SDG17 - Partnerships for the Goals',
      nft: {
        title: 'SDG17',
        background: '#19486a',
      },
    },
    climate: {
      title: '$Climate',
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
    },
    health: {
      title: '$Health',
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
    },
    governance: {
      title: '$Governance',
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
    },
    finance: {
      title: '$Finance',
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
    },
    education: {
      title: '$Education',
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
    },
    housing: {
      title: '$Housing',
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
        sectorTextData: state.sectorTextData,
        CDAOPriceDollar: state.CDAOPriceDollar,
        CDAOPriceETH: state.CDAOPriceETH,
        initCDAO: state.initCDAO,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
