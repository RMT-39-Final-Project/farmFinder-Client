import { combineReducers } from "redux";
import farmReducer from "./farmReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  farms: farmReducer,
  user: userReducer,
  // categories: categoriesReducer,
  // images: imagesReducer,
});

export default rootReducer;
