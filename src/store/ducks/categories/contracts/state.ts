import { LoadingState } from "../../../types";

export interface Option {
    _id?: string,
    name: string,
    fieldType: string,
    values: string[],
}

export interface Category {
    name: string,
    price: boolean,
    photos_num: number,
    image: string,
    color: string,
    options: Option[],
    parent: string | undefined,
    children: string[] | undefined,
}

export interface CategoriesState {
    categories: Category[] | undefined,
    activeCategory: Category | undefined,
    status: LoadingState
}

