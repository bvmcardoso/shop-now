/** @format */
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';

const getResultsFromGoogleRedirect = async () => {
  const response = await getRedirectResult(auth);
  if (response) {
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  }
};

const SignIn = () => {
  useEffect(() => {
    getResultsFromGoogleRedirect();
  });
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const logGoogleUserWithRedirect = () => {
    signInWithGoogleRedirect();
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <button onClick={logGoogleUserWithRedirect}>
        Sign In With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
