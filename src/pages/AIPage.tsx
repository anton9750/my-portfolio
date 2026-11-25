import styled from 'styled-components'
import { Eyebrow } from '../components/ui'

const Page = styled.div`
  display: grid;
  gap: clamp(48px, 8vw, 88px);
`

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(32px, 7vw, 76px);
  background: linear-gradient(132deg, #21170f 0%, #38271b 58%, #4a3020 100%);
  color: #fff;

  &::after {
    position: absolute;
    top: -110px;
    right: -70px;
    width: clamp(210px, 37vw, 420px);
    aspect-ratio: 1;
    border: 1px solid rgb(255 255 255 / 18%);
    border-radius: 50%;
    box-shadow: 0 0 0 30px rgb(255 255 255 / 4%), 0 0 0 64px rgb(255 255 255 / 3%);
    content: '';
    pointer-events: none;
  }
`

const HeroEyebrow = styled(Eyebrow)`
  position: relative;
  z-index: 1;
  color: #e7b982;
`

const Title = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0;
  font-size: clamp(56px, 10vw, 112px);
  letter-spacing: -.08em;
  line-height: .92;

  span { color: #e7b982; }
`

const Lead = styled.p`
  position: relative;
  z-index: 1;
  max-width: 670px;
  margin: 28px 0 0;
  color: rgb(255 255 255 / 82%);
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.7;
`

const SectionHeading = styled.h2`
  margin: 0 0 16px;
  font-size: clamp(30px, 5vw, 48px);
  letter-spacing: -.06em;

  span { color: #a96e3f; }
`

const Paragraph = styled.p`
  max-width: 760px;
  margin: 0;
  color: ${({ theme }) => theme.muted};
  font-size: 16px;
  line-height: 1.8;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 760px) { grid-template-columns: 1fr; }
`

const Card = styled.article`
  padding: 26px;
  border: 1px solid ${({ theme }) => theme.line};
  background: ${({ theme }) => theme.surface};

  span {
    color: #a96e3f;
    font: 12px 'Space Mono', monospace;
  }

  h3 {
    margin: 24px 0 10px;
    font-size: 20px;
    letter-spacing: -.04em;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.muted};
    font-size: 14px;
    line-height: 1.7;
  }
`

const Principle = styled.section`
  padding: clamp(24px, 5vw, 42px);
  border-left: 4px solid #a96e3f;
  background: ${({ theme }) => theme.surface};

  p {
    max-width: 760px;
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-size: clamp(18px, 2.5vw, 24px);
    line-height: 1.6;
  }
`

export function AIPage() {
  return (
    <Page>
      <Hero>
        <HeroEyebrow>05 / My perspective</HeroEyebrow>
        <Title>AI is a tool.<br /><span>Judgment is mine.</span></Title>
        <Lead>
          I understand how agentic systems work and how to collaborate with AI
          tools. I can assess generated code, make changes, and decide when it is
          ready to approve.
        </Lead>
      </Hero>

      <section>
        <Eyebrow>How I work with it</Eyebrow>
        <SectionHeading>Useful when guided <span>well.</span></SectionHeading>
        <Paragraph>
          Agentic systems combine a model with instructions, context, and tools
          so it can work through tasks in steps. I understand that workflow and
          the importance of checking what an agent does at each stage. I treat
          the output as work to understand and review, not something to accept
          automatically.
        </Paragraph>
      </section>

      <Cards>
        <Card>
          <span>01 / UNDERSTAND</span>
          <h3>Agentic systems</h3>
          <p>I understand how agents use goals, context, tools, and feedback to carry out multi-step work.</p>
        </Card>
        <Card>
          <span>02 / REVIEW</span>
          <h3>AI-generated code</h3>
          <p>I can read generated code, check how it fits the project, and approve it when I am confident in the result.</p>
        </Card>
        <Card>
          <span>03 / CREATE</span>
          <h3>My own hands-on work</h3>
          <p>I mainly write and build things myself. AI is a useful assistant in my process, while I stay responsible for the work.</p>
        </Card>
      </Cards>

      <Principle>
        <p>
          I use AI to support my work, but I want to understand the code I ship
          and keep growing as a developer by building things myself.
        </p>
      </Principle>
    </Page>
  )
}
