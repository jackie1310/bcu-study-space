import ShowFiles from '@/components/ShowFiles';
import Topbar from '@/components/Topbar';
import UploadFiles from '@/components/UploadFiles'
import { useRouter } from 'next/router';
import React from 'react'

export default function Folder() {
    const router = useRouter();
    let parentId = router?.query?.id;
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4">
            <Topbar/>
            <UploadFiles parentId={parentId}/>
            <div className='mt-20'>
                <ShowFiles parentId={parentId}/>
            </div>
        </div>
    )
}
