'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/store/authSlice';
import type { RootState } from '@/app/store/store';

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  // If user is not available yet, show nothing (or loader)
  if (!user) return null;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Welcome, </h2>
      <p className="mb-4">Email</p>
      <button
        onClick={() => dispatch(logout())}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
