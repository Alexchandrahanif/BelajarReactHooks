import { GetAllUser } from "../constants/user";

let initialState = {
  Users: [],
  User: [],
};

function UserReducer(state = initialState, actions) {
  switch (actions.type) {
    case GetAllUser:
      return {
        ...state,
        Users: actions.payload,
      };

    default:
      return state;
  }
}

export default UserReducer;
