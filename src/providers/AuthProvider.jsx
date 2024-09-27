import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    //CREATE USER // SIGN UP //REGISTER
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //LOG IN USER // SIGN IN
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //LOGOUT// SIGNOUT
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    //User state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])



    //passing information 
    const authInfo = {
        user,loading,createUser,signIn,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;