import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { education, publication } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { GraduationCap, MapPin, BookOpen } from '@phosphor-icons/react'

const EduSection = styled.section`
  padding: 100px 24px;
  background: ${theme.colors.cream};
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const SectionLabel = styled(motion.span)`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.terracotta};
`

const SectionTitle = styled(motion.h2)`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${theme.colors.charcoal};
  margin-top: 8px;
  margin-bottom: 50px;
  text-shadow: 3px 3px 0 ${theme.colors.sageLight};
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin-bottom: 60px;
`

const EduCard = styled(motion.div)`
  background: ${theme.colors.cream};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: ${theme.borderRadius.card};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
`

const EduCardTop = styled.div`
  background: ${props => props.$color};
  padding: 24px 28px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
`

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(251, 245, 230, 0.2);
  border: 2px solid rgba(251, 245, 230, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const SchoolName = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: 1.15rem;
  color: ${theme.colors.cream};
  text-shadow: 1px 1px 0 rgba(61, 46, 30, 0.3);
`

const Degree = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  color: rgba(251, 245, 230, 0.85);
  font-weight: 600;
`

const EduCardBody = styled.div`
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  color: ${theme.colors.charcoalLight};
  font-weight: 600;
`

const GpaStamp = styled(motion.div)`
  background: ${props => props.$color};
  color: ${theme.colors.cream};
  font-family: ${theme.fonts.display};
  font-size: 1rem;
  padding: 6px 16px;
  border-radius: 20px;
  border: 2px solid ${theme.colors.charcoal};
  box-shadow: 2px 2px 0 ${theme.colors.charcoal};
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 4px;
`

// Publication
const PubCard = styled(motion.div)`
  background: ${theme.colors.cream2};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: ${theme.borderRadius.card};
  padding: 32px 36px;
  box-shadow: ${theme.shadows.card};
  position: relative;

  &::before {
    content: '📜';
    position: absolute;
    top: -16px;
    left: 28px;
    font-size: 2rem;
  }
`

const PubSubTitle = styled(motion.h3)`
  font-family: ${theme.fonts.display};
  font-size: 1.2rem;
  color: ${theme.colors.charcoal};
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const PubTitle = styled.p`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 1rem;
  color: ${theme.colors.charcoal};
  line-height: 1.5;
  margin-bottom: 10px;
`

const PubMeta = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  color: ${theme.colors.charcoalLight};
  line-height: 1.6;
`

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: 'spring', damping: 18 },
  }),
}

export default function Education() {
  const { ref, inView } = useScrollReveal()

  return (
    <EduSection id="education">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 18 }}
        >
          <SectionLabel>Where I learned</SectionLabel>
          <SectionTitle>Education</SectionTitle>
        </motion.div>

        <CardsGrid>
          {education.map((edu, i) => (
            <EduCard
              key={edu.school}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: theme.shadows.cardHover }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <EduCardTop $color={edu.color}>
                <IconCircle>
                  <GraduationCap size={24} color={theme.colors.cream} weight="bold" />
                </IconCircle>
                <div>
                  <SchoolName>{edu.school}</SchoolName>
                  <Degree>{edu.degree}</Degree>
                </div>
              </EduCardTop>
              <EduCardBody>
                <MetaItem><MapPin size={12} weight="bold" />{edu.location}</MetaItem>
                <MetaItem>{edu.period}</MetaItem>
                <GpaStamp
                  $color={edu.color}
                  initial={{ rotate: -5, scale: 0 }}
                  whileInView={{ rotate: -2, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', damping: 10 }}
                >
                  🎓 GPA: {edu.gpa}
                </GpaStamp>
              </EduCardBody>
            </EduCard>
          ))}
        </CardsGrid>

        {/* Publication */}
        <PubCard
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 18, delay: 0.2 }}
          whileHover={{ y: -4 }}
        >
          <PubSubTitle>
            <BookOpen size={22} weight="bold" color={theme.colors.terracotta} />
            Publication
          </PubSubTitle>
          <PubTitle>"{publication.title}"</PubTitle>
          <PubMeta>
            {publication.authors} ({publication.year})<br />
            <em>{publication.venue}</em>, {publication.pages}.<br />
            {publication.publisher}
          </PubMeta>
        </PubCard>
      </Container>
    </EduSection>
  )
}
