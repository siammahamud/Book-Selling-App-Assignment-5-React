/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "./firebase.config";

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const signUpWithEmail = async ({ name, email, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await updateProfile(user, { displayName: name });
    await sendEmailVerification(user);
    await signOut(auth);
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export {signUpWithEmail}