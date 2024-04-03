import { deleteFile } from "./Firestore";

export const deletingFile = async (fileName: string, fileId: string) => {
    await deleteFile(fileName, fileId);
}