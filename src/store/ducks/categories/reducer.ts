import { LoadingState } from "../../types"
import { CategoriesActions } from "./action"
import { CategoriesActionsType } from "./contracts/actionsTypes"
import { CategoriesState } from "./contracts/state"

export const initialState: CategoriesState = {
    categories: [],
    activeCategory: undefined,
    status: LoadingState.NEVER
}

export const categoriesReducer = (state = initialState, action: CategoriesActions) => {
    switch(action.type){
        case CategoriesActionsType.SET_CATEGORIES_DATA:
            return {
                ...state,
                categories: [...action.payload],
                status: LoadingState.SUCCESS
            }
        
        case CategoriesActionsType.SET_ACTIVE_CATEGORY_DATA:
            return {
                ...state,
                activeCategory: action.payload,
                status: LoadingState.SUCCESS
            }
        
        case CategoriesActionsType.FETCH_CATEGORIES_DATA:
            return {
                ...state,
                status: LoadingState.SUCCESS
            }

        case CategoriesActionsType.SET_LOADING_STATE:
            return {
                ...state,
                status: action.payload
            }
        
        default: 
            return state
    }
}