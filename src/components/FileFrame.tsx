import { deletingFile } from '@/API/DeleteFile';
import { FileFrame } from '@/Interface'
import React from 'react'
import { useSelector } from 'react-redux';

export default function FileFrame({fileLink, fileName, fileId} : FileFrame) {
    const openFile = (fileLink: string) => {
        window.open(fileLink);
    }
    
    const authAdmin = useSelector((state: any) => state.authAdmin.status);

    return (
        <div className='w-full flex items-center hover:bg-primary hover:bg-opacity-40 text-white px-8 py-2 rounded-md border-b border-primary'>
            <div onClick={() => openFile(fileLink)} className='flex gap-5 items-center w-5/6'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-purple-400">
                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd">
                    </path>
                </svg>
                {fileName}
            </div>
            <div className='flex gap-4 w-1/6 justify-end'>
                {authAdmin &&<button onClick={() => deletingFile(fileName, fileId)} className='active:scale-75 transform transition duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 text-slate-50">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                </button>}
            </div>
        </div>
    )
}
