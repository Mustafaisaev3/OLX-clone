import {takeEvery, put, call} from '@redux-saga/core/effects'
import { AdsApi } from '../../../services/AdApi'
import { AuthApi } from '../../../services/AuthApi'
import { LoadingState } from '../../types'
import { setUserAdsData, setUserData, setUserDataLoadingState } from './action'
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

export function* fetachUserAdsData ({payload}: any) {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        const { data } = yield call(AdsApi.getUserAds, payload)
        console.log(data,'hello1')
        yield put(setUserAdsData(data))
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* fetchDeleteUserAdSaga ({payload}: any) {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        yield call(AdsApi.deleteAd, payload)
        const { data } = yield call(AdsApi.getUserAds, payload)
        yield put(setUserAdsData(data))
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* fetchActivateUserAdSaga ({payload}: any) {
    try {
        console.log(payload)
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        yield call(AdsApi.activateAd, payload.adId)
        const { data } = yield call(AdsApi.getUserAds, payload.userId)
        yield put(setUserAdsData(data))
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* fetchDeactivateUserAdSaga ({payload}: any) {
    try {
        yield put(setUserDataLoadingState(LoadingState.LOADING))
        yield call(AdsApi.deactivateAd, payload.adId)
        const { data } = yield call(AdsApi.getUserAds, payload.userId)
        yield put(setUserAdsData(data))
        yield put(setUserDataLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserDataLoadingState(LoadingState.ERROR))
    }
}

export function* userSaga () {
    yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionsType.FETCH_AUTH, fetchAuth)
    yield takeEvery(UserActionsType.FETCH_USER_ADS_DATA, fetachUserAdsData)
    yield takeEvery(UserActionsType.FETCH_DELETE_USER_AD, fetchDeleteUserAdSaga)
    yield takeEvery(UserActionsType.FETCH_ACTIVATE_USER_AD, fetchActivateUserAdSaga)
    yield takeEvery(UserActionsType.FETCH_DEACTIVATE_USER_AD, fetchDeactivateUserAdSaga)
}


