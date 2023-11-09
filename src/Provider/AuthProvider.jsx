import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";



const auth = getAuth(app);
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            console.log(currentUser)
            if(currentUser){
                
                axios.post('https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/jwt', loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })

            }
            else {
                axios.post('https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const brand = "Tasty"

    const authInfo = {
        user,
        createUser,
        signInUser,
        brand,
        signInWithGoogle,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;