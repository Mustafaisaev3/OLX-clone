export const selectChatState = (state: any) => state.chat
export const selectConversation = (state: any) => selectChatState(state).conversation
export const selectUserConversations = (state: any) => selectChatState(state).userConversations