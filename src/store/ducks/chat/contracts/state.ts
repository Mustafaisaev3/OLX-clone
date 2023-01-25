import { LoadingState, Option, Ad } from "../../../types";

interface ConversationInterface {
    ad: any,
    users: any[],
    messages: any[],
}

export interface ConversationsState {
    conversation: ConversationInterface | undefined,
    userConversations: ConversationInterface[] | undefined,
    status: LoadingState
}