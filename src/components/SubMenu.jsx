

import useStore from "@/state/store";
import Link from "next/link";



const SubMenu = ({ child, toggleSubmenu }) => {
    const { toggleCategoryMenu } = useStore();

    if (toggleSubmenu) {
        return (
            <ul className="mx-1 ">
                {child.map((subItem, index) => (
                    <li key={index} className="px-6 py-2  flex rounded-md hover:bg-indigo-400 hover:text-white group">

                        <Link href={subItem.link} className="flex-1 text-base text-slate-700 rounded-lg capitalize">  {subItem.text} </Link>
                        {subItem.subchild && subItem.subchild.length > 0 &&
                            <>
                                <span className="flex flex-none w-8 h-8 rounded-full group-hover:bg-white  justify-center items-center group-hover:text-indigo-600"
                                    onClick={() => setToggleCategoryMenu(subItem.subchild)}>
                                    {
                                        toggleCategoryMenu ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>
                                    }

                                </span>

                            </>
                        }

                    </li>
                ))}

            </ul >
        )
    }

};

export default SubMenu;