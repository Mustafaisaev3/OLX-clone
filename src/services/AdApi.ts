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

    async getAdById(adId: string): Promise<AuthResponceApi> {
        const { data } = await axios.get<AuthResponceApi>(`http://localhost:8888/getAd/${adId}`)
        // const { data } = await axios.get<AuthResponceApi>(`http://localhost:8888/getAd/63c6a19e15ec32854102fc8b`)
        console.log(data, adId)
        return data
    },

    async getUserAds(userId: string): Promise<AuthResponceApi> {
        console.log(userId)
        const { data } = await axios.post<AuthResponceApi>(`http://localhost:8888/getUserAds`, {id: userId})
        // const { data } = await axios.get<AuthResponceApi>(`http://localhost:8888/getAd/63c6a19e15ec32854102fc8b`)
        console.log(data, userId)

        return data
    },

    // async getAdById(adId: string): Promise<AuthResponceApi> {
    //     const { data } = await axios.post<AuthResponceApi>('http://localhost:8888/getAd', {id: adId})
    //     console.log(data, adId)
    //     return data
    // }

    async activateAd (adId: string): Promise<AuthResponceApi> {
        const { data } = await axios.post<AuthResponceApi>(`http://localhost:8888/activateAd`, {id: adId})

        return data
    },

    async deactivateAd (adId: string): Promise<AuthResponceApi> {
        const { data } = await axios.post<AuthResponceApi>(`http://localhost:8888/deactivateAd`, {id: adId})

        return data
    },

    async deleteAd (adId: string): Promise<any> {
        axios.delete<AuthResponceApi>(`http://localhost:8888/deleteAd/${adId}`)
    },

}