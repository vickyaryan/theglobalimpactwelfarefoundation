// src/services/donorService.js
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const saveDonorDetails = async (name, email, amount) => {
  try {
    const docRef = await addDoc(collection(db, 'donations'), {
      name: name,
      email: email,
      amount: parseFloat(amount), // Ensure amount is stored as a number
      date: Timestamp.now(), // Automatically record the current timestamp
    });
    console.log('Donor details saved with ID: ', docRef.id);
    return { success: true, docId: docRef.id };
  } catch (e) {
    console.error('Error adding donation document: ', e);
    return { success: false, error: e.message };
  }
};

export { saveDonorDetails };
