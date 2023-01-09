import { Action } from "redux";
import { LoadingState } from "../../../types";

export enum AdsActionsType {
    FETCH_CREATE_NEW_AD = 'ad/FETCH_CREATE_NEW_AD',
    CREATE_NEW_AD = 'ad/CREATE_NEW_AD',
    SET_LOADING_STATE = 'ad/SET_LOADING_STATE',
}

export interface fetchCreateNewAdActionInterface extends Action<AdsActionsType> {
    type: AdsActionsType.FETCH_CREATE_NEW_AD,
    payload: any
}

export interface setCreateNewAdActionInterface extends Action<AdsActionsType> {
    type: AdsActionsType.CREATE_NEW_AD,
    payload: any
}

export interface setAdsLoadingStateActionInterface extends Action<AdsActionsType>{
    type: AdsActionsType.SET_LOADING_STATE,
    payload: LoadingState
}
