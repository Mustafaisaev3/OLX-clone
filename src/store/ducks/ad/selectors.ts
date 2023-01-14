export const selectAdState = (state: any) => state.ad
export const selectAd = (state: any) => selectAdState(state).ad
export const selectAdStatus = (state: any) => selectAdState(state).status
// export const selectAdPhotos = (state: any) => selectAd(state).photos
// export const selectAdOptions = (state: any) => selectAd(state).options
