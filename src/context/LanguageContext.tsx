import { createContext, useContext } from 'react'

export type Language = 'en' | 'da'
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void }

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)
