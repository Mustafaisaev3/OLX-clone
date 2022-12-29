import { LoadingState } from "../../types";
import { fetchSignOutActionInterface, fetchSignUpActionInterface, setUserDataActionInterface, fetchSignInActionInterface, fetchAuthActionInterface, SetUserLoadingStateActionInterface, UserActionsType } from "./contracts/actionsType";


export const fetchSignUp = (payload: any): fetchSignUpActionInterface => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload,
})

export const fetchSignIn = (payload: any): fetchSignInActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
})

export const fetchSignOut = (payload: any): fetchSignOutActionInterface => ({
    type: UserActionsType.FETCH_SIGN_OUT,
    payload,
})

export const fetchAuth = (): fetchAuthActionInterface => ({
    type: UserActionsType.FETCH_SIGN_OUT
})

export const setUserData = (payload: any): setUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload, 
})

export const setUserDataLoadingState = (payload: LoadingState): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
})

export type UserActions = 
    |fetchSignUpActionInterface
    |fetchSignInActionInterface
    |fetchSignOutActionInterface
    |setUserDataActionInterface
    |SetUserLoadingStateActionInterface
    |fetchAuthActionInterface