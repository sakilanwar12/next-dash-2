
import useStore from "@/state/store";
import CategoryMenuHeader from "./CategoryMenuHeader";
import MainCategory from "./MainCategory";

// CategoryMenu component
const CategoryMenu = () => {
    const { categoryMenuData } = useStore();



    return (
        <div className="h-screen w-[350px] bg-slate-200">
            <CategoryMenuHeader />
            <div className="mt-10 cursor-pointer">
                {categoryMenuData.map((category, index) => (
                    <MainCategory key={index} category={category}  />
                ))}
            </div>
        </div>
    );
};

export default CategoryMenu;
