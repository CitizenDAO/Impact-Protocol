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
      title: 'Goal 1 - No Poverty',
      description: {
        img: 'sdg-icons/E-WEB-Goal-01.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-1-no-poverty/15',
        text: `Eradicating poverty is not a task of charity, it's an act of justice and the key to unlocking an enormous human potential. Still, nearly half of the world’s population lives in poverty, and lack of food and clean water is killing thousands every single day of the year. Together, we can feed the hungry, wipe out disease and give everyone in the world a chance to prosper and live a productive and rich life.`,
      },
      nft: {
        title: 'Goal 1',
        background: '#e5243b',
      },
    },
    sdg2: {
      title: 'Goal 2 - Zero Hunger',
      description: {
        img: 'sdg-icons/E-WEB-Goal-02.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-2-zero-hunger/16',
        text: `Hunger is the leading cause of death in the world. Our planet has provided us with tremendous resources, but unequal access and inefficient handling leaves millions of people malnourished. If we promote sustainable agriculture with modern technologies and fair distribution systems, we can sustain the whole world’s population and make sure that nobody will ever suffer from hunger again.`,
      },
      nft: {
        title: 'Goal 2',
        background: '#dda83a',
      },
    },
    sdg3: {
      title: 'Goal 3 - Good Health and Well-Being',
      description: {
        img: 'sdg-icons/E-WEB-Goal-03.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-3-good-health-wellbeing/17',
        text: `Over the last 15 years, the number of childhood deaths has been cut in half. This proves that it is possible to win the fight against almost every disease. Still, we are spending an astonishing amount of money and resources on treating illnesses that are surprisingly easy to prevent. The new goal for worldwide Good Health promotes healthy lifestyles, preventive measures and modern, efficient healthcare for everyone.`,
      },
      nft: {
        title: 'Goal 3',
        background: '#4c9f38',
      },
    },
    sdg4: {
      title: 'Goal 4 - Quality Education',
      description: {
        img: 'sdg-icons/E-WEB-Goal-04.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-4-quality-education/18',
        text: `Education liberates the intellect, unlocks the imagination and is fundamental for self-respect. It is the key to prosperity and opens a world of opportunities, making it possible for each of us to contribute to a progressive, healthy society. Learning benefits every human being and should be available to all.`,
      },
      nft: {
        title: 'Goal 4',
        background: '#c5192d',
      },
    },
    sdg5: {
      title: 'Goal 5 - Gender Equality',
      description: {
        img: 'sdg-icons/E-WEB-Goal-05.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-5-gender-equality/19',
        text: `Gender bias is undermining our social fabric and devalues all of us. It is not just a human rights issue; it is a tremendous waste of the world’s human potential. By denying women equal rights, we deny half the population a chance to live life at its fullest. Political, economic and social equality for women will benefit all the world’s citizens. Together we can eradicate prejudice and work for equal rights and respect for all.`,
      },
      nft: {
        title: 'Goal 5',
        background: '#ff3a21',
      },
    },
    sdg6: {
      title: 'Goal 6 - Clean Water and Sanitation',
      description: {
        img: 'sdg-icons/E-WEB-Goal-06.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-6-clean-water-sanitation/20',
        text: `One in three people live without sanitation. This is causing unnecessary disease and death. Although huge strides have been made with access to clean drinking water, lack of sanitation is undermining these advances. If we provide affordable equipment and education in hygiene practices, we can stop this senseless suffering and loss of life.`,
      },
      nft: {
        title: 'Goal 6',
        background: '#26bde2',
      },
    },
    sdg7: {
      title: 'Goal 7 - Affordable and Clean Energy',
      description: {
        img: 'sdg-icons/E-WEB-Goal-07.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-8-decent-work-economic-growth/22',
        text: `Renewable energy solutions are becoming cheaper, more reliable and more efficient every day.Our current reliance on fossil fuels is unsustainable and harmful to the planet, which is why we have to change the way we produce and consume energy. Implementing these new energy solutions as fast as possible is essential to counter climate change, one of the biggest threats to our own survival.`,
      },
      nft: {
        title: 'Goal 7',
        background: '#fcc30b',
      },
    },
    sdg8: {
      title: 'Goal 8 - Decent Work and Economic Growth',
      description: {
        img: 'sdg-icons/E-WEB-Goal-08.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-8-decent-work-economic-growth/22',
        text: `Economic growth should be a positive force for the whole planet.This is why we must make sure that financial progress creates decent and fulfilling jobs while not harming the environment. We must protect labour rights and once and for all put a stop to modern slavery and child labour. If we promote job creation with expanded access to banking and financial services, we can make sure that everybody gets the benefits of entrepreneurship and innovation.`,
      },
      nft: {
        title: 'Goal 8',
        background: '#a21942',
      },
    },
    sdg9: {
      title: 'Goal 9 - Industry, Innovation, and Infrastructure',
      description: {
        img: 'sdg-icons/E-WEB-Goal-09.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-9-industry-innovation-infrastructure/23',
        text: `A functioning and resilient infrastructure is the foundation of every successful community. To meet future challenges, our industries and infrastructure must be upgraded. For this, we need to promote innovative sustainable technologies and ensure equal and universal access to information and financial markets. This will bring prosperity, create jobs and make sure that we build stable and prosperous societies across the globe.`,
      },
      nft: {
        title: 'Goal 9',
        background: '#fd6925',
      },
    },
    sdg10: {
      title: 'Goal 10 - Reduced Inequalities',
      description: {
        img: 'sdg-icons/E-WEB-Goal-10.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-10-reduced-inequalities/24',
        text: `Too much of the world’s wealth is held by a very small group of people.This often leads to financial and social discrimination. In order for nations to flourish, equality and prosperity must be available to everyone - regardless of gender, race, religious beliefs or economic status. When every individual is self sufficient, the entire world prospers.`,
      },
      nft: {
        title: 'Goal 10',
        background: '#dd1367',
      },
    },
    sdg11: {
      title: 'Goal 11 - Sustainable Cities and Communities',
      description: {
        img: 'sdg-icons/E-WEB-Goal-11.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-11-sustainable-cities-communities/25',
        text: `The world’s population is constantly increasing.To accommodate everyone, we need to build modern, sustainable cities. For all of us to survive and prosper, we need new, intelligent urban planning that creates safe, affordable and resilient cities with green and culturally inspiring living conditions.`,
      },
      nft: {
        title: 'Goal 11',
        background: '#fd9d24',
      },
    },
    sdg12: {
      title: 'Goal 12 - Responsible Consumption and Production',
      description: {
        img: 'sdg-icons/E-WEB-Goal-12.png',
        forum: 'https://forum.citizendao.com/c/sdg-12-responsible-consumption-production/26',
        text: `Our planet has provided us with an abundance of natural resources.But we have not utilized them responsibly and currently consume far beyond what our planet can provide. We must learn how to use and produce in sustainable ways that will reverse the harm that we have inflicted on the planet.`,
      },
      nft: {
        title: 'Goal 12',
        background: '#bf8b2e',
      },
    },
    sdg13: {
      title: 'Goal 13 - Climate Action',
      description: {
        img: 'sdg-icons/E-WEB-Goal-13.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-13-climate-action/27',
        text: `Climate change is a real and undeniable threat to our entire civilization.The effects are already visible and will be catastrophic unless we act now. Through education, innovation and adherence to our climate commitments, we can make the necessary changes to protect the planet. These changes also provide huge opportunities to modernize our infrastructure which will create new jobs and promote greater prosperity across the globe.`,
      },
      nft: {
        title: 'Goal 13',
        background: '#bf8b2e',
      },
    },
    sdg14: {
      title: 'Goal 14 - Life Below Water',
      description: {
        img: 'sdg-icons/E-WEB-Goal-14.png',
        forumLink: 'https://forum.citizendao.com/t/about-the-sdg-14-life-below-water-category/56',
        text: `Healthy oceans and seas are essential to our existence.They cover 70 percent of our planet and we rely on them for food, energy and water. Yet, we have managed to do tremendous damage to these precious resources. We must protect them by eliminating pollution and overfishing and immediately start to responsibly manage and protect all marine life around the world.`,
      },
      nft: {
        title: 'Goal 14',
        background: '#0a97d9',
      },
    },
    sdg15: {
      title: 'Goal 15 - Life On Land',
      description: {
        img: 'sdg-icons/E-WEB-Goal-15.png',
        forum: 'https://forum.citizendao.com/c/sdg-15-life-on-land/29',
        text: `A flourishing life on land is the foundation for our life on this planet.We are all part of the planet’s ecosystem and we have caused severe damage to it through deforestation, loss of natural habitats and land degradation. Promoting a sustainable use of our ecosystems and preserving biodiversity is not a cause. It is the key to our own survival.`,
      },
      nft: {
        title: 'Goal 15',
        background: '#56c02b',
      },
    },
    sdg16: {
      title: 'Goal 16 - Peace, Justice, and Strong Institutions',
      description: {
        img: 'sdg-icons/E-WEB-Goal-16.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-16-peace-justice-strong-institutions/30',
        text: `Compassion and a strong moral compass is essential to every democratic society.Yet, persecution, injustice and abuse still runs rampant and is tearing at the very fabric of civilization. We must ensure that we have strong institutions, global standards of justice, and a commitment to peace everywhere.`,
      },
      nft: {
        title: 'Goal 16',
        background: '#00689d',
      },
    },
    sdg17: {
      title: 'Goal 17 - Partnerships for the Goals',
      description: {
        img: 'sdg-icons/E-WEB-Goal-17.png',
        forumLink: 'https://forum.citizendao.com/c/sdg-17-partnership-for-the-goals/31',
        text: `The Global Goals can only be met if we work together.International investments and support is needed to ensure innovative technological development, fair trade and market access, especially for developing countries. To build a better world, we need to be supportive, empathetic, inventive, passionate, and above all, cooperative.`,
      },
      nft: {
        title: 'Goal 17',
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
