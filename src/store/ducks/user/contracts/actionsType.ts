import { Action } from "redux";
import { LoadingState } from "../../../types";


export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    FETCH_SIGN_OUT = 'user/FETCH_SIGN_OUT',
    FETCH_AUTH = 'user/FETCH_SIGN_OUT',
    FETCH_USER_DATA = 'user/FETCH_AUTH',
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

export interface setUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: any
}

export interface SetUserLoadingStateActionInterface extends Action<UserActionsType>{
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

