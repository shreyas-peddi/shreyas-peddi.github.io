import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const LoaderWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${theme.colors.cream};
  z-index: 9000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Ground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: ${theme.colors.sageLight};
  border-top: 3px solid ${theme.colors.charcoal};

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: ${theme.colors.sageLight};
    border-radius: 50% 50% 0 0 / 20px 20px 0 0;
  }
`

const TotoroWalker = styled(motion.div)`
  position: absolute;
  bottom: 70px;
`

const LoadingText = styled(motion.p)`
  font-family: ${theme.fonts.display};
  font-size: 1.5rem;
  color: ${theme.colors.charcoal};
  position: absolute;
  bottom: 30px;
  letter-spacing: 2px;
`

const Dots = styled(motion.span)`
  display: inline-block;
`

// SVG Totoro character
function TotoroSvg() {
  return (
    <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="40" cy="65" rx="28" ry="30" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2.5"/>
      {/* Belly */}
      <ellipse cx="40" cy="72" rx="18" ry="20" fill="#D8D4C8" stroke="#3D2E1E" strokeWidth="1.5"/>
      {/* Belly pattern */}
      <ellipse cx="36" cy="68" rx="3" ry="4" fill="#3D2E1E" opacity="0.3"/>
      <ellipse cx="44" cy="68" rx="3" ry="4" fill="#3D2E1E" opacity="0.3"/>
      <ellipse cx="40" cy="76" rx="3" ry="4" fill="#3D2E1E" opacity="0.3"/>
      {/* Head */}
      <ellipse cx="40" cy="38" rx="24" ry="22" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2.5"/>
      {/* Ears */}
      <ellipse cx="20" cy="18" rx="6" ry="10" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2" transform="rotate(-15 20 18)"/>
      <ellipse cx="60" cy="18" rx="6" ry="10" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2" transform="rotate(15 60 18)"/>
      {/* Eyes */}
      <ellipse cx="32" cy="34" rx="6" ry="7" fill="white" stroke="#3D2E1E" strokeWidth="2"/>
      <ellipse cx="48" cy="34" rx="6" ry="7" fill="white" stroke="#3D2E1E" strokeWidth="2"/>
      <circle cx="34" cy="35" r="3.5" fill="#3D2E1E"/>
      <circle cx="50" cy="35" r="3.5" fill="#3D2E1E"/>
      <circle cx="35" cy="33" r="1.5" fill="white"/>
      <circle cx="51" cy="33" r="1.5" fill="white"/>
      {/* Nose */}
      <ellipse cx="40" cy="42" rx="3" ry="2" fill="#5C4A3A"/>
      {/* Whiskers */}
      <line x1="20" y1="42" x2="35" y2="43" stroke="#3D2E1E" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="45" x2="35" y2="45" stroke="#3D2E1E" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="45" y1="43" x2="60" y2="42" stroke="#3D2E1E" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="45" y1="45" x2="60" y2="45" stroke="#3D2E1E" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Arms */}
      <ellipse cx="14" cy="65" rx="7" ry="12" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2" transform="rotate(20 14 65)"/>
      <ellipse cx="66" cy="65" rx="7" ry="12" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2" transform="rotate(-20 66 65)"/>
      {/* Legs */}
      <ellipse cx="30" cy="92" rx="9" ry="7" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2"/>
      <ellipse cx="50" cy="92" rx="9" ry="7" fill="#7A8C7A" stroke="#3D2E1E" strokeWidth="2"/>
    </svg>
  )
}

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <LoaderWrapper
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <TotoroWalker
            initial={{ x: -120 }}
            animate={{ x: 'calc(100vw + 120px)' }}
            transition={{ duration: 2.5, ease: 'linear', repeat: Infinity }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <TotoroSvg />
            </motion.div>
          </TotoroWalker>

          <Ground />

          <LoadingText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading
            <Dots
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              ...
            </Dots>
          </LoadingText>
        </LoaderWrapper>
      )}
    </AnimatePresence>
  )
}
