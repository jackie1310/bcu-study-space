import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({children}:any) {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
    }, []);

    async function initializeUser(user: any) {
        if (user) {
            const data = {...user}
            setCurrentUser(data);
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value: any = {
        currentUser: currentUser, 
        userLoggedIn: userLoggedIn,
        loading: loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
