import { LoadingState } from "../../types";
import { fetchSignOutActionInterface, fetchSignUpActionInterface, fetchActivateUserAdActionInterface, fetchDeactivateUserAdActionInterface, fetchDeleteUserAdActionInterface, fetchUserAdsActionInterface, setUserDataActionInterface, setUserAdsDataActionInterface, fetchSignInActionInterface, fetchAuthActionInterface, SetUserLoadingStateActionInterface, UserActionsType } from "./contracts/actionsType";


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

export const fetchUserAds = (payload: any): fetchUserAdsActionInterface => ({
    type: UserActionsType.FETCH_USER_ADS_DATA,
    payload
})

export const fetchActivateUserAd = (payload: any): fetchActivateUserAdActionInterface => ({
    type: UserActionsType.FETCH_ACTIVATE_USER_AD,
    payload
})

export const fetchDeactivateUserAd = (payload: any): fetchDeactivateUserAdActionInterface => ({
    type: UserActionsType.FETCH_DEACTIVATE_USER_AD,
    payload
})

export const fetchDeleteUserAd = (payload: any): fetchDeleteUserAdActionInterface => ({
    type: UserActionsType.FETCH_DELETE_USER_AD,
    payload
})

export const setUserData = (payload: any): setUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload, 
})

export const setUserAdsData = (payload: any): setUserAdsDataActionInterface => ({
    type: UserActionsType.SET_USER_ADS_DATA,
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
    |fetchUserAdsActionInterface
    |setUserDataActionInterface
    |setUserAdsDataActionInterface
    |SetUserLoadingStateActionInterface
    |fetchAuthActionInterface