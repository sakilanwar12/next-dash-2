"use client"

import { useState } from "react";
import SubCategory from "./SubCategory";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainCategory = ({ category }) => {
    const [showSubCategory, setShowSubCategory] = useState(false);
    const pathname = usePathname()

    return (
        <ul >
            <li>

                <Link href={category.link} className="flex items-center space-x-4 border border-b border-gray-300 py-2 px-5">
                    <input type="checkbox" checked={pathname === "/" + category.link} />
                    <div className="space-x-4">
                        <span onClick={() => setShowSubCategory(!showSubCategory)} ><i className="fa-solid fa-folder"></i></span>
                        <span className="capitalize text-slate-700 font-semibold">{category.text}</span>
                    </div>
                </Link>
                {showSubCategory && category.subchild && category.subchild.length > 0 && (
                    <ul>
                        {category.subchild.map((item, subIndex) => (
                            <SubCategory key={subIndex} item={item} />
                        ))}
                    </ul>
                )}
            </li>
        </ul>
    )
}
export default MainCategory;
