import { LinkProps } from "@/Interface";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <div className="absolute top-4 left-[650px] text-white z-10">
            <ul className="flex items-center justify-center gap-10 text-xl">
                <NavLink label="Home" url="/" active={router.pathname === "/"}/>
                <NavLink label="About" url="/about" active={router.pathname.includes("about")}/>
                <NavLink label="Documents" url="/files" active={router.pathname.includes("files")}/>
            </ul>
        </div>
    )
}

const NavLink = ({label, url, active}: LinkProps) => {
    return (
        <li className={`py-2 px-2 rounded-sm ${active ? " text-primary border-b-2 border-primary" : "hover:border-b-4 hover:border-primary hover:text-primary duration-500 ease-in-out"}`}>
            <Link href={url} >{label}</Link>
        </li>
    )
}