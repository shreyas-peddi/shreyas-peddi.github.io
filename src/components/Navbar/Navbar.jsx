import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { GithubLogo, LinkedinLogo, House, Briefcase, Lightning, FolderOpen, GraduationCap, DownloadSimple } from '@phosphor-icons/react'

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(251, 245, 230, 0.85);
  backdrop-filter: blur(12px);
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: ${theme.borderRadius.pill};
  padding: 10px 20px;
  box-shadow: 4px 4px 0px ${theme.colors.charcoal};
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.8rem;
  color: ${theme.colors.charcoal};
  padding: 6px 12px;
  border-radius: 30px;
  cursor: none;
  transition: background 0.2s ease, color 0.2s ease;
  white-space: nowrap;

  &:hover, &.active {
    background: ${theme.colors.sage};
    color: ${theme.colors.cream};
  }
`

const Divider = styled.div`
  width: 2px;
  height: 20px;
  background: ${theme.colors.charcoal};
  opacity: 0.2;
  border-radius: 2px;
`

const DownloadBtn = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.8rem;
  color: ${theme.colors.cream};
  background: ${theme.colors.terracotta};
  padding: 6px 14px;
  border-radius: 30px;
  border: 2px solid ${theme.colors.charcoal};
  cursor: none;
  white-space: nowrap;
`

const navItems = [
  { label: 'Home', to: 'hero', icon: <House size={14} weight="bold" /> },
  { label: 'About', to: 'about', icon: null },
  { label: 'Experience', to: 'experience', icon: <Briefcase size={14} weight="bold" /> },
  { label: 'Skills', to: 'skills', icon: <Lightning size={14} weight="bold" /> },
  { label: 'Projects', to: 'projects', icon: <FolderOpen size={14} weight="bold" /> },
  { label: 'Education', to: 'education', icon: <GraduationCap size={14} weight="bold" /> },
]

export default function Navbar({ resumePdf }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <NavBar
      initial={{ y: -100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : {}}
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
    >
      {navItems.map((item, i) => (
        <NavLink
          key={item.to}
          to={item.to}
          smooth={true}
          duration={800}
          spy={true}
          activeClass="active"
          offset={-80}
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
      <Divider />
      <DownloadBtn
        href={resumePdf}
        download="Shreyas_Peddi_Resume.pdf"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <DownloadSimple size={14} weight="bold" />
        Resume
      </DownloadBtn>
    </NavBar>
  )
}
