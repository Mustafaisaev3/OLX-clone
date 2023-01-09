import axios from "axios"


export interface CategoriesResponceApi {
    status: string,
    data: any
}

export const CategoriesApi = {
    async fetchCategories(): Promise<CategoriesResponceApi> {
        const {data} = await axios.get<CategoriesResponceApi>('http://localhost:8888/get_all_categories')
        return data
    },

    async fetchActiveCategory(categoryId: string): Promise<CategoriesResponceApi> {
        const {data} = await axios.post<CategoriesResponceApi>('http://localhost:8888/get_category', {categoryId})
        return data
    },

    // async signIn(postData: any) {
    //     console.log('sign')
    //     const data = await axios.post<AuthResponceApi>('http://localhost:8888/login', {email: postData.email, password: postData.password})
    //     console.log(data)
    //     return data
    // },

    // async auth () {
    //     const data = await axios.get<AuthResponceApi>('http://localhost:8888/auth',{
    //         headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    //     })

    //     console.log(data)

    //     return data
    // }
}