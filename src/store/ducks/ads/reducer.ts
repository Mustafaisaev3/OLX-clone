import { LoadingState } from "../../types"
import { AdActions } from "./action"
import { AdsActionsType } from "./contracts/actionTypes"
import { AdsState } from "./contracts/state"


export const initialState: AdsState = {
    ads: [],
    status: LoadingState.NEVER
}

export const AdsReducer = (state = initialState, action: AdActions) => {
    switch(action.type){
        case AdsActionsType.CREATE_NEW_AD:
            return {...state, ads: [...state.ads!, action.payload.data]}

        default:
            return {...state}
    }
}