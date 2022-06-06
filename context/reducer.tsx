type actionType = {
  type: string;
  payload: string;
};

export const languageReducer = (state: string[], action: actionType) => {
  switch (action.type) {
    case "change-lang":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state
  }
};
