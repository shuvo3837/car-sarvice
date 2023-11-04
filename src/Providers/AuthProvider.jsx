import { createContext, useState } from "react";
import { getAuth } from "firebase/auth"
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const Auth = getAuth(app);

const AuthProvider = ({children}) => {
   
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;