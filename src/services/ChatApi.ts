import axios from "axios"


export interface AuthResponceApi {
    status: string,
    data?: any
}

export interface SendMessageInterface {
    adId : string,
    senderId : string,
    messageText : string,
    conversationId? : string
}

export const ChatApi = {
    async sendMessage (payload: SendMessageInterface) {
        console.log(payload)
        const { data } = await axios.post('http://localhost:8888/sendMessage', {
            adId : payload.adId,
            senderId : payload.senderId,
            messageText : payload.messageText,
            conversationId : payload.conversationId
        })

        return data
    },

    async getConversations (payload: any) {
        console.log(payload)
        const { data } = await axios.post('http://localhost:8888/getConversations', {
            user : payload.user,
        })

        return data
    },

    async getConversation (payload: any) {
        const { data } = await axios.post('http://localhost:8888/conversation', {
            adId : payload.adId,
            userId : payload.userId,
        })

        return data
    }
}