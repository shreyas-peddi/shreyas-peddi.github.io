import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { experience } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { MapPin, Calendar } from '@phosphor-icons/react'

const ExperienceSection = styled.section`
  padding: 100px 24px 120px;
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
  margin-bottom: 60px;
  text-shadow: 3px 3px 0 ${theme.colors.sageLight};
`

const RoadWrapper = styled.div`
  position: relative;
  padding-left: 60px;
`

const RoadSvgWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50px;
`

const RoadPath = styled(motion.div)`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 10px;
  background: ${theme.colors.cream2};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background: repeating-linear-gradient(
      to bottom,
      ${theme.colors.gold} 0px,
      ${theme.colors.gold} 10px,
      transparent 10px,
      transparent 20px
    );
  }
`

const Milestone = styled(motion.div)`
  position: absolute;
  left: 10px;
  width: 30px;
  height: 30px;
  background: ${props => props.$color};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: 50%;
  box-shadow: 2px 2px 0 ${theme.colors.charcoal};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  z-index: 2;
`

const MilestoneLabel = styled.span`
  position: absolute;
  left: 46px;
  top: 4px;
  font-size: 0.65rem;
  font-weight: 700;
  font-family: ${theme.fonts.body};
  white-space: nowrap;
  color: ${theme.colors.charcoalLight};
`

const ExperienceCard = styled(motion.div)`
  background: ${theme.colors.cream};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: ${theme.borderRadius.card};
  padding: 28px 32px;
  margin-bottom: 40px;
  box-shadow: ${theme.shadows.card};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 20px;
    width: 20px;
    height: 2.5px;
    background: ${theme.colors.charcoal};
  }
`

const CardAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: ${props => props.$color};
  border-radius: 16px 16px 0 0;
`

const CompanyRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 6px;
`

const CompanyName = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: 1.3rem;
  color: ${theme.colors.charcoal};
`

const BadgeRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
`

const RoleBadge = styled.span`
  background: ${props => props.$color};
  color: ${theme.colors.cream};
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 20px;
  border: 2px solid ${theme.colors.charcoal};
`

const PromoBadge = styled(motion.span)`
  background: ${theme.colors.gold};
  color: ${theme.colors.charcoal};
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 20px;
  border: 2px solid ${theme.colors.charcoal};
`

const MetaRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
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

const BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Bullet = styled(motion.li)`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${theme.colors.charcoal};
  padding-left: 20px;
  position: relative;

  &::before {
    content: '🌿';
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 0.75rem;
  }
`

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, type: 'spring', damping: 18 },
  }),
}

function ExperienceItem({ job, index, roadRef }) {
  const { ref, inView } = useScrollReveal({ threshold: 0.2 })

  return (
    <div ref={ref} style={{ position: 'relative', marginBottom: 40 }}>
      <ExperienceCard
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        whileHover={{ y: -4, boxShadow: theme.shadows.cardHover }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <CardAccent $color={job.color} />
        <CompanyRow>
          <CompanyName>{job.icon} {job.company}</CompanyName>
          <BadgeRow>
            {job.badge && (
              <PromoBadge
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10, delay: 0.3 }}
              >
                {job.badge}
              </PromoBadge>
            )}
            <RoleBadge $color={job.color}>{job.role}</RoleBadge>
          </BadgeRow>
        </CompanyRow>
        <MetaRow>
          <MetaItem><Calendar size={12} weight="bold" />{job.period}</MetaItem>
          <MetaItem><MapPin size={12} weight="bold" />{job.location}</MetaItem>
        </MetaRow>
        <BulletList>
          {job.highlights.map((h, i) => (
            <Bullet
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {h}
            </Bullet>
          ))}
        </BulletList>
      </ExperienceCard>
    </div>
  )
}

export default function Experience() {
  const { ref: titleRef, inView: titleInView } = useScrollReveal()
  const roadRef = useRef(null)
  const milestonePositions = [0, 25, 50, 75]

  return (
    <ExperienceSection id="experience">
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 18 }}
        >
          <SectionLabel>Where I've been</SectionLabel>
          <SectionTitle>Experience</SectionTitle>
        </motion.div>

        <RoadWrapper>
          <RoadSvgWrapper>
            <RoadPath />
            {experience.map((job, i) => (
              <div key={job.id} style={{ position: 'absolute', top: `${i * 25 + 5}%` }}>
                <Milestone
                  $color={job.color}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: 'spring', damping: 10 }}
                  whileHover={{ scale: 1.3 }}
                >
                  {job.icon}
                </Milestone>
              </div>
            ))}
          </RoadSvgWrapper>

          {experience.map((job, i) => (
            <ExperienceItem key={job.id} job={job} index={i} />
          ))}
        </RoadWrapper>
      </Container>

      {/* Decorations */}
      <motion.div
        style={{ position: 'absolute', bottom: 20, right: 30, fontSize: '2.5rem', opacity: 0.3 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ⚙️
      </motion.div>
    </ExperienceSection>
  )
}
