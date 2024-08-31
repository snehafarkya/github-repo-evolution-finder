import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailandPassword=async (email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailandPassword=async (email, password)=>{
  return signInWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle=async ()=>{
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth,provider);
  //result.user
  return result;
}

export const doSignOut=async ()=>{
  return auth.signOut();
}