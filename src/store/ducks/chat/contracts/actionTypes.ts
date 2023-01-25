import { Action } from "redux";
import { LoadingState } from "../../../types";

export enum ConversationsActionsType {
    FETCH_CONVERSATION = 'conversations/FETCH_CREATE_NEW_AD',
    FETCH_USER_CONVERSATIONS = 'conversations/FETCH_USER_CONVERSATIONS',
    FETCH_SEND_MESSAGE = 'conversations/FETCH_SEND_MESSAGE',
    SET_CONVERSATION = 'conversations/SET_CONVERSATION',
    SET_USER_CONVERSATIONS = 'conversations/SET_USER_CONVERSATIONS',
    SET_LOADING_STATE = 'conversations/SET_LOADING_STATE',
}

export interface fetchConversationActionInterface extends Action<ConversationsActionsType> {
    type: ConversationsActionsType.FETCH_CONVERSATION,
    payload: any
}

export interface fetchSendMessageActionInterface extends Action<ConversationsActionsType> {
    type: ConversationsActionsType.FETCH_SEND_MESSAGE,
    payload: any
}

export interface setConversationActionInterface extends Action<ConversationsActionsType> {
    type: ConversationsActionsType.SET_CONVERSATION,
    payload: any
}

export interface fetchUserConversationsActionInterface extends Action<ConversationsActionsType> {
    type: ConversationsActionsType.FETCH_USER_CONVERSATIONS,
    payload: any
}

export interface setUserConversationsActionInterface extends Action<ConversationsActionsType> {
    type: ConversationsActionsType.SET_USER_CONVERSATIONS,
    payload: any
}

export interface setConversationLoadingStateActionInterface extends Action<ConversationsActionsType>{
    type: ConversationsActionsType.SET_LOADING_STATE,
    payload: LoadingState
}
