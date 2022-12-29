import { LoadingState } from "../../../types";

export interface User {
    _id?: string,
    email: string,
    fullname: string,
    password: string,
    location: string,
    token: string
}

export interface UserState {
    user: User | undefined,
    status: LoadingState
}

