export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    SUCCESS = 'SUCCESS',
}

export interface Option {
    _id?: string,
    name: string,
    fieldType: string,
    values: string[],
}

export interface Ad {
    status: string,
    title: string,
    description: string,
    photos: [],
    category: string,
    options: Option[],
    place: string,
    price: string,
    e_mail: string,
    phone: string,
    user: string
}
