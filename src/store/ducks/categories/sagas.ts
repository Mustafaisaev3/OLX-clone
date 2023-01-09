import { CategoriesActionsType } from "./contracts/actionsTypes"
import {takeEvery, put, call} from '@redux-saga/core/effects'
import { setActiveCategory, setCategories, setUserDataLoadingState } from "./action"
import { LoadingState } from "../../types"
import { CategoriesApi } from "../../../services/CategoriesApi"


export function* fetchCategoriesRequest () {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        const { data } = yield call(CategoriesApi.fetchCategories)
        console.log(data)
        yield put(setCategories(data))
        yield put(setUserDataLoadingState(LoadingState.LOADED))
        
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))  
    }
}

export function* fetchCategory ({ payload }: any) {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        const { data } = yield call(CategoriesApi.fetchActiveCategory, payload)
        console.log(data)
        yield put(setActiveCategory(data))
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))  
    }
}

export function* categoriesSaga () {
    yield takeEvery(CategoriesActionsType.FETCH_CATEGORIES_DATA, fetchCategoriesRequest)
    yield takeEvery(CategoriesActionsType.FETCH_ACTIVE_CATEGORY, fetchCategory)
}

