import { LoadingState } from "../../types";
import { AdActions } from "./action";
import { AdActionsType } from "./contracts/actionType";
import { AdState } from "./contracts/state";

export const initialState: AdState = {
    ad: undefined,
    status: LoadingState.NEVER
}

export const adReducer = (state = initialState, action: AdActions) => {
    switch(action.type){
        case AdActionsType.SET_AD_DATA: 
            return {
                ...state,
                ad: action.payload,
                status: LoadingState.SUCCESS
            }
        default:
            return state
    }
}   