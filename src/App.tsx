import { useEffect, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { AboutPage } from './pages/AboutPage'
import { AIPage } from './pages/AIPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ThemeContext } from './context/ThemeContext'
import { LanguageContext, type Language } from './context/LanguageContext'
import { darkTheme, GlobalStyle, lightTheme } from './styles/theme'

type ColorMode = 'light' | 'dark'

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled.main`
  width: min(1120px, 100%);
  flex: 1;
  margin: 0 auto;
  padding: clamp(48px, 9vw, 112px) clamp(20px, 6vw, 84px);
`

function Layout() {
  return (
    <Site>
      <NavBar />
      <Main><Outlet /></Main>
      <Footer />
    </Site>
  )
}

export default function App() {
  const [theme, setTheme] = useState<ColorMode>(() =>
    window.localStorage.getItem('anton-theme') === 'dark' ? 'dark' : 'light',
  )
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem('anton-language') === 'da' ? 'da' : 'en',
  )

  useEffect(() => {
    window.localStorage.setItem('anton-theme', theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('anton-language', language)
    document.documentElement.lang = language
    document.title = language === 'da'
      ? 'Anton Olander Jensen — Webudvikler'
      : 'Anton Olander Jensen — Web Developer'
  }, [language])

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="ai" element={<AIPage />} />
                <Route path="*" element={<HomePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  )
}
