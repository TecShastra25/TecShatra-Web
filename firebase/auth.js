import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";
import { app } from "./firebase"; // Import the initialized Firebase app

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize social login providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');