import { INVESTOR_FETCH_SUCCESS } from "../actions/actionType";

const initialState = {
  access_token: "",
  role: "",
  user: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case INVESTOR_FETCH_SUCCESS:
      return {
        ...state,
        access_token: action.token,
        role: action.role,
        user: action.user,
      };
    default:
      return state;
  }
}
