import { AdminModel, ArrayType } from "@/Interface";
import { database } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

let files = collection(database, "admin");

export const fetchAdmins = () => {
    const [admins, setAdmins] = useState<ArrayType>([]);

    const getAdmins = () => {
        onSnapshot(files, (response) => {
            setAdmins(
                response.docs
                    .map((item) => {
                        return {...item.data(), id: item.id};
                    }
                ).map((obj: any) => obj.email)
            )
        })
    }

    useEffect(() => {
        getAdmins();
    }, []);

    return {admins};
}