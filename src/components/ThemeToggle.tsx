import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const ToggleButton = styled.button`
  padding: 9px 13px;
  border: 1px solid ${({ theme }) => theme.line};
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font: inherit;
  font-size: 12px;
`

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { language } = useLanguage()
  const danish = language === 'da'

  return (
    <ToggleButton onClick={toggleTheme} aria-label={danish ? 'Skift farvetema' : 'Toggle color theme'}>
      {theme === 'light' ? (danish ? 'Mørkt tema' : 'Dark mode') : (danish ? 'Lyst tema' : 'Light mode')}
    </ToggleButton>
  )
}
