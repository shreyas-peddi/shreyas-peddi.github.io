import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { projects } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { GithubLogo, X, ArrowSquareOut } from '@phosphor-icons/react'

const ProjectsSection = styled.section`
  padding: 100px 24px;
  background: ${theme.colors.cream2};
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
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const CardOuter = styled(motion.div)`
  cursor: none;
`

const ProjectCard = styled.div`
  background: ${theme.colors.cream};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: ${theme.borderRadius.card};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${theme.shadows.cardHover};
  }
`

const CardTop = styled.div`
  background: ${props => props.$color};
  padding: 28px 28px 20px;
  position: relative;
`

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 8px;
`

const CardTitle = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: 1.4rem;
  color: ${theme.colors.cream};
  text-shadow: 2px 2px 0 rgba(61, 46, 30, 0.3);
`

const CardTagline = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  color: rgba(251, 245, 230, 0.85);
  font-weight: 600;
  margin-top: 4px;
`

const CardBottom = styled.div`
  padding: 20px 28px;
`

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`

const TechTag = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  background: ${theme.colors.cream2};
  border: 1.5px solid ${theme.colors.charcoal};
  border-radius: 20px;
  color: ${theme.colors.charcoal};
`

const ViewBtn = styled(motion.button)`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.85rem;
  color: ${theme.colors.cream};
  background: ${props => props.$color};
  padding: 8px 20px;
  border-radius: 30px;
  border: 2px solid ${theme.colors.charcoal};
  box-shadow: 2px 2px 0 ${theme.colors.charcoal};
  cursor: none;
  display: flex;
  align-items: center;
  gap: 6px;
`

// Modal
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(61, 46, 30, 0.5);
  backdrop-filter: blur(6px);
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

const Modal = styled(motion.div)`
  background: ${theme.colors.cream};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: ${theme.borderRadius.card};
  max-width: 580px;
  width: 100%;
  box-shadow: 8px 8px 0 ${theme.colors.charcoal};
  overflow: hidden;
  position: relative;
`

const ModalTop = styled.div`
  background: ${props => props.$color};
  padding: 32px 32px 24px;
`

const ModalIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`

const ModalTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: 2rem;
  color: ${theme.colors.cream};
  text-shadow: 2px 2px 0 rgba(61, 46, 30, 0.3);
`

const ModalTagline = styled.p`
  font-family: ${theme.fonts.body};
  color: rgba(251, 245, 230, 0.85);
  font-weight: 600;
  margin-top: 6px;
`

const CloseBtn = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(251, 245, 230, 0.2);
  border: 2px solid rgba(251, 245, 230, 0.5);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;
  color: ${theme.colors.cream};
`

const ModalBody = styled.div`
  padding: 28px 32px;
`

const ModalDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: ${theme.colors.charcoal};
  margin-bottom: 24px;
`

const GithubLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.9rem;
  color: ${theme.colors.cream};
  background: ${theme.colors.charcoal};
  padding: 10px 22px;
  border-radius: 30px;
  border: 2px solid ${theme.colors.charcoal};
  box-shadow: 2px 2px 0 ${theme.colors.charcoalLight};
  cursor: none;
`

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: 'spring', damping: 18 },
  }),
}

function ProjectModal({ project, onClose }) {
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <Modal
        initial={{ scale: 0.7, opacity: 0, y: 60 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 60 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalTop $color={project.color}>
          <ModalIcon>{project.icon}</ModalIcon>
          <ModalTitle>{project.name}</ModalTitle>
          <ModalTagline>{project.tagline}</ModalTagline>
          <CloseBtn onClick={onClose} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <X size={16} weight="bold" />
          </CloseBtn>
        </ModalTop>
        <ModalBody>
          <ModalDescription>{project.description}</ModalDescription>
          <TechRow style={{ marginBottom: 24 }}>
            {project.tech.map(t => <TechTag key={t}>{t}</TechTag>)}
          </TechRow>
          <GithubLink
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <GithubLogo size={18} weight="bold" />
            View on GitHub
            <ArrowSquareOut size={14} />
          </GithubLink>
        </ModalBody>
      </Modal>
    </Overlay>
  )
}

export default function Projects() {
  const { ref, inView } = useScrollReveal()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <ProjectsSection id="projects">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 18 }}
        >
          <SectionLabel>What I've built</SectionLabel>
          <SectionTitle>Projects</SectionTitle>
        </motion.div>

        <CardsGrid>
          {projects.map((project, i) => (
            <CardOuter
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                transitionSpeed={400}
                glareEnable={false}
              >
                <ProjectCard>
                  <CardTop $color={project.color}>
                    <CardIcon>{project.icon}</CardIcon>
                    <CardTitle>{project.name}</CardTitle>
                    <CardTagline>{project.tagline}</CardTagline>
                  </CardTop>
                  <CardBottom>
                    <TechRow>
                      {project.tech.map(t => <TechTag key={t}>{t}</TechTag>)}
                    </TechRow>
                    <ViewBtn
                      $color={project.color}
                      onClick={() => setActiveProject(project)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowSquareOut size={14} />
                      Learn More
                    </ViewBtn>
                  </CardBottom>
                </ProjectCard>
              </Tilt>
            </CardOuter>
          ))}
        </CardsGrid>
      </Container>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </ProjectsSection>
  )
}
