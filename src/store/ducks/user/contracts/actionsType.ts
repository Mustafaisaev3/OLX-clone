import { Action } from "redux";
import { LoadingState } from "../../../types";


export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_USER_ADS_DATA = 'user/SET_USER_ADS_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    FETCH_SIGN_OUT = 'user/FETCH_SIGN_OUT',
    FETCH_AUTH = 'user/FETCH_SIGN_OUT',
    FETCH_USER_DATA = 'user/FETCH_AUTH',
    FETCH_USER_ADS_DATA = 'user/FETCH_USER_ADS_DATA',
    FETCH_ACTIVATE_USER_AD = 'user/FETCH_ACTIVATE_USER_AD',
    FETCH_DEACTIVATE_USER_AD = 'user/FETCH_DEACTIVATE_USER_AD',
    FETCH_DELETE_USER_AD = 'user/FETCH_DELETE_USER_AD',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface fetchSignUpActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP,
    payload: any
}

export interface fetchSignInActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN,
    payload: any
}

export interface fetchSignOutActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_OUT,
    payload: any
}

export interface fetchAuthActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_AUTH,
    // payload: any
}

export interface fetchActivateUserAdActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_ACTIVATE_USER_AD,
    payload: any
}

export interface fetchDeactivateUserAdActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_DEACTIVATE_USER_AD,
    payload: any
}

export interface fetchDeleteUserAdActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_DELETE_USER_AD,
    payload: any
}

export interface fetchUserAdsActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_ADS_DATA,
    payload: any
}

export interface setUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: any
}

export interface setUserAdsDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_ADS_DATA,
    payload: any
}

export interface SetUserLoadingStateActionInterface extends Action<UserActionsType>{
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

