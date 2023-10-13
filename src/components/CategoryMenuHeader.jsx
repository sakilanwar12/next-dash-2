

const CategoryMenuHeader = () => {
    return (
        <div className="mt-5">
            <div className="flex items-center space-x-5  px-5">
                <select className="flex-1 h-8 px-2 text-slate-700 rounded-sm capitalize text-base">
                    <option disabled={true} value="">All Items Groups</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                </select>
                <button type="button" className="flex-none flex items-center bg-indigo-500 text-gray-200 px-2 py-1 rounded-md">
                    <i className="fa-solid fa-plus"></i>
                    <span className="capitalize ml-1">new</span>
                </button>
            </div>
            <div className="mt-5"></div>
        </div>
    );
};

export default CategoryMenuHeader;