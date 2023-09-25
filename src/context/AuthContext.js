import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const createUser = async (email, password, name) => {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(result.user, {
            displayName: name
        })
        await sendEmailVerification(result.user);

    }
    const logIn = async(email, password) => {
        const result=await signInWithEmailAndPassword(auth, email, password);
        if(result.user.emailVerified){
            return true;
        }
        return false;
    }
    const logout = () => {
        return signOut(auth);
    }
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    return (
        <UserContext.Provider value={{ createUser, logIn,resetPassword, user, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
}