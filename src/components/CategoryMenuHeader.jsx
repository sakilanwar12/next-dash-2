import { setToggleCategoryMenu } from "@/state/MenuActions";


const CategoryMenuHeader = () => {
    return (
        <div className="pt-5">
            <div className="flex flex-wrap items-center space-x-5 space-y-2 lg:space-y-0  px-5">
                <select className="grow-1 h-8 px-2 text-slate-700 rounded-sm capitalize text-base bg-white">
                    <option disabled={true} value="">All Items Groups</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                </select>
                <div className="grow-0 flex items-center space-x-2">
                    <button type="button" className="flex-none flex items-center bg-indigo-500 text-gray-200 px-2 py-1 rounded-md">
                        <i className="fa-solid fa-plus"></i>
                        <span className="capitalize ml-1">new</span>
                    </button>
                    <button type="button" className="w-8 h-8 rounded-full bg-gray-800  text-white" onClick={setToggleCategoryMenu}><i className="fa-solid fa-close"></i></button>
                </div>
            </div>
            <div className="mt-5"></div>
        </div>
    );
};

export default CategoryMenuHeader;