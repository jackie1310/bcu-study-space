import { UserProps } from '@/Interface';
import Layout from '@/components/Layout';
import ShowFiles from '@/components/ShowFiles';
import Topbar from '@/components/Topbar';
import UploadFiles from '@/components/UploadFiles'
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/router';
import React from 'react'

export default function Folder() {
    const router = useRouter();
    let parentId = router?.query?.id;
    const {userLoggedIn} : UserProps = useAuth() as UserProps;

    const toSignIn = () => {
        router.push('/signin');
    }

    return (
        <div>
         {!userLoggedIn && toSignIn()}
        <Layout>
            <Topbar/>
            <UploadFiles parentId={parentId}/>
            <div className='mt-20'>
                <ShowFiles parentId={parentId}/>
            </div>
        </Layout>
        </div>
    )
}
