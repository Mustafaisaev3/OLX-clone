import { Ad, LoadingState } from "../../../types";


export interface AdState {
    ad: Ad | undefined,
    status: LoadingState
}