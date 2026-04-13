import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../data/resumeData'

const Section = styled.section`
  padding: 100px clamp(24px, 6vw, 80px);
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const SectionHead = styled.div`
  margin-bottom: 48px;
`

const Cmd = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textSec};
  margin-bottom: 12px;

  span {
    color: ${({ theme }) => theme.green};
  }
`

const Rule = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 440px), 1fr));
  gap: 2px;
`

const Card = styled(motion.a)`
  display: block;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 24px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.borderMid};
    background: ${({ theme }) => theme.bgHover};
  }
`

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`

const Num = styled.span`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 32px;
  color: ${({ theme }) => theme.textDim};
  line-height: 1;
`

const Arrow = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  letter-spacing: 0.04em;
  transition: color 0.2s;

  ${Card}:hover & {
    color: ${({ theme }) => theme.green};
  }
`

const Title = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.textBright};
  margin-bottom: 5px;
  font-weight: 500;
`

const Tagline = styled.p`
  font-size: 12px;
  color: ${({ $color }) => $color};
  margin-bottom: 14px;
  opacity: 0.85;
`

const Desc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.textSec};
  line-height: 1.75;
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

const Tech = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.textSec};
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 2px 8px;
  letter-spacing: 0.04em;
`

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <Section id="projects" ref={ref}>
      <SectionHead>
        <Cmd><span>$</span> ls ./projects</Cmd>
        <Rule />
      </SectionHead>

      <Grid>
        {projects.map((project, i) => (
          <Card
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <CardTop>
              <Num>0{i + 1}</Num>
              <Arrow>github ↗</Arrow>
            </CardTop>
            <Title>{project.name}</Title>
            <Tagline $color={project.color}>{project.tagline}</Tagline>
            <Desc>{project.description}</Desc>
            <TechRow>
              {project.tech.map(t => <Tech key={t}>{t}</Tech>)}
            </TechRow>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}
