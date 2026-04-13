import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../../data/resumeData'

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

const SkillRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 20px;
  align-items: start;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

const RowLabel = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-top: 5px;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const Tag = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 13px;
  letter-spacing: 0.02em;
  transition: all 0.18s;

  &:hover {
    color: ${({ theme }) => theme.green};
    border-color: ${({ theme }) => theme.greenDim};
    background: ${({ theme }) => theme.bgHighlight};
  }
`

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <Section id="skills" ref={ref}>
      <SectionHead>
        <Cmd><span>$</span> skills --list</Cmd>
        <Rule />
      </SectionHead>

      <SkillRows>
        {Object.entries(skills).map(([category, items], i) => (
          <Row
            key={category}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.09 }}
          >
            <RowLabel>{category}</RowLabel>
            <Tags>
              {items.map(skill => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </Tags>
          </Row>
        ))}
      </SkillRows>
    </Section>
  )
}
