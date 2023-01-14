import { Action } from "redux"
import { LoadingState } from "../../../types"


export enum AdActionsType {
    FETCH_AD_BY_ID = 'ad/FETCH_AD_BY_ID',
    SET_AD_DATA = 'ad/SET_AD_DATA',
    SET_LOADING_STATE = 'ad/SET_LOADING_STATE',
}


export interface fetchAdByIdActionInterface extends Action<AdActionsType> {
    type: AdActionsType.FETCH_AD_BY_ID,
    payload: any
}

export interface setAdDataActionInterface extends Action<AdActionsType> {
    type: AdActionsType.SET_AD_DATA,
    payload: any
}

export interface setAdLoadingStateActionInterface extends Action<AdActionsType>{
    type: AdActionsType.SET_LOADING_STATE,
    payload: LoadingState
}
