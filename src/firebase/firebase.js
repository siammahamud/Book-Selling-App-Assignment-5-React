/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
// sign up with name, email and password
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
    console.log(error.message);
    throw error;
  }
};
// login after signup with email and password
const loginWithEmail = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// login directly  with google
const loginWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleAuthProvider);
    return response.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// login directly with github
const loginWithGithub = async () => {
  try {
    const response = await signInWithPopup(auth, githubAuthProvider);
    return response.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// forgot password , reset password email sending function
const sendResetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export { signUpWithEmail, loginWithEmail, loginWithGoogle, loginWithGithub, sendResetPassword};
