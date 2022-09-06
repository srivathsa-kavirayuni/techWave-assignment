export default (state = { data: [] }, action) => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS": {
      console.log("in reduce ", action.payload);
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
