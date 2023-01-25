import { combineReducers } from "redux";
import { adReducer } from "./ducks/ad/reducer";
import { AdsReducer } from "./ducks/ads/reducer";
import { categoriesReducer } from "./ducks/categories/reducer";
import { ChatReducer } from "./ducks/chat/reducer";
import { userReducer } from "./ducks/user/reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    ads: AdsReducer,
    ad: adReducer,
    chat: ChatReducer
})