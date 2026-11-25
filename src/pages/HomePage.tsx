import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Welcome = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: clamp(340px, 48vh, 500px);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: clamp(24px, 4.5vw, 56px);
  background: linear-gradient(128deg, #c91f32 0%, #e4383c 52%, #fa6848 100%);
  color: #fff;

  &::before {
    position: absolute;
    z-index: -1;
    top: -18%;
    right: -15%;
    width: clamp(300px, 54vw, 690px);
    aspect-ratio: 1;
    border: 1px solid rgb(255 255 255 / 30%);
    border-radius: 50%;
    background: radial-gradient(circle at 35% 40%, rgb(255 190 128 / 70%), rgb(255 190 128 / 5%) 68%);
    box-shadow: 0 0 0 36px rgb(255 255 255 / 6%), 0 0 0 80px rgb(255 255 255 / 4%);
  }

  &::after {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: rgb(255 255 255 / 28%);
    content: '';
  }
`

const IntroLabel = styled.p`
  margin: 0 0 20px;
  font: 12px 'Space Mono', monospace;
  letter-spacing: .14em;
  text-transform: uppercase;
`

const Title = styled.h1`
  max-width: 850px;
  margin: 0;
  font-size: clamp(48px, 8vw, 98px);
  font-weight: 700;
  letter-spacing: -.085em;
  line-height: .9;

  span {
    display: block;
    color: #251414;
  }
`

const IntroText = styled.p`
  max-width: 540px;
  margin: 20px 0 0;
  color: rgb(255 255 255 / 92%);
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.7;
`

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`

const PrimaryAction = styled.a`
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  padding: 0 21px;
  background: #fff;
  color: #bd1d30;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 160ms ease, background-color 160ms ease;

  &:hover { transform: translateY(-3px); background: #fff2e8; }
`

const SecondaryAction = styled(Link)`
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  padding: 0 21px;
  border: 1px solid rgb(255 255 255 / 62%);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 160ms ease;

  &:hover { background: rgb(255 255 255 / 13%); }
`

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`

const Info = styled.span`
  padding: 9px 12px;
  border: 1px solid rgb(255 255 255 / 30%);
  color: rgb(255 255 255 / 92%);
  font: 10px 'Space Mono', monospace;
  letter-spacing: .04em;
`

export function HomePage() {
  return (
    <Welcome>
      <IntroLabel>Web developer / Denmark</IntroLabel>
      <Title>
        Hey, I am Anton.<span>I build for the web.</span>
      </Title>
      <IntroText>
        I am a 28-year-old web developer studying at Tech College. I enjoy
        turning ideas into thoughtful, responsive experiences and learning
        something new with every project.
      </IntroText>

      <ActionRow>
        <PrimaryAction href="mailto:antonjensenv2@hotmail.com">
          Get in touch <span aria-hidden="true"> ?</span>
        </PrimaryAction>
        <SecondaryAction to="/projects">Explore my projects</SecondaryAction>
      </ActionRow>

      <InfoRow aria-label="A little about me">
        <Info>28 YEARS OLD</Info>
        <Info>TECH COLLEGE</Info>
        <Info>WEB DEVELOPMENT</Info>
      </InfoRow>
    </Welcome>
  )
}
