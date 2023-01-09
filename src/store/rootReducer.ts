import { combineReducers } from "redux";
import { AdsReducer } from "./ducks/ads/reducer";
import { categoriesReducer } from "./ducks/categories/reducer";
import { userReducer } from "./ducks/user/reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    ads: AdsReducer
})