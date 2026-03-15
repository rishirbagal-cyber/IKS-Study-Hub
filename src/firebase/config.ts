import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Authentication functions
export const signupUser = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  // Store additional user info
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: name || "User",
    email: email,
    createdAt: serverTimestamp()
  });
  
  return user;
};

export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const logoutUser = async () => {
  await signOut(auth);
};

// Firestore functions for study_materials
export const saveStudyMaterial = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "study_materials"), {
      ...data,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving study material", error);
    throw error;
  }
};

export const getStudyMaterial = async (id) => {
  try {
    if (id) {
      const docRef = doc(db, "study_materials", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        return null;
      }
    } else {
      const querySnapshot = await getDocs(collection(db, "study_materials"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  } catch (error) {
    console.error("Error getting study material", error);
    throw error;
  }
};

export const updateStudyMaterial = async (id, data) => {
  try {
    const docRef = doc(db, "study_materials", id);
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error("Error updating study material", error);
    throw error;
  }
};

export const deleteStudyMaterial = async (id) => {
  try {
    const docRef = doc(db, "study_materials", id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting study material", error);
    throw error;
  }
};
