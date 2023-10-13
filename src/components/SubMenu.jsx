
import { setToggleCategoryMenu } from "@/state/MenuActions";
import useStore from "@/state/store";
import Link from "next/link";

const SubMenu = ({ child, toggleSubmenu }) => {
    const { toggleCategoryMenu } = useStore();
    if (toggleSubmenu) {
        return (
            <ul>
                {child.map((subItem, index) => (
                    <li key={index} className="group">

                        <Link href={subItem.link} className="text-base text-slate-700 rounded-lg pl-14  px-5 py-2 flex hover:bg-indigo-400 hover:text-white group">
                            <div className="flex-1">
                                <span className="capitalize">{subItem.text}</span>
                            </div>
                            {subItem.subchild && subItem.subchild.length > 0 &&
                                <span className="flex-none w-8 h-8 rounded-full group-hover:bg-white flex justify-center items-center group-hover:text-indigo-600"
                                    onClick={() => setToggleCategoryMenu(subItem.subchild)}>
                                    {
                                        toggleCategoryMenu ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>
                                    }

                                </span>
                            }
                        </Link>
                    </li>
                ))}

            </ul >
        )
    }

};

export default SubMenu;