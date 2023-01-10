import axios from "axios"
import { useUI } from "../context/ui.context"


export interface AuthResponceApi {
    status: string,
    data: any
}

export const AuthApi = {
    async signUp(postData: any): Promise<AuthResponceApi> {
        const {data} = await axios.post<AuthResponceApi>('http://localhost:8888/register', {email: postData.email, password: postData.password})
        return data
    },

    async signIn(postData: any) {
        const data = await axios.post<AuthResponceApi>('http://localhost:8888/login', {email: postData.email, password: postData.password})
        console.log(data)
        return data
    },

    async auth () {
        const data = await axios.get<AuthResponceApi>('http://localhost:8888/auth',{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        console.log(data)

        return data
    }
}