import { all } from '@redux-saga/core/effects'
import { userSaga } from './ducks/user/sagas'


export function* rootSaga () {
    yield all([userSaga()])
}