import {takeEvery, put, call} from '@redux-saga/core/effects'
import { AuthApi } from '../../../services/AuthApi'
import { LoadingState } from '../../types'
import { setUserData, setUserDataLoadingState } from './action'
import { UserActionsType } from './contracts/actionsType'
 

export function* fetchSignUpRequest (payload: any) {
    try {
        console.log(payload.payload, 'payload')
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        // yield call(AuthApi.signUp, payload)
        const { data } = yield call(AuthApi.signUp, payload.payload)
        console.log(data.user, 'user')
        // yield put(setUserData(data.user))
        // yield window.localStorage.setItem('token', data.token)
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* fetchSignInRequest (payload: any) {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        const { data } = yield call(AuthApi.signIn, payload.payload)
        // console.log(data, 'ddd')
        yield window.localStorage.setItem('token', data.token)
        yield put(setUserData(data.user))
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAuth () {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        const { data } = yield call(AuthApi.auth)
        yield put(setUserData(data.user))
        yield window.localStorage.setItem('token', data.token)
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* userSaga () {
    yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionsType.FETCH_AUTH, fetchAuth)
}