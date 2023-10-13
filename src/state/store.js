import { create } from 'zustand'

const initialState = {
    toggleCategoryMenu: false,
    categoryMenuData:[]
}
const useStore = create((set) => ({
    ...initialState,
}))


export default useStore;