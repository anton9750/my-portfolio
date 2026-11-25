import styled from 'styled-components'
import { useLanguage } from '../context/LanguageContext'

const ContactPanel = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(30px, 7vw, 76px);
  background: linear-gradient(135deg, #081a33 0%, #102e52 60%, #164574 100%);
  color: #f6f9ff;

  &::after {
    position: absolute;
    z-index: -1;
    top: -150px;
    right: -100px;
    width: clamp(240px, 40vw, 460px);
    aspect-ratio: 1;
    border: 1px solid rgb(146 199 255 / 28%);
    border-radius: 50%;
    background: radial-gradient(circle, rgb(83 155 226 / 28%), transparent 68%);
    box-shadow: 0 0 0 34px rgb(146 199 255 / 5%), 0 0 0 72px rgb(146 199 255 / 4%);
    content: '';
    pointer-events: none;
  }
`

const Eyebrow = styled.p`
  position: relative;
  z-index: 1;
  margin: 0 0 24px;
  color: #8fc6ff;
  font: 12px 'Space Mono', monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
`

const Heading = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 750px;
  margin: 0;
  color: #fff;
  font-size: clamp(48px, 9vw, 98px);
  letter-spacing: -.075em;
  line-height: .96;

  span { color: #8fc6ff; }
`

const Intro = styled.p`
  position: relative;
  z-index: 1;
  max-width: 540px;
  margin: 24px 0 0;
  color: rgb(246 249 255 / 78%);
  font-size: 16px;
  line-height: 1.7;
`

const ContactDetails = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  max-width: 700px;
  margin-top: 46px;
  border-top: 1px solid rgb(255 255 255 / 20%);
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid rgb(255 255 255 / 20%);
  color: #fff;
  font-size: clamp(16px, 3vw, 23px);
  text-decoration: none;
  overflow-wrap: anywhere;

  span:first-child {
    color: #9db8d8;
    font: 11px 'Space Mono', monospace;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  span:last-child {
    color: #9bd0ff;
    transition: transform 160ms ease;
  }

  &:hover span:last-child { transform: translate(4px, -3px); }
`

export function ContactPage() {
  const { language } = useLanguage()
  const danish = language === 'da'

  return (
    <ContactPanel>
      <Eyebrow>{danish ? '04 / Kontakt' : '04 / Get in touch'}</Eyebrow>
      <Heading>
        {danish ? 'Lad os skabe' : 'Let us make'} <span>{danish ? 'noget.' : 'something.'}</span>
      </Heading>
      <Intro>
        {danish
          ? 'Har du en idé, et projekt eller vil du bare sige hej? Du kan kontakte mig på mail eller telefon.'
          : 'Have an idea, a project, or just want to say hello? You can reach me by email or phone.'}
      </Intro>

      <ContactDetails aria-label={danish ? 'Kontaktoplysninger' : 'Contact details'}>
        <ContactLink href="mailto:antonjensenv2@hotmail.com">
          <span>{danish ? 'E-mail' : 'Email'}</span>
          <span>antonjensenv2@hotmail.com</span>
        </ContactLink>
        <ContactLink href="tel:69302893">
          <span>{danish ? 'Telefon' : 'Phone'}</span>
          <span>69302893</span>
        </ContactLink>
      </ContactDetails>
    </ContactPanel>
  )
}
