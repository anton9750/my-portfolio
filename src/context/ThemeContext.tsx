import { createContext, useContext } from 'react'
export type ColorMode = 'light' | 'dark'
type ThemeContextValue = { theme: ColorMode; toggleTheme: () => void }
export const ThemeContext = createContext<ThemeContextValue>({ theme: 'light', toggleTheme: () => {} })
export const useTheme = () => useContext(ThemeContext)
