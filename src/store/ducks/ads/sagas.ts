import { takeEvery, call, put } from '@redux-saga/core/effects'
import { AdsApi } from '../../../services/AdApi'
import { LoadingState } from '../../types'
import { setAdsLoadingState, setCreateNewAdData } from './action'
import { AdsActionsType } from './contracts/actionTypes'

export function* createNewAdRequest ({payload}: any) {
    try {
        console.log(payload)
        yield put(setAdsLoadingState(LoadingState.LOADING))
        const { data } = yield call(AdsApi.createAd, payload)
        yield put(setCreateNewAdData(data))
        yield put(setAdsLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setAdsLoadingState(LoadingState.ERROR))
    }
}

export function* AdsSaga () {
    yield takeEvery(AdsActionsType.FETCH_CREATE_NEW_AD, createNewAdRequest)
}