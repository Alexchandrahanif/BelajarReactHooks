import { GetAllUser, GetOneUser } from "../constants/user";

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
    case GetOneUser:
      return {
        ...state,
        User: actions.payload,
      };
    default:
      return state;
  }
}

export default UserReducer;
