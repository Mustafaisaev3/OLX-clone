import { Action } from "redux";
import { LoadingState } from "../../../types";


export enum CategoriesActionsType {
    SET_CATEGORIES_DATA = 'category/SET_CATEGORIES_DATA',
    SET_ACTIVE_CATEGORY_DATA = 'category/SET_ACTIVE_CATEGORY_DATA',
    FETCH_CATEGORIES_DATA = 'category/FETCH_CATEGORIES_DATA',
    FETCH_ACTIVE_CATEGORY = 'category/FETCH_ACTIVE_CATEGORY',
    SET_LOADING_STATE = 'category/SET_LOADING_STATE',
    // FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    // FETCH_SIGN_OUT = 'user/FETCH_SIGN_OUT',
    // FETCH_AUTH = 'user/FETCH_SIGN_OUT',
    // FETCH_USER_DATA = 'user/FETCH_AUTH',
}

export interface setCategoriesActionInterface extends Action<CategoriesActionsType> {
    type: CategoriesActionsType.SET_CATEGORIES_DATA,
    payload: any
}

export interface setActiveCategoryActionInterface extends Action<CategoriesActionsType> {
    type: CategoriesActionsType.SET_ACTIVE_CATEGORY_DATA,
    payload: any
}

export interface fetchCategoryActionInterface extends Action<CategoriesActionsType> {
    type: CategoriesActionsType.FETCH_ACTIVE_CATEGORY,
    payload: string
}

export interface fetchCategoriesActionInterface extends Action<CategoriesActionsType> {
    type: CategoriesActionsType.FETCH_CATEGORIES_DATA,
}

export interface setCategoriesLoadingStateActionInterface extends Action<CategoriesActionsType>{
    type: CategoriesActionsType.SET_LOADING_STATE,
    payload: LoadingState
}
