import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: 36px clamp(20px, 6vw, 88px) 20px;
  border-top: 1px solid ${({ theme }) => theme.line};
  color: ${({ theme }) => theme.muted};
  font-size: 12px;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const FooterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`

const FooterTitle = styled.h2`
  margin: 0 0 4px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
`

const Name = styled(FooterTitle)`
  font-family: 'Space Mono', monospace;
  font-size: 16px;
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.muted};
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover { color: ${({ theme }) => theme.accent}; }
`

const FooterRoute = styled(Link)`
  color: ${({ theme }) => theme.muted};
  text-decoration: none;

  &:hover { color: ${({ theme }) => theme.accent}; }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 1440px;
  margin: 30px auto 0;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.line};
  font-size: 11px;

  p { margin: 0; }

  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGroup>
          <Name>Anton Olander Jensen</Name>
          <span>Web developer and Tech College student</span>
          <span>Denmark</span>
        </FooterGroup>

        <FooterGroup>
          <FooterTitle>Get in touch</FooterTitle>
          <FooterLink href="mailto:antonjensenv2@hotmail.com">
            antonjensenv2@hotmail.com
          </FooterLink>
          <FooterLink href="tel:69302893">69302893</FooterLink>
        </FooterGroup>

        <FooterGroup>
          <FooterTitle>Explore</FooterTitle>
          <FooterRoute to="/projects">Projects</FooterRoute>
          <FooterRoute to="/about">About me</FooterRoute>
          <FooterRoute to="/contact">Contact</FooterRoute>
        </FooterGroup>
      </FooterContent>

      <FooterBottom>
        <p>? {new Date().getFullYear()} Anton Olander Jensen</p>
        <p>Designed and built with care.</p>
      </FooterBottom>
    </FooterContainer>
  )
}
