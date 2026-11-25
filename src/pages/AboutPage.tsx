import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Card, Eyebrow, Grid } from '../components/ui'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`

const slowDrift = keyframes`
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-14px) rotate(3deg); }
`

const revealDetail = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`

const expertise = [
  { name: 'React', detail: 'I build reusable interface components and compose them into interactive pages.' },
  { name: 'TypeScript', detail: 'I add clear types to JavaScript so component props and application data are easier to work with.' },
  { name: 'JavaScript', detail: 'I use JavaScript to add behaviour, handle user input, and bring web interfaces to life.' },
  { name: '.NET', detail: 'I have worked with the .NET ecosystem as part of my web development toolkit.' },
  { name: 'CSS', detail: 'I style responsive layouts, refine visual details, and create clear states for interactive elements.' },
  { name: 'Tailwind CSS', detail: 'I use utility classes to build and adjust layouts directly in my components.' },
  { name: 'SCSS', detail: 'I use SCSS features to organize styles and reuse values across a stylesheet.' },
  { name: 'Sanity', detail: 'I work with Sanity as a content platform for managing structured website content.' },
  { name: 'SQL', detail: 'I use SQL to query and work with structured data in relational databases.' },
  { name: 'Three.js', detail: 'I explore Three.js to create and display interactive 3D content in the browser.' },
  { name: 'Next.js', detail: 'I build React applications with Next.js routing and its wider frontend framework features.' },
]

const AboutLayout = styled.div`
  --about-accent: #1c704d;

  display: grid;
  gap: clamp(64px, 10vw, 120px);

  ${Eyebrow} {
    color: var(--about-accent);
  }

  > section {
    animation: ${fadeIn} 650ms both;
  }

  > section:nth-child(2) { animation-delay: 120ms; }
  > section:nth-child(3) { animation-delay: 240ms; }

  @media (prefers-reduced-motion: reduce) {
    > section { animation: none; }
  }
`

const Intro = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(32px, 7vw, 76px);
  background: linear-gradient(125deg, #0d382d 0%, #14543d 58%, #1c704d 100%);
  color: #fff;
  animation: ${fadeIn} 650ms both;

  &::after {
    position: absolute;
    right: -48px;
    bottom: -140px;
    width: clamp(220px, 35vw, 430px);
    aspect-ratio: 1;
    border: 1px solid rgb(255 255 255 / 28%);
    border-radius: 50%;
    box-shadow: 0 0 0 28px rgb(255 255 255 / 7%), 0 0 0 60px rgb(255 255 255 / 5%);
    content: '';
    pointer-events: none;
    animation: ${slowDrift} 12s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    &::after { animation: none; }
  }
`

const IntroEyebrow = styled.p`
  position: relative;
  z-index: 1;
  margin: 0 0 26px;
  font: 12px 'Space Mono', monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
`

const IntroHeading = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0;
  font-size: clamp(54px, 10vw, 120px);
  font-weight: 600;
  letter-spacing: -.075em;
  line-height: .92;

  span {
    display: block;
    color: #bde8c8;
  }
`

const IntroText = styled.p`
  position: relative;
  z-index: 1;
  max-width: 570px;
  margin: 32px 0 0;
  color: rgb(255 255 255 / 90%);
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.7;
`

const Section = styled.section``

const SectionHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 30px;

  h2 {
    margin: 0;
    font-size: clamp(38px, 6vw, 68px);
    letter-spacing: -.07em;
    line-height: 1;
  }

  h2 span { color: var(--about-accent); }

  @media (max-width: 600px) {
    display: block;
  }
`

const SectionNote = styled.p`
  max-width: 280px;
  margin: 0;
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  line-height: 1.6;
`

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  > article {
    animation: ${fadeIn} 500ms both;
  }

  > article:nth-child(2) { animation-delay: 50ms; }
  > article:nth-child(3) { animation-delay: 100ms; }
  > article:nth-child(4) { animation-delay: 150ms; }
  > article:nth-child(5) { animation-delay: 200ms; }
  > article:nth-child(6) { animation-delay: 250ms; }
  > article:nth-child(7) { animation-delay: 300ms; }
  > article:nth-child(8) { animation-delay: 350ms; }
  > article:nth-child(9) { animation-delay: 400ms; }
  > article:nth-child(10) { animation-delay: 450ms; }
  > article:nth-child(11) { animation-delay: 500ms; }

  @media (prefers-reduced-motion: reduce) {
    > article { animation: none; }
  }
`

const ExpertiseCard = styled.article<{ $selected: boolean }>`
  border: 1px solid ${({ $selected, theme }) => $selected ? 'var(--about-accent)' : theme.line};
  background: ${({ $selected, theme }) => $selected ? theme.surface : 'transparent'};
  transition: border-color 160ms ease, background-color 160ms ease, transform 160ms ease;
  &:hover { transform: translateY(-2px); }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`

const ExpertiseButton = styled.button`
  display: flex;
  width: 100%;
  min-height: 68px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font: inherit;
  text-align: left;

  &:hover span:first-child { color: var(--about-accent); }
`

const SkillNumber = styled.span`
  margin-right: auto;
  color: var(--about-accent);
  font: 11px 'Space Mono', monospace;
`

const ExpandMark = styled.span<{ $selected: boolean }>`
  color: var(--about-accent);
  font-size: 22px;
  line-height: 1;
  transform: rotate(${({ $selected }) => $selected ? '45deg' : '0'});
  transition: transform 160ms ease;
`

const ExpertiseDetail = styled.p`
  margin: 0;
  padding: 0 20px 22px 52px;
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  line-height: 1.7;
  animation: ${revealDetail} 180ms ease-out both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`

export function AboutPage() {
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null)

  return (
    <AboutLayout>
      <Intro>
        <IntroEyebrow>03 / A little about me</IntroEyebrow>
        <IntroHeading>
          Curious by <span>nature.</span>
        </IntroHeading>
        <IntroText>
          I am Anton Olander Jensen, a 28-year-old web developer and Tech College
          student. I enjoy bringing ideas to life in the browser, learning modern
          tools, and paying attention to the details that make websites clear and
          easy to use.
        </IntroText>
      </Intro>

      <Section aria-label="Background">
        <Eyebrow>Where I am now</Eyebrow>
        <Grid>
          <Card>
            <Eyebrow>Education</Eyebrow>
            <h2>Tech College</h2>
            <p>Studying web development and building a strong foundation across design and code.</p>
          </Card>
          <Card>
            <Eyebrow>What I enjoy</Eyebrow>
            <h2>Frontend craft</h2>
            <p>Accessible interfaces, responsive layouts, and thoughtful component design.</p>
          </Card>
        </Grid>
      </Section>

      <Section aria-labelledby="expertise-heading">
        <SectionHeader>
          <div>
            <Eyebrow>Tools and technologies</Eyebrow>
            <h2 id="expertise-heading">Expertise<span>.</span></h2>
          </div>
          <SectionNote>Choose a technology to see how I use it in my web development work.</SectionNote>
        </SectionHeader>

        <ExpertiseGrid>
          {expertise.map((item, index) => {
            const isSelected = selectedExpertise === item.name
            const detailId = `expertise-${index}`

            return (
              <ExpertiseCard key={item.name} $selected={isSelected}>
                <ExpertiseButton
                  type="button"
                  aria-expanded={isSelected}
                  aria-controls={detailId}
                  onClick={() => setSelectedExpertise(isSelected ? null : item.name)}
                >
                  <SkillNumber>{String(index + 1).padStart(2, '0')}</SkillNumber>
                  <span>{item.name}</span>
                  <ExpandMark $selected={isSelected} aria-hidden="true">+</ExpandMark>
                </ExpertiseButton>
                {isSelected && <ExpertiseDetail id={detailId}>{item.detail}</ExpertiseDetail>}
              </ExpertiseCard>
            )
          })}
        </ExpertiseGrid>
      </Section>
    </AboutLayout>
  )
}

