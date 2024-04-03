import { useSession, signIn, signOut } from "next-auth/react"
import Button from "@/components/common/Button";

export const useFetchSession = () => {
    const {data: session} = useSession();
    return {session};
}