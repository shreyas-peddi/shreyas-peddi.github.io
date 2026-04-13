import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../../data/resumeData'

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

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const JobCard = styled(motion.div)`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.borderMid};
  }
`

const JobTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  gap: 16px;
  flex-wrap: wrap;
`

const JobLeft = styled.div``

const Role = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textBright};
  margin-bottom: 4px;
  font-weight: 500;
`

const Company = styled.p`
  font-size: 13px;
  color: ${({ $color }) => $color};

  span {
    opacity: 0.6;
    font-size: 12px;
  }
`

const JobRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`

const Badge = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.green};
  border: 1px solid ${({ theme }) => theme.greenDim};
  padding: 2px 8px;
  letter-spacing: 0.06em;
`

const Period = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  letter-spacing: 0.04em;
`

const Highlights = styled.ul`
  list-style: none;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Highlight = styled.li`
  font-size: 13px;
  color: ${({ theme }) => theme.text};
  line-height: 1.75;
  padding-left: 18px;
  position: relative;

  &::before {
    content: '›';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.textSec};
    font-size: 16px;
    line-height: 1.5;
  }
`

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <Section id="experience" ref={ref}>
      <SectionHead>
        <Cmd><span>$</span> git log --work</Cmd>
        <Rule />
      </SectionHead>

      <Stack>
        {experience.map((job, i) => (
          <JobCard
            key={job.id}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <JobTop>
              <JobLeft>
                <Role>{job.role}</Role>
                <Company $color={job.color}>
                  {job.company}
                  <span> · {job.location}</span>
                </Company>
              </JobLeft>
              <JobRight>
                {job.badge && (
                  <Badge>{job.badge.replace('🌟 ', '')}</Badge>
                )}
                <Period>{job.period}</Period>
              </JobRight>
            </JobTop>

            <Highlights>
              {job.highlights.map((h, j) => (
                <Highlight key={j}>{h}</Highlight>
              ))}
            </Highlights>
          </JobCard>
        ))}
      </Stack>
    </Section>
  )
}
