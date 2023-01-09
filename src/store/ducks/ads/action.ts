import { LoadingState } from "../../types";
import { setCreateNewAdActionInterface, fetchCreateNewAdActionInterface, setAdsLoadingStateActionInterface, AdsActionsType } from "./contracts/actionTypes";


export const fetchCreateNewAd = (payload: any): fetchCreateNewAdActionInterface => ({
    type: AdsActionsType.FETCH_CREATE_NEW_AD,
    payload
})

export const setCreateNewAdData = (payload: any): setCreateNewAdActionInterface => ({
    type: AdsActionsType.CREATE_NEW_AD,
    payload
})

export const setAdsLoadingState = (payload: LoadingState): setAdsLoadingStateActionInterface => ({
    type: AdsActionsType.SET_LOADING_STATE,
    payload,
})


export type AdActions = 
    | fetchCreateNewAdActionInterface
    | setCreateNewAdActionInterface
    | setAdsLoadingStateActionInterface