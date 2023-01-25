import { takeEvery, call, put } from '@redux-saga/core/effects'
import { ChatApi } from '../../../services/ChatApi'
import { LoadingState } from '../../types'
import { setConversation, setConversationsLoadingState, setUserConversations } from './action'
import { ConversationsActionsType } from './contracts/actionTypes'

export function* fetchConversationRequest ({payload}: any) {
    try {
        console.log(payload)
        yield put(setConversationsLoadingState(LoadingState.LOADING))
        const { data } = yield call(ChatApi.getConversation, payload)
        yield put(setConversation(data[0]))
        console.log(data, 'hhhh')
        yield put(setConversationsLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setConversationsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchUserConversationsRequest ({payload}: any) {
    try {
        console.log(payload)
        yield put(setConversationsLoadingState(LoadingState.LOADING))
        const { data } = yield call(ChatApi.getConversations, payload)
        console.log(data, 'hhhh')
        yield put(setUserConversations(data))
        yield put(setConversationsLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setConversationsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchSendMessageRequest ({payload}: any) {
    try {
        console.log(payload)
        yield put(setConversationsLoadingState(LoadingState.LOADING))
        const { data: messageData } = yield call(ChatApi.sendMessage, payload)
        const { data: conversationData } = yield call(ChatApi.getConversation, {adId: payload.adId, userId: payload.senderId})
        const { data: userConversations } = yield call(ChatApi.getConversations, payload)
        yield put(setConversation(conversationData[0]))
        yield put(setUserConversations(userConversations))
        yield put(setConversationsLoadingState(LoadingState.LOADED))
    } catch (error) {
        yield put(setConversationsLoadingState(LoadingState.ERROR))
    }
}

export function* ConversationsSagas () {
    yield takeEvery(ConversationsActionsType.FETCH_CONVERSATION, fetchConversationRequest)
    yield takeEvery(ConversationsActionsType.FETCH_USER_CONVERSATIONS, fetchUserConversationsRequest)
    yield takeEvery(ConversationsActionsType.FETCH_SEND_MESSAGE, fetchSendMessageRequest)
}