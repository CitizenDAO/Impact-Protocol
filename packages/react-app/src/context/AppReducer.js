export default (state, action) => {
  switch (action.type) {
    case "UPDATE_BOND_MATURITY":
      console.log(action);
      return {
        bondMaturity: action.payload,
      };
    default:
      return state;
  }
};
