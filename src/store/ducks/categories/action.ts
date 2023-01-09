import { LoadingState } from "../../types";
import { CategoriesActionsType, fetchCategoriesActionInterface, fetchCategoryActionInterface, setActiveCategoryActionInterface, setCategoriesActionInterface, setCategoriesLoadingStateActionInterface } from "./contracts/actionsTypes";


export const setCategories = (payload: any): setCategoriesActionInterface => ({
    type: CategoriesActionsType.SET_CATEGORIES_DATA,
    payload
})

export const setActiveCategory = (payload: any): setActiveCategoryActionInterface => ({
    type: CategoriesActionsType.SET_ACTIVE_CATEGORY_DATA,
    payload
})

export const fetchCategory = (payload: string): fetchCategoryActionInterface => ({
    type: CategoriesActionsType.FETCH_ACTIVE_CATEGORY,
    payload
})

export const fetchCategories = (): fetchCategoriesActionInterface => ({
    type: CategoriesActionsType.FETCH_CATEGORIES_DATA,
})
// export const fetchCategories = (payload: any): fetchCategoriesActionInterface => ({
//     type: CategoriesActionsType.FETCH_CATEGORIES_DATA,
//     payload
// })

export const setUserDataLoadingState = (payload: LoadingState): setCategoriesLoadingStateActionInterface => ({
    type: CategoriesActionsType.SET_LOADING_STATE,
    payload,
})

export type CategoriesActions = 
    |fetchCategoriesActionInterface
    |setActiveCategoryActionInterface
    |setCategoriesActionInterface
    |setCategoriesLoadingStateActionInterface
