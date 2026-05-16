import create from 'zustand';
interface AuthState {
  auth: boolean;
  username: string;
}
const useAuthStore = create<AuthState>((set) => ({
  auth: false,
  username: '',
  login: (username: string) => set({ auth: true, username }),
  logout: () => set({ auth: false, username: '' })
}));
export { useAuthStore };