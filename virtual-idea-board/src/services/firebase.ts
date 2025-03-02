import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBS1dQhpbmVWHu_pjSCaiOjCuvB2ZO2dRE",
    authDomain: "virtual-idea-board.firebaseapp.com",
    projectId: "virtual-idea-board",
    storageBucket: "virtual-idea-board.firebasestorage.app",
    messagingSenderId: "118162493115",
    appId: "1:118162493115:web:b71fb538105d8932da639e",
    measurementId: "G-F8M8KDWH06"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
};


export const logout = async () => {
    await signOut(auth);
};

export const addTask = async (task: Task) => {
    await addDoc(collection(db, 'tasks'), task);
};

export const getTasks = async (userId: string) => {
    const q = query(collection(db, 'tasks'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateTask = async (taskId: string, updates: Partial<Task>) => {
    await updateDoc(doc(db, 'tasks', taskId), updates);
};

export const deleteTask = async (taskId: string) => {
    await deleteDoc(doc(db, 'tasks', taskId));
};