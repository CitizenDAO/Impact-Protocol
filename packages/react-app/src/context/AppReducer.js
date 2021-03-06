export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_BOND_MATURITY':
      console.log(action);
      return {
        ...state,
        bondMaturity: action.payload,
      };
    case 'UPDATE_ETH_BOND_AMOUNT':
      return {
        ...state,
        ETHBondAmount: action.payload,
      };
    case 'UPDATE_INIT_CDAO':
      return {
        ...state,
        initCDAO: action.payload,
      };
    default:
      return state;
  }
};
