import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useAxiosPublic from "../Components/hooks/useAxiosPublic";

export const AuthContext = createContext(null) //create context

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider(); //GOOGLE provider
    const axiosPublic = useAxiosPublic()

    //CREATE USER // SIGN UP //REGISTER
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //LOG IN USER // SIGN IN
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    //Google SignIN
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    //LOGOUT// SIGNOUT
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //User state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user", currentUser);
            if(currentUser){
                //get token and store client side
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){ // getting token from backend
                        localStorage.setItem('access-token',res.data.token) //setting token to client localstorage
                    }
                })
            }
            else{
                //remove token if token stored in client side
                localStorage.removeItem('access-token') //remove token if not got
            }
            setLoading(false)
        });
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])



    //passing information 
    const authInfo = {
        user, loading, createUser, signIn, logOut,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;