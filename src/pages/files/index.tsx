import HomeComponent from "@/components/Home";
import ShowFiles from "@/components/ShowFiles";
import Topbar from "@/components/Topbar";
import UploadFiles from "@/components/UploadFiles";
import { fetchAdmins } from "@/hooks/fetchAdmins";
import { useFetchSession } from "@/hooks/useSession";
import { setAuthAdmin } from "@/redux/Loading/authAdmin";
import { useDispatch, useSelector } from "react-redux";

export default function FileStorage() {
    let {admins} = fetchAdmins();
    let {session} = useFetchSession();
    const user = session?.user.email;
    const dispatch = useDispatch();
    
    if (admins.includes(user)) {
        dispatch(setAuthAdmin(true));
    }
    const authAdmin = useSelector((state: any) => state.authAdmin.status);
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <div className="container flex flex-col gap-12 p-4">
                <HomeComponent/>
            </div>
        </main>
    )
}