import { LoadingState } from "../../types"
import { ConversationsActions } from "./action"
import { ConversationsActionsType } from "./contracts/actionTypes"
import { ConversationsState } from "./contracts/state"




export const initialState: ConversationsState = {
    conversation: undefined,
    userConversations: undefined,
    status: LoadingState.NEVER
}

export const ChatReducer = (state = initialState, action: ConversationsActions) => {
    switch(action.type) {
        case ConversationsActionsType.SET_CONVERSATION:
            return {
                ...state,
                conversation: action.payload
            }

        case ConversationsActionsType.SET_USER_CONVERSATIONS:
            return {
                ...state,
                userConversations: action.payload
            }
            
        default:
            return state
    }
}