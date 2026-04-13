import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { personal } from '../../data/resumeData'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${({ theme }) => theme.navHeight};
  background: ${({ theme }) => theme.bg};
  border-bottom: 1px solid ${({ $scrolled, theme }) => $scrolled ? theme.border : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(20px, 5vw, 60px);
  transition: border-color 0.3s;
`

const Brand = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  color: ${({ theme }) => theme.green};
  cursor: pointer;
  white-space: nowrap;
  user-select: none;

  span {
    color: ${({ theme }) => theme.textSec};
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 640px) {
    gap: 14px;
  }
`

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  color: ${({ theme }) => theme.textSec};
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  &.active {
    color: ${({ theme }) => theme.green};
  }

  @media (max-width: 480px) {
    display: none;

    &:last-of-type {
      display: block;
    }
  }
`

const ResumeBtn = styled.a`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  color: ${({ theme }) => theme.green};
  border: 1px solid ${({ theme }) => theme.greenDim};
  padding: 4px 12px;
  letter-spacing: 0.04em;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.greenDim};
    color: ${({ theme }) => theme.greenBright};
  }
`

const NAV_ITEMS = [
  { label: 'about', to: 'about' },
  { label: 'experience', to: 'experience' },
  { label: 'projects', to: 'projects' },
  { label: 'education', to: 'education' },
  { label: 'contact', to: 'contact' },
]

export default function Navbar({ resumePdf }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Nav $scrolled={scrolled}>
      <Link to="home" smooth duration={600}>
        <Brand>
          <span>shreyas@portfolio</span>:~$
        </Brand>
      </Link>

      <NavLinks>
        {NAV_ITEMS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            spy
            smooth
            duration={600}
            offset={-52}
            activeClass="active"
          >
            {label}
          </NavLink>
        ))}
        <ResumeBtn href={resumePdf} target="_blank" rel="noopener noreferrer">
          resume ↗
        </ResumeBtn>
      </NavLinks>
    </Nav>
  )
}
