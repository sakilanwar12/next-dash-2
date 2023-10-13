"use client"

import { menuData } from "@/data/menudata";
import MenuItem from "./MenuItem";
import useStore from "@/state/store";
import CategoryMenu from "@/app/CategoryMenu/CategoryMenu";

const Sidebar = () => {
    const { toggleCategoryMenu } = useStore();
    return (
        <div className="flex">
            <nav className="overflow-y-auto h-screen w-[250px] border-r bg-slate-100">
                <ul>
                    {menuData.map(item => (
                        <MenuItem key={item.id} item={item} />
                    ))}
                </ul>
            </nav>
            {
                toggleCategoryMenu && <CategoryMenu />
            }



        </div>
    );
};

export default Sidebar;