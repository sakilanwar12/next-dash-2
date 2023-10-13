
"use client"
import Link from "next/link";
import { useState } from "react";
import SubMenu from "./SubMenu";


const MenuItem = ({ item }) => {
    const [toggleSubmenu, setToggleSubmenu] = useState(false);

    if (item.child && item.child.length > 0) {
        return (
            <li>
                <button className="text-lg  rounded-lg px-5 py-2 flex justify-between w-full text-slate-700 hover:bg-indigo-400 hover:text-white" onClick={()=>setToggleSubmenu(!toggleSubmenu)}>
                    <div>
                        <span className="mr-1">
                            <i className={item.icon}></i>
                        </span>
                        <span className="capitalize">{item.text}</span>
                    </div>
                    <span className={toggleSubmenu?"rotate-0":"-rotate-90"}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                </button>
                <SubMenu child={item.child} toggleSubmenu={toggleSubmenu} />
            </li>
        )
    }

    return (
        <li>
            <Link href={item.link} className="text-lg text-slate-700 rounded-lg px-5 py-2 flex hover:bg-indigo-400 hover:text-white ">
                <div className="flex-1">
                    <span className="mr-1">
                        <i className={item.icon}></i>
                    </span>
                    <span className="capitalize">{item.text}</span>
                </div>
                {item.child && item.child.length > 0 && (
                    <span className="flex-none">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                )}
            </Link>

        </li>
    );
};

export default MenuItem;
