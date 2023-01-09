import { all } from '@redux-saga/core/effects'
import { AdsSaga } from './ducks/ads/sagas'
import { categoriesSaga } from './ducks/categories/sagas'
import { userSaga } from './ducks/user/sagas'


export function* rootSaga () {
    yield all([userSaga(), categoriesSaga(), AdsSaga()])
}