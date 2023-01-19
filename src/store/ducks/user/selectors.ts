export const selectUserState = (state: any) => state.user
export const selectUserData = (state: any) => selectUserState(state).user
export const selectUserAdsData = (state: any) => selectUserState(state).userAds