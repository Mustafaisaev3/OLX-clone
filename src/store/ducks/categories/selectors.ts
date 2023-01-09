
export const selectCategoriesState = (state: any) => state.categories
export const selectCategoriesData = (state: any) => selectCategoriesState(state).categories
export const selectActiveCategory = (state: any) => selectCategoriesState(state).activeCategory