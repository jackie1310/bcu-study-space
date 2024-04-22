import { User, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from "firebase/auth"
import { auth } from "./firebaseConfig";

export const signUpNewUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUser = async (email:string, password:string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => {
    return auth.signOut();
}

export const passwordReset = (email: string) => {
    return sendPasswordResetEmail(auth, email);
}

export const passwordChange = (password: string) => {
    return updatePassword(auth.currentUser as User, password);
}

export const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser as User, {
        url: `${window.location.origin}`,
    });
}