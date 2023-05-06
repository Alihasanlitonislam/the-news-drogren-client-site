import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const createEmailPassword =(email, password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoding (true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () =>{
        setLoding(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubcirb = onAuthStateChanged(auth, userinf =>{
            setUser(userinf)
            setLoding(false)
        })
        return(()=>{
            unsubcirb()
        })
    },[])
    const authInfo = {
        user,
        loding,
        createEmailPassword,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;