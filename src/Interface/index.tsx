export interface ButtonModel {
    btnClass?: string,
    title: string,
    onClick?: () => void
}

export interface Progress {
    progress:  number;
}

export interface GoogleAuth {
    clientId: string,
    clientSecret: string
}

export interface ArrayType {
    map: Function,
    includes: Function
}

export interface FileModel {
    fileLink: string,
    fileName: string,
    fileId: string
}

export interface Folder {
    folderName: string,
    folderId: string,
}

export interface FolderModel {
    parentId: string | string[] | undefined,
}

export interface AdminModel {
    email: string,
    name: string
}

export interface LinkProps {
    label: string, 
    url: string,
    active: Boolean
}

export interface UserProps {
    currentUser: any,
    userLoggedIn: Boolean,
    loading: Boolean,
}