import styled from 'styled-components'

const projects = [
  {
    number: '01',
    name: 'Weather app',
    type: 'Weather application',
    description: 'A project exploring weather information in a clear, approachable interface.',
    url: 'https://github.com/anton9750/aflevering-vejr-app',
    linkLabel: 'Explore repository',
  },
  {
    number: '02',
    name: 'Elpriser',
    type: 'Electricity prices',
    description: 'An application focused on making electricity prices easier to explore.',
    url: 'https://github.com/anton9750/aflevering-fredag-elpriser',
    linkLabel: 'Explore repository',
  },
  {
    number: '03',
    name: 'Wallywood',
    type: 'Frontend website',
    description: 'A complete frontend website built as a full website experience.',
    url: 'https://github.com/anton9750/wallywood-frontend-fredag',
    linkLabel: 'Explore repository',
  },
  {
    number: '04',
    name: 'Travelmate',
    type: 'Travel website',
    description: 'A full travel website project for exploring trip planning experiences.',
    url: 'https://github.com/anton9750/travel-mate-cms',
    linkLabel: 'Explore repository',
  },
  {
    number: '05',
    name: 'Dream',
    type: 'Gold ribbon animation engine',
    description: 'An animation engine project featuring flowing gold ribbon visuals.',
    url: 'https://anton9750.github.io/Dream/',
    linkLabel: 'View live project',
  },
  {
    number: '06',
    name: 'Professional Project 2026',
    type: 'Professional website',
    description: 'A professional website project presented as a live, browser-based experience.',
    url: 'https://anton9750.github.io/professional-project-2026/',
    linkLabel: 'View live project',
  },
]

const Page = styled.div`
  display: grid;
  gap: clamp(48px, 8vw, 88px);
`

const SunsetHero = styled.header`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 330px;
  padding: clamp(32px, 7vw, 76px);
  background: linear-gradient(118deg, #e84c2b 0%, #f47b39 48%, #ffc06b 100%);
  color: #241410;

  &::before {
    position: absolute;
    z-index: -1;
    top: -110px;
    right: clamp(-30px, 7vw, 100px);
    width: clamp(220px, 34vw, 390px);
    aspect-ratio: 1;
    border-radius: 50%;
    background: linear-gradient(145deg, #ffe3a1, #fff0c4 58%, #ffd084);
    box-shadow: 0 0 85px rgb(255 239 191 / 42%);
    content: '';
  }

  &::after {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 30%;
    background: linear-gradient(0deg, rgb(165 52 33 / 20%), transparent);
    content: '';
  }
`

const HeroEyebrow = styled.p`
  margin: 0 0 26px;
  color: #55231b;
  font: 12px 'Space Mono', monospace;
  letter-spacing: .14em;
  text-transform: uppercase;
`

const HeroTitle = styled.h1`
  max-width: 650px;
  margin: 0;
  font-size: clamp(56px, 10vw, 112px);
  font-weight: 700;
  letter-spacing: -.08em;
  line-height: .88;

  span {
    display: block;
    color: #fff5df;
  }
`

const HeroDescription = styled.p`
  max-width: 480px;
  margin: 28px 0 0;
  color: #4d251c;
  font-size: 16px;
  line-height: 1.7;
`

const ProjectSection = styled.section``

const SectionHeading = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-size: clamp(32px, 5vw, 52px);
    letter-spacing: -.065em;
  }

  p {
    max-width: 270px;
    margin: 0;
    color: ${({ theme }) => theme.muted};
    font-size: 13px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    display: block;
    p { margin-top: 10px; }
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.article`
  position: relative;
  display: flex;
  min-height: 270px;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(24px, 4vw, 36px);
  border: 1px solid ${({ theme }) => theme.line};
  background: ${({ theme }) => theme.surface};
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #f47b39;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const CardTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const ProjectNumber = styled.span`
  color: #ee6134;
  font: 12px 'Space Mono', monospace;
`

const ProjectType = styled.span`
  padding: 7px 10px;
  background: rgb(244 123 57 / 13%);
  color: #c64d2d;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
`

const ProjectName = styled.h3`
  margin: auto 0 10px;
  color: ${({ theme }) => theme.text};
  font-size: clamp(28px, 4vw, 40px);
  letter-spacing: -.06em;
`

const ProjectDescription = styled.p`
  max-width: 390px;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  line-height: 1.65;
`

const RepositoryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;

  span {
    color: #e84c2b;
    font-size: 18px;
    transition: transform 160ms ease;
  }

  &:hover span { transform: translate(3px, -3px); }
  &:hover { color: #c64d2d; }
`

export function ProjectsPage() {
  return (
    <Page>
      <SunsetHero>
        <HeroEyebrow>02 / Selected work</HeroEyebrow>
        <HeroTitle>
          Made with <span>curiosity.</span>
        </HeroTitle>
        <HeroDescription>
          A collection of applications and websites I have built while learning,
          experimenting, and bringing ideas to the browser.
        </HeroDescription>
      </SunsetHero>

      <ProjectSection aria-labelledby="projects-heading">
        <SectionHeading>
          <h2 id="projects-heading">A few things I have made</h2>
          <p>Open a project to explore its source code or live experience.</p>
        </SectionHeading>

        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.number}>
              <CardTop>
                <ProjectNumber>{project.number} / PROJECT</ProjectNumber>
                <ProjectType>{project.type}</ProjectType>
              </CardTop>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
              <RepositoryLink href={project.url} target="_blank" rel="noreferrer">
                {project.linkLabel}
              </RepositoryLink>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectSection>
    </Page>
  )
}
