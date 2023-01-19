import { LoadingState } from "../../types"
import { UserActions } from "./action"
import { UserActionsType } from "./contracts/actionsType"

const initialState = {
    user: {},
    userAds: [],
    isAuth: false,
    status: LoadingState.NEVER
}

export const userReducer = (state = initialState, action: UserActions) => {
    switch(action.type) {
        case UserActionsType.FETCH_SIGN_UP:
            return {
                ...state,
                status: LoadingState.SUCCESS
            }

        // case UserActionsType.FETCH_SIGN_IN:
        //     return {
        //         ...state,
        //         user: action.payload,
        //         isAuth: true,
        //         status: LoadingState.SUCCESS
        //     }

        case UserActionsType.FETCH_SIGN_OUT:
            return {
                ...state,
                user: {},
                isAuth: false,
                status: LoadingState.SUCCESS
            }

        case UserActionsType.SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                status: LoadingState.SUCCESS
            }

        case UserActionsType.SET_USER_ADS_DATA:
            return {
                ...state,
                userAds: action.payload,
                status: LoadingState.SUCCESS
            }

        case UserActionsType.SET_LOADING_STATE:
            return {
                ...state,
                status: action.payload
            }

        default:
            return state
    }
}