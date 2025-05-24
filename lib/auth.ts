// lib/auth.ts
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  }),
};

const adminApp = initializeApp(firebaseAdminConfig);

export const verifyFirebaseToken = async (token: string) => {
  try {
    const decoded = await getAuth(adminApp).verifyIdToken(token);
    return decoded;
  } catch (error) {
    console.error('Token verification failed', error);
    return null;
  }
};