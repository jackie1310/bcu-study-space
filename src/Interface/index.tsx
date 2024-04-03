export interface Button {
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

export interface FileFrame {
    fileLink: string,
    fileName: string,
    fileId: string
}

export interface FolderFrame {
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