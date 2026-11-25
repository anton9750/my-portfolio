import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeToggle } from './ThemeToggle'

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

export function NavBar() {
  return (
    <Header>
      <Brand to="/" aria-label="Anton Olander Jensen, home">
        AO<span>.</span>
      </Brand>
      <Navigation aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/ai">
          AI?
        </NavLink>
      </Navigation>
      <ThemeToggle />
    </Header>
  )
}
