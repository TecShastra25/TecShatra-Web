import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');