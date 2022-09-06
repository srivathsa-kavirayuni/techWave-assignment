export const loadDataAction = (payload) => {
  return {
    type: "LOAD_DATA",
    payload,
  };
};

export const loadDataSuccessAction = (payload) => {
  console.log("IN Action succ", payload);
  return {
    type: "LOAD_DATA_SUCCESS",
    payload,
  };
};
export const loadDataErrorAction = (payload) => {
  return {
    type: "LOAD_DATA_Error",
    payload,
  };
};
