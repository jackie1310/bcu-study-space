import React, { ChangeEvent, useState } from 'react';
import styles from "./Upload.module.scss";
import Button from '../common/Button';
import { fileUpload } from '@/API/FileUpload';
import CommonProgress from '../common/Progress';
import { addFolder } from '@/API/Firestore';
import { FolderModel } from '@/Interface';
import { fetchAdmins } from '@/hooks/fetchAdmins';
// import { useFetchSession } from '@/hooks/useSession';
import { useSelector } from 'react-redux';

export default function UploadFiles({parentId}: FolderModel) {
  const [isFileVisible, setFileVisisble] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId as string);
  }
  
  const authAdmin = useSelector((state: any) => state.authAdmin.status);
  console.log(parentId);

  const uploadFolder = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId as string || "",
    };
    addFolder(payload);
    setFolderName("");
  }
  if (!authAdmin) {
    return;
  }
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-5'>
        <Button 
          title="Add a file" 
          btnClass="btn-primary text-white" 
          onClick={() => {
            setFolderVisible(false);
            setFileVisisble(!isFileVisible);
          }}
        />
        {isFileVisible && <input type="file" className="file-input w-full max-w-xs" onChange={(event) => uploadFile(event)}/>}
        <Button 
          title='Create a folder' 
          btnClass='btn-primary text-white' 
          onClick={() => {
            setFileVisisble(false);
            setFolderVisible(!isFolderVisible);
          }}
        />
        {isFolderVisible ? (
          <>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(event) => setFolderName(event.target.value)} value={folderName}/>
            <Button title='Create a folder' btnClass='btn-primary text-white' onClick={uploadFolder}/>
          </>
        ) : (
          <></>
        )}
      </div>
      {progress === 0 || progress === 100 ? <></> : <CommonProgress progress={progress}/>}
    </div>
  )
}
