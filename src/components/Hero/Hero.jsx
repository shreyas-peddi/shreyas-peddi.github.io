import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { personal } from '../../data/resumeData'

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${({ theme }) => theme.navHeight} + 80px) clamp(24px, 6vw, 80px) 80px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  position: relative;
`

const Prompt = styled(motion.p)`
  font-size: 13px;
  color: ${({ theme }) => theme.textSec};
  margin-bottom: 28px;

  span {
    color: ${({ theme }) => theme.green};
  }
`

const Name = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: clamp(72px, 10vw, 130px);
  font-weight: 400;
  color: ${({ theme }) => theme.textBright};
  line-height: 0.95;
  letter-spacing: 0.02em;
  margin-bottom: 12px;
`

const Divider = styled(motion.div)`
  height: 1px;
  background: ${({ theme }) => theme.borderMid};
  margin: 24px 0;
  max-width: 560px;
  transform-origin: left;
`

const Tagline = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.green};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  min-height: 26px;

  &::before {
    content: '>';
    color: ${({ theme }) => theme.textSec};
  }
`

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  background: ${({ theme }) => theme.green};
  animation: ${blink} 0.9s step-start infinite;
  vertical-align: -3px;
  margin-left: 2px;
`

const Meta = styled(motion.p)`
  font-size: 12px;
  color: ${({ theme }) => theme.textSec};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 44px;
`

const Links = styled(motion.div)`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
`

const LinkBtn = styled.a`
  font-size: 12px;
  color: ${({ theme }) => theme.textSec};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 7px 16px;
  letter-spacing: 0.04em;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.green};
    border-color: ${({ theme }) => theme.greenDim};
    background: ${({ theme }) => theme.bgHighlight};
  }
`

const ScrollHint = styled.p`
  position: absolute;
  bottom: 36px;
  left: clamp(24px, 6vw, 80px);
  font-size: 11px;
  color: ${({ theme }) => theme.textDim};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export default function Hero() {
  const typeSequence = personal.taglines.flatMap(t => [t, 1800])

  return (
    <Section id="home">
      <Prompt
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span>$</span> ./hello.sh
      </Prompt>

      <Name
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {personal.name.toUpperCase()}
      </Name>

      <Divider
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />

      <Tagline>
        <TypeAnimation
          sequence={typeSequence}
          wrapper="span"
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
        />
        <Cursor />
      </Tagline>

      <Meta
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {personal.location} · CS Grad @ UGA · Open to new opportunities
      </Meta>

      <Links
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <LinkBtn href={personal.github} target="_blank" rel="noopener noreferrer">
          github ↗
        </LinkBtn>
        <LinkBtn href={personal.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin ↗
        </LinkBtn>
        <LinkBtn href={`mailto:${personal.email}`}>
          email ↗
        </LinkBtn>
        <LinkBtn href={personal.resumePdf} target="_blank" rel="noopener noreferrer">
          resume.pdf ↓
        </LinkBtn>
      </Links>

      <ScrollHint>scroll ↓</ScrollHint>
    </Section>
  )
}
