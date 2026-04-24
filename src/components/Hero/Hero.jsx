import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { personal } from '../../data/resumeData'
import ASCIIText from '../ASCIIText/ASCIIText'

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const scrollFloat = keyframes`
  0%, 100% { opacity: 0.5; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(5px); }
`

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${({ theme }) => theme.navHeight} + 60px) clamp(24px, 6vw, 80px) 80px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  position: relative;
`

const Prompt = styled(motion.p)`
  font-size: 13px;
  color: ${({ theme }) => theme.textSec};
  margin-bottom: 16px;

  span {
    color: ${({ theme }) => theme.green};
  }
`

const NameCanvas = styled(motion.div)`
  position: relative;
  width: 100%;
  height: clamp(200px, 26vw, 280px);
  overflow: hidden;
  margin-bottom: 0;
`

const Divider = styled(motion.div)`
  height: 1px;
  background: ${({ theme }) => theme.borderMid};
  margin: 20px 0;
  max-width: 560px;
  transform-origin: left;
`

const Tagline = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.green};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
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
  margin-bottom: 36px;
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

const ScrollHint = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${scrollFloat} 2.4s ease-in-out infinite;
  cursor: default;
  user-select: none;
`

const ScrollLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.green};
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

const ScrollChevrons = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: ${({ theme }) => theme.green};
  font-size: 16px;
  line-height: 1;
  opacity: 0.8;
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

      <NameCanvas
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <ASCIIText
          text={personal.name.split(' ')[0].toUpperCase()}
          asciiFontSize={8}
          textFontSize={200}
          textColor="#E8E8E8"
          planeBaseHeight={16}
          enableWaves={true}
        />
      </NameCanvas>

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

      <ScrollHint>
        <ScrollLabel>scroll</ScrollLabel>
        <ScrollChevrons>
          <span>∨</span>
          <span>∨</span>
        </ScrollChevrons>
      </ScrollHint>
    </Section>
  )
}
