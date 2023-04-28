import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface GlobalStates {
  darkMode: boolean;
  changeTheme: () => void;
}

const useGlobalStore = create<GlobalStates>()(
  devtools(
    persist(
      set => ({
        darkMode: true,
        changeTheme: () => set(state => ({ darkMode: !state.darkMode })),
      }),
      {
        name: 'global',
      },
    ),
  ),
);

export default useGlobalStore;
