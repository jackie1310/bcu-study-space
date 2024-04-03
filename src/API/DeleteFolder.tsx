import { database } from "@/firebaseConfig";
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { deleteFile } from "./Firestore";

export const deleteFolder = async (folderId: string) => {
    try {
        const q = query(collection(database, "files"), where("parentId", "==", folderId));
        const querySnapshot = await getDocs(q);

        // Iterate through each document in the query snapshot and delete it
        querySnapshot.forEach(async (singleDoc: any) => {
            const documentRef = doc(database, "files", singleDoc.id);
            const documentSnapshot = await getDoc(documentRef);
            const documentData: any= documentSnapshot.data();
            console.log(documentData);
            if (documentData.isFolder === true) {
                deleteFolder(singleDoc.id);
                await deleteDoc(doc(database, "files", singleDoc.id));
            }
            else {
                await deleteFile(documentData.fileName, singleDoc.id);
                // console.log(`Document with ID ${doc.id} successfully deleted!`);
            }
        });
        await deleteDoc(doc(database, "files", folderId));
    } catch (error) {
        console.error("Error deleting documents: ", error);
    }
}