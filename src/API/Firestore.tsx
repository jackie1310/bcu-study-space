import { database, storage } from "@/firebaseConfig";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

let files = collection(database, 'files')

export const addFiles = (fileLink: string, fileName: string, parentId: string) => {
    try {
        addDoc(files, {
            fileLink: fileLink,
            fileName: fileName,
            isFolder: false,
            parentId: parentId
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const addFolder = (payload: { 
    folderName: string, 
    isFolder: boolean, 
    fileList: object,
    parentId: string
}) => {
    try {
        addDoc(files, {
            folderName: payload.folderName,
            isFolder: payload.isFolder,
            fileList: payload.fileList,
            parentId: payload.parentId
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteFile = async (fileName: string, fileId: string) => {
    try {
        // Delete file in Storage
        const fileRef = ref(storage, `files/${fileName}`);
        await deleteObject(fileRef);

        // Delete file in Document
        const docRef = doc(database, "files", fileId);
        await deleteDoc(docRef);

        console.log("File deleted successfully");
    } catch (error) {
        console.error("Error deleting file:", error);
    }
}