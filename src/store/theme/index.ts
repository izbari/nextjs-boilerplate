import { create } from 'zustand'
type themes = 'dark' | 'light'
type Theme = {
  theme: themes
  toggleTheme: () => void
}

export const useTheme = create<Theme>((set, gr) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state: Omit<Theme, 'toggleTheme'>) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}))
