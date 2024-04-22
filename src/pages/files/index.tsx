import { UserProps } from "@/Interface";
import HomeComponent from "@/components/Home";
import Layout from "@/components/Layout";
import ShowFiles from "@/components/ShowFiles";
import Topbar from "@/components/Topbar";
import UploadFiles from "@/components/UploadFiles";
import { useAuth } from "@/contexts/authContext";
import { fetchAdmins } from "@/hooks/fetchAdmins";
// import { useFetchSession } from "@/hooks/useSession";
import { setAuthAdmin } from "@/redux/Loading/authAdmin";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function FileStorage() {
    let {admins} = fetchAdmins();
    // let {session} = useFetchSession();
    // const user = session?.user.email;
    const dispatch = useDispatch();
    const router = useRouter();
    const {userLoggedIn, currentUser} : UserProps = useAuth() as UserProps;
    console.log(currentUser)
    const user = currentUser?.email;

    if (admins.includes(user)) {
        dispatch(setAuthAdmin(true));
    }
    const authAdmin = useSelector((state: any) => state.authAdmin.status);
    const toSignIn = () => {
        router.push('/signin');
    }
    return (
        // <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        //     <div className="container flex flex-col gap-12 p-4">
        <main>
        {!userLoggedIn && toSignIn()}
        <Layout>
            {authAdmin && <Topbar/>}
            <UploadFiles parentId=""/>
            <div className='mt-20'>
                <ShowFiles parentId=""/>
            </div>
        </Layout>
        </main>
                
        //     </div>
        // </main>
    )
}