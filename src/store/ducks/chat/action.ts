import { SendMessageInterface } from "../../../services/ChatApi";
import { LoadingState } from "../../types";
import { fetchConversationActionInterface, fetchUserConversationsActionInterface, setUserConversationsActionInterface, fetchSendMessageActionInterface, setConversationActionInterface, setConversationLoadingStateActionInterface, ConversationsActionsType} from "./contracts/actionTypes";


export const fetchConversation = (payload: any): fetchConversationActionInterface => ({
    type: ConversationsActionsType.FETCH_CONVERSATION,
    payload
})

export const fetchUserConversations = (payload: any): fetchUserConversationsActionInterface => ({
    type: ConversationsActionsType.FETCH_USER_CONVERSATIONS,
    payload
})

export const sendMessage = (payload: any): fetchSendMessageActionInterface => ({
    type: ConversationsActionsType.FETCH_SEND_MESSAGE,
    payload
})

export const setConversation = (payload: any): setConversationActionInterface => ({
    type: ConversationsActionsType.SET_CONVERSATION,
    payload
})

export const setUserConversations = (payload: any): setUserConversationsActionInterface => ({
    type: ConversationsActionsType.SET_USER_CONVERSATIONS,
    payload
})

export const setConversationsLoadingState = (payload: LoadingState): setConversationLoadingStateActionInterface => ({
    type: ConversationsActionsType.SET_LOADING_STATE,
    payload,
})


export type ConversationsActions = 
    | fetchConversationActionInterface
    | fetchUserConversationsActionInterface
    | setConversationActionInterface
    | setUserConversationsActionInterface
    | setConversationLoadingStateActionInterface