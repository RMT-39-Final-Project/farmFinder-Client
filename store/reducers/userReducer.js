import { INVESTOR_FETCH_SUCCESS } from "../actions/actionType";

const initialState = {
  access_token: "",
  role: "",
  userId: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case INVESTOR_FETCH_SUCCESS:
      console.log(action, "reducer");
      return {
        ...state,
        access_token: action.token,
        role: action.role,
        userId: action.userId,
      };
    default:
      return state;
  }
}
