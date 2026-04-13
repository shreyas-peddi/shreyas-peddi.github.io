import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education, certifications, languages, publication } from '../../data/resumeData'

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

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const Block = styled(motion.div)``

const BlockLabel = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 10px;
`

const EduCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 22px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 2px;
  gap: 16px;
  flex-wrap: wrap;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.borderMid};
  }
`

const EduSchool = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textBright};
  margin-bottom: 5px;
`

const EduDegree = styled.p`
  font-size: 12px;
  color: ${({ $color }) => $color};
`

const EduRight = styled.div`
  text-align: right;
  flex-shrink: 0;
`

const EduPeriod = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  margin-bottom: 4px;
`

const EduGpa = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.green};
`

const PubCard = styled.div`
  padding: 20px 22px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};
  border-left: 2px solid ${({ theme }) => theme.green};
`

const PubTitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textBright};
  margin-bottom: 10px;
  line-height: 1.55;
`

const PubMeta = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  line-height: 1.7;
`

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2px;
`

const CertCard = styled.div`
  padding: 13px 16px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};

  p:first-child {
    font-size: 12px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 3px;
  }

  p:last-child {
    font-size: 11px;
    color: ${({ theme }) => theme.textSec};
  }
`

const LangRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`

const LangCard = styled.div`
  padding: 11px 16px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};

  p:first-child {
    font-size: 12px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 3px;
  }

  p:last-child {
    font-size: 11px;
    color: ${({ theme }) => theme.textSec};
  }
`

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <Section id="education" ref={ref}>
      <SectionHead>
        <Cmd><span>$</span> education --show</Cmd>
        <Rule />
      </SectionHead>

      <Blocks>
        <Block
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <BlockLabel>degrees</BlockLabel>
          {education.map((edu, i) => (
            <EduCard key={i}>
              <div>
                <EduSchool>{edu.school}</EduSchool>
                <EduDegree $color={edu.color}>{edu.degree}</EduDegree>
              </div>
              <EduRight>
                <EduPeriod>{edu.period} · {edu.location}</EduPeriod>
                <EduGpa>GPA {edu.gpa}</EduGpa>
              </EduRight>
            </EduCard>
          ))}
        </Block>

        <Block
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <BlockLabel>publication</BlockLabel>
          <PubCard>
            <PubTitle>{publication.title}</PubTitle>
            <PubMeta>
              {publication.authors}<br />
              {publication.venue} · {publication.publisher} · {publication.pages} · {publication.year}
            </PubMeta>
          </PubCard>
        </Block>

        <Block
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <BlockLabel>certifications</BlockLabel>
          <CertGrid>
            {certifications.map((cert, i) => (
              <CertCard key={i}>
                <p>{cert.name}</p>
                <p>{cert.issuer}</p>
              </CertCard>
            ))}
          </CertGrid>
        </Block>

        <Block
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <BlockLabel>languages</BlockLabel>
          <LangRow>
            {languages.map((lang, i) => (
              <LangCard key={i}>
                <p>{lang.flag} {lang.lang}</p>
                <p>{lang.level}</p>
              </LangCard>
            ))}
          </LangRow>
        </Block>
      </Blocks>
    </Section>
  )
}
