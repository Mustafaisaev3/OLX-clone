import { LoadingState } from "../../types"
import { AdActionsType, fetchAdByIdActionInterface, setAdDataActionInterface, setAdLoadingStateActionInterface } from "./contracts/actionType"


export const fetchAdById = (payload: any): fetchAdByIdActionInterface => ({
    type: AdActionsType.FETCH_AD_BY_ID,
    payload
})

export const setAdData = (payload: any): setAdDataActionInterface => ({
    type: AdActionsType.SET_AD_DATA,
    payload
})

export const setAdLoadingState = (payload: LoadingState): setAdLoadingStateActionInterface => ({
    type: AdActionsType.SET_LOADING_STATE,
    payload,
})

export type AdActions = 
    | fetchAdByIdActionInterface
    | setAdDataActionInterface
    | setAdLoadingStateActionInterface