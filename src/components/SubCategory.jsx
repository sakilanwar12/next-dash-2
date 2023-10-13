
import Link from "next/link";
import { usePathname } from "next/navigation";
const SubCategory = ({ item }) => {
    const pathname = usePathname()
    return (
        <li>
            <Link href={item.link} className="flex items-center space-x-4 border border-b border-gray-300 py-2 pl-12">
                <input type="checkbox" checked={pathname === "/" + item.link} />
                <span className="capitalize text-slate-700 font-semibold">{item.text}</span>
            </Link>
        </li>
    )
};

export default SubCategory;