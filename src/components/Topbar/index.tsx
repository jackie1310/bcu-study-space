import React from 'react';
import {signIn, signOut } from "next-auth/react"
import { useFetchSession } from '@/hooks/useSession';
import Button from "@/components/common/Button";
import styles from "./Topbar.module.scss";

export default function Topbar() {
    let {session} = useFetchSession();
    console.log(session?.user);
    return (
        <div className={styles.authBtn}>
            {session ? (
                // <Button onClick={() => signOut()} btnClass="btn-primary text-white uppercase" title="Sign out!"/>
                <img onClick={() => signOut()} className={styles.profileImg} src={session?.user.image as string} />
            ) : (
                <Button onClick={() => signIn()} btnClass="btn-primary text-white uppercase" title="Sign in!"/>
            )}
        </div>
    )
}
