import { combineReducers } from "redux";

// import reducer from home and admin page
import homeReducer from "../pages/Home/redux/reducer";

const reducer = combineReducers({ homeReducer });

export default reducer;
