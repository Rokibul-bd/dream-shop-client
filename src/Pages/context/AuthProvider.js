import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loadding, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(err => console.error(err))
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubcribe()
        }
    }, [])


    const authInfo = {
        user,
        registerUser,
        loginUser,
        logOut,
        loadding,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;