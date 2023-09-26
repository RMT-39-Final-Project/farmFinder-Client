import { combineReducers } from "redux";
import farmReducer from "./farmReducer";
import userReducer from "./userReducer";
import investReducer from "./investReducer";

const rootReducer = combineReducers({
  farms: farmReducer,
  user: userReducer,
  invest: investReducer,
  // categories: categoriesReducer,
  // images: imagesReducer,
});

export default rootReducer;
