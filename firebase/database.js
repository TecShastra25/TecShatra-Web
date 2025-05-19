import { getDatabase } from "firebase/database";
import { app } from "./firebase"; // Import the initialized Firebase app

// Initialize Realtime Database and export it
export const database = getDatabase(app);