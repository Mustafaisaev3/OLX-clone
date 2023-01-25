import { all } from '@redux-saga/core/effects'
import { AdSagas } from './ducks/ad/sagas'
import { AdsSaga } from './ducks/ads/sagas'
import { categoriesSaga } from './ducks/categories/sagas'
import { ConversationsSagas } from './ducks/chat/sagas'
import { userSaga } from './ducks/user/sagas'


export function* rootSaga () {
    yield all([userSaga(), categoriesSaga(), AdsSaga(), AdSagas(), ConversationsSagas()])
}