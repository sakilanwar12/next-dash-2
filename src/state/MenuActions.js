import useStore from "@/state/store";

export const setToggleCategoryMenu = (data) => {
    useStore.setState(state => (
        {
            toggleCategoryMenu: !state.toggleCategoryMenu,
            categoryMenuData: data
        }))
}