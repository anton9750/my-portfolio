import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

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

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle color theme">
      {theme === 'light' ? 'Dark' : 'Light'} mode
    </ToggleButton>
  )
}
