
import useStore from "@/state/store";

export const setToggleCategoryMenu = () => {
    useStore.setState((state) => ({
        toggleCategoryMenu: !state.toggleCategoryMenu,
        categoryMenuData: data,
    }));
};
