import React, { useEffect } from 'react';
import "./Home.module.scss"
import Topbar from '../Topbar';
import UploadFiles from '../UploadFiles';
import ShowFiles from '../ShowFiles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmins } from '@/hooks/fetchAdmins';
import { useFetchSession } from '@/hooks/useSession';
import { setAuthAdmin } from '@/redux/Loading/authAdmin';

export default function HomeComponent() {
    const authAdmin = useSelector((state: any) => state.authAdmin.status);

    console.log(authAdmin)
    return (
        <div>
            <Topbar/>
            {authAdmin ? <UploadFiles parentId=""/> : <div className='h-14'></div>}
            <div className='mt-20'>
                <ShowFiles parentId=""/>
            </div>
        </div>
    )
}
