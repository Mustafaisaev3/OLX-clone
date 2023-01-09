import axios from "axios"


export interface AuthResponceApi {
    status: string,
    data: any
}

export const AdsApi = {
    async createAd(postData: any): Promise<AuthResponceApi> {
        const formData = new FormData()
        postData.photos.map((item: any) => {
            formData.append(item.file.name, item.file)
        }) 
        
        formData.append(`data`, JSON.stringify(postData))

        console.log(formData)
        console.log(postData.photos)

        const { data } = await axios.post<AuthResponceApi>('http://localhost:8888/create_new_ad', formData)
        return data
    },

}