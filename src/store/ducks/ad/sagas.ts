import { takeEvery, call, put } from '@redux-saga/core/effects'
import { AdsApi } from '../../../services/AdApi'
import { LoadingState } from '../../types'
import { setAdData, setAdLoadingState } from './action'
import { AdActionsType } from './contracts/actionType'

export function* fetchAdByIdRequest ({payload}: any) {
    try {
        yield put(setAdLoadingState(LoadingState.LOADING))
        // const { data, images } = yield call(AdsApi.getAdById, payload)
        const { data } = yield call(AdsApi.getAdById, payload)
        // const ad = {...data, photos: images}
        yield put(setAdData(data))
        yield put(setAdLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setAdLoadingState(LoadingState.ERROR))
    }
}

export function* AdSagas () {
    yield takeEvery(AdActionsType.FETCH_AD_BY_ID, fetchAdByIdRequest)
}