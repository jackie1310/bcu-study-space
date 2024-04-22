import React from 'react';
import {signIn, signOut } from "next-auth/react"
// import { useFetchSession } from '@/hooks/useSession';
import Button from "@/components/common/Button";
import styles from "./Topbar.module.scss";
import { UserProps } from '@/Interface';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/router';
import { signOutUser } from '@/auth';
import { toast } from 'sonner';

export default function Topbar() {
    // let {session} = useFetchSession();
    const {userLoggedIn, currentUser}: UserProps = useAuth()as UserProps;
    const router = useRouter();

    const toSignIn = () => {
        router.push('/signin');
    }

    const handleSignOut = () => {
        if (userLoggedIn) {
            signOutUser();
            router.push('/');
            toast.success('Sign out successfully')
        }
    }

    console.log(currentUser);
    return (
        // <div className={styles.authBtn}>
        //     {session ? (
        //         // <Button onClick={() => signOut()} btnClass="btn-primary text-white uppercase" title="Sign out!"/>
        //         <img onClick={() => signOut()} className={styles.profileImg} src={session?.user.image as string} />
        //     ) : (
        //         <Button onClick={() => signIn()} btnClass="btn-primary text-white uppercase" title="Sign in!"/>
        //     )}
        // </div>
        <div className={styles.authBtn}>
            {userLoggedIn ? (
                // <Button onClick={() => signOut()} btnClass="btn-primary text-white uppercase" title="Sign out!"/>
                <Button onClick={handleSignOut} btnClass="btn-primary text-white uppercase" title='Sign out!'/>
            ) : (
                <Button onClick={() => toSignIn()} btnClass="btn-primary text-white uppercase" title="Sign in!"/>
            )}
        </div>
    )
}
