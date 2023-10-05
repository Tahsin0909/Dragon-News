/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../FireBase/Auth";
import { useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext(null)

const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [currentuser, setCurrentUser] = useState({ })

    const GoogleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            }
            console.log(currentuser)
        });
        return () => unSubscribe()
    }, [])

    const SignUpEmail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const GoogleSignOut = () => {
        signOut(auth)
            .then(
                setCurrentUser({ }),

            )
            .catch(error => console.log(error.message))
    }
    const Providers = {
        currentuser,
        GoogleSignIn,
        GoogleSignOut,
        SignUpEmail,
        SignInEmail
    }
    return (
        <AuthContext.Provider value={Providers}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };