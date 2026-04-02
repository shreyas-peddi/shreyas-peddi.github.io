import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/theme'
import { personal } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowSquareOut } from '@phosphor-icons/react'

const wave = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
`

const ContactSection = styled.section`
  padding: 100px 24px 60px;
  background: ${theme.colors.charcoal};
  position: relative;
  overflow: hidden;
  text-align: center;
`

const GrassTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  svg { width: 100%; display: block; }
`

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const WaveEmoji = styled(motion.span)`
  font-size: 3rem;
  display: inline-block;
  animation: ${wave} 2s ease-in-out infinite;
  transform-origin: bottom right;
  margin-bottom: 16px;
`

const Title = styled(motion.h2)`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.2rem, 6vw, 4rem);
  color: ${theme.colors.cream};
  line-height: 1.2;
  margin-bottom: 16px;
  text-shadow: 4px 4px 0 ${theme.colors.terracotta};
`

const Subtitle = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 1.05rem;
  color: ${theme.colors.sageLight};
  font-weight: 600;
  margin-bottom: 50px;
`

const LinksRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 60px;
`

const ContactLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.95rem;
  color: ${theme.colors.charcoal};
  background: ${props => props.$bg || theme.colors.cream};
  padding: 14px 26px;
  border-radius: 40px;
  border: 2.5px solid ${theme.colors.cream};
  box-shadow: 3px 3px 0 rgba(251, 245, 230, 0.3);
  cursor: none;
`

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: ${theme.colors.terracotta};
  border-radius: 2px;
  margin: 0 auto 30px;
`

const Footer = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  color: ${theme.colors.charcoalLight};
  font-weight: 600;
`

const BackgroundTotoro = styled.div`
  position: absolute;
  bottom: 0;
  right: 40px;
  opacity: 0.06;
  font-size: 12rem;
  line-height: 1;
  pointer-events: none;
`

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 18 } },
}

const contactLinks = [
  {
    label: 'GitHub',
    icon: <GithubLogo size={20} weight="bold" />,
    href: 'https://github.com/shreyas-peddi',
    bg: theme.colors.charcoalLight,
    color: theme.colors.cream,
  },
  {
    label: 'LinkedIn',
    icon: <LinkedinLogo size={20} weight="bold" />,
    href: 'https://www.linkedin.com/in/shreyas-peddi/',
    bg: '#0A66C2',
    color: theme.colors.cream,
  },
  {
    label: 'Email',
    icon: <EnvelopeSimple size={20} weight="bold" />,
    href: 'mailto:peddishreyas2@gmail.com',
    bg: theme.colors.terracotta,
    color: theme.colors.cream,
  },
]

export default function Contact() {
  const { ref, inView } = useScrollReveal()

  return (
    <ContactSection id="contact">
      <GrassTop>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60 }}>
          <path
            d="M0,30 Q180,0 360,30 Q540,60 720,30 Q900,0 1080,30 Q1260,60 1440,30 L1440,0 L0,0 Z"
            fill={theme.colors.cream}
          />
        </svg>
      </GrassTop>

      <BackgroundTotoro>🐾</BackgroundTotoro>

      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <WaveEmoji>👋</WaveEmoji>
          </motion.div>

          <Title variants={itemVariants}>
            Let's build something
          </Title>

          <Subtitle variants={itemVariants}>
            Open to full-time roles, collaborations, and interesting conversations.
          </Subtitle>

          <Divider />

          <LinksRow>
            {contactLinks.map((link, i) => (
              <ContactLink
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                $bg={link.bg}
                style={{ color: link.color }}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -4, rotate: i % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 12 }}
              >
                {link.icon}
                {link.label}
                <ArrowSquareOut size={14} />
              </ContactLink>
            ))}
          </LinksRow>

          <Footer variants={itemVariants}>
            Built with React + Framer Motion + a lot of ☕ · Shreyas Peddi © 2025
          </Footer>
        </motion.div>
      </Container>
    </ContactSection>
  )
}
