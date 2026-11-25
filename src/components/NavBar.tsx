import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeToggle } from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  padding: 22px clamp(20px, 6vw, 88px);
  border-bottom: 1px solid ${({ theme }) => theme.line};
`

const Brand = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-family: 'Space Mono', monospace;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.08em;
  text-decoration: none;

  span {
    color: ${({ theme }) => theme.accent};
  }
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(14px, 3vw, 38px);

  a {
    color: ${({ theme }) => theme.muted};
    font-size: 13px;
    text-decoration: none;
  }

  a.active,
  a:hover {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 700px) {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 12px;
    overflow-x: auto;
    padding-top: 8px;

    a {
      min-height: 36px;
      font-size: 11px;
      white-space: nowrap;
    }
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 700px) { margin-left: auto; }
`

const LanguageSelect = styled.select`
  min-height: 38px;
  padding: 8px 28px 8px 11px;
  border: 1px solid ${({ theme }) => theme.line};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font: inherit;
  font-size: 12px;
`

export function NavBar() {
  const { language, setLanguage } = useLanguage()
  const danish = language === 'da'

  return (
    <Header>
      <Brand to="/" aria-label="Anton Olander Jensen, home">
        AO<span>.</span>
      </Brand>
      <Navigation aria-label={danish ? 'Hovednavigation' : 'Main navigation'}>
        <NavLink to="/" end>
          {danish ? 'Hjem' : 'Home'}
        </NavLink>
        <NavLink to="/projects">
          {danish ? 'Projekter' : 'Projects'}
        </NavLink>
        <NavLink to="/about">
          {danish ? 'Om mig' : 'About'}
        </NavLink>
        <NavLink to="/contact">
          {danish ? 'Kontakt' : 'Contact'}
        </NavLink>
        <NavLink to="/ai">
          AI?
        </NavLink>
      </Navigation>
      <Controls>
        <LanguageSelect
          aria-label={danish ? 'Vælg sprog' : 'Choose language'}
          value={language}
          onChange={(event) => setLanguage(event.target.value as 'en' | 'da')}
        >
          <option value="en">English</option>
          <option value="da">Dansk</option>
        </LanguageSelect>
        <ThemeToggle />
      </Controls>
    </Header>
  )
}
