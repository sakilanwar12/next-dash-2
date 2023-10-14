"use client"

import { menuData } from "@/data/menudata";
import MenuItem from "./MenuItem";
import useStore from "@/state/store";
import CategoryMenu from "./CategoryMenu";
import { useState } from "react";




const Sidebar = () => {
    const { toggleCategoryMenu } = useStore();
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className={`fixed top-0  lg:static flex ${showSidebar ? "-left-0" : "-left-[100%]"}`}>

            <button type="button" className="fixed right-10 top-7 lg:hidden" onClick={() => setShowSidebar(!showSidebar)}>
                {showSidebar ? <i className="fa-solid fa-close"></i> : <i className="fa-solid fa-bars"></i>}
            </button>

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