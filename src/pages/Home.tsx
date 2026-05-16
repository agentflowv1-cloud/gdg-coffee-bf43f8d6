import React from 'react';
import { useAuthStore } from '../stores/authStore';
function Home() {
  const { username } = useAuthStore((state) => state);
  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
}
export default Home;