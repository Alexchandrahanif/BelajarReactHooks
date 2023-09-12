import {
  GetAllSaving,
  GetOneSaving,
  GetSavingCategories,
} from "../constants/saving";

let initialState = {
  Category: [],
  Savings: [],
};

function SavingReducer(state = initialState, actions) {
  switch (actions.type) {
    case GetSavingCategories:
      return {
        ...state,
        Category: actions.payload,
      };

    case GetAllSaving:
      return {
        ...state,
        Savings: actions.payload,
      };

    default:
      return state;
  }
}

export default SavingReducer;
