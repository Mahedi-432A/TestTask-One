import React from 'react'
import { AuthCotext } from './AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        createUser
    };
    
  return (
    <AuthCotext value={userInfo}>
        {children}
    </AuthCotext>
  )
}

export default AuthProvider