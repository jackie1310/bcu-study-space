
import HeroContent from "../Hero/HeroContent";
import NavBar from "../NavBar";
import Topbar from "../Topbar";

export default function Layout ({children}: any) {
    return (
        <main 
        // className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]  gap-12 p-4"
            className="flex min-h-screen flex-col bg-gradient-to-b bg-n-8 gap-12 p-4"
        >
            <Topbar/>
            <NavBar/>
            <HeroContent/>
            {children}
        </main>
    )
}