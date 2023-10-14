
import useStore from "@/state/store";
import CategoryMenuHeader from "./CategoryMenuHeader";
import MainCategory from "./MainCategory";


// CategoryMenu component

const CategoryMenu = () => {
 
    const { categoryMenuData } = useStore();

    return (
        <div className="fixed left-0 top-0 lg:static h-screen   bg-slate-200" >
            <CategoryMenuHeader />
            <div className=" cursor-pointer">
                {categoryMenuData.map((category, index) => (
                    <MainCategory key={index} category={category} />
                ))}
            </div>

        </div>
    );
};

export default CategoryMenu;
