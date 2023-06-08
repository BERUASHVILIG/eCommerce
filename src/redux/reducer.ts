import { combineReducers } from "redux";

// import reducer from home and admin page
import homeReducer from "../pages/Home/redux/reducer";
import adminReducer from "../admin/redux/reducer";

const reducer = combineReducers({ homeReducer, adminReducer });

export default reducer;
