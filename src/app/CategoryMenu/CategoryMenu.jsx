"use client"
import useStore from "@/state/store";
import { useState } from "react";


const CategoryMenu = () => {
    const { categoryMenuData } = useStore();
    const [showSubChild, setShowSubChild] = useState(false);
    return (
        <div className="h-screen w-[350px] bg-slate-200">
            {/* header */}
            <div className="mt-5"></div>
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
            <div className=" mt-5"></div>
            {/* form */}
            <div className="mt-10">

                {
                    categoryMenuData.map((category, index) => (
                        <ul key={index}>

                            <li>
                                <div className="flex items-center space-x-4 border border-b border-gray-300 py-2 px-5">
                                    <div>
                                        <input type="checkbox" />
                                    </div>
                                    <div className="space-x-4">
                                        <span onClick={() => setShowSubChild(!showSubChild)}><i className="fa-solid fa-folder"></i></span>
                                        <span className="capitalize text-slate-700 font-semibold">{category.text}</span>
                                    </div>
                                </div>
                                {category.subchild  && category.subchild.length > 0 && (
                                    <ul>
                                        {category.subchild.map((item, subIndex) => (
                                            <li key={subIndex} className="flex items-center space-x-4 border border-b border-gray-300 py-2 pl-12">
                                                <div>
                                                    <input type="checkbox" />
                                                </div>
                                                <span className="capitalize text-slate-700 font-semibold">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                        </ul>
                    ))
                }



            </div>
        </div>
    );
};

export default CategoryMenu;