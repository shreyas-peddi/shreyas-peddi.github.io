import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personal } from '../../data/resumeData'

const Section = styled.section`
  padding: 100px clamp(24px, 6vw, 80px) 120px;
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

const Content = styled(motion.div)`
  max-width: 520px;
`

const Headline = styled.p`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: clamp(36px, 5vw, 56px);
  color: ${({ theme }) => theme.textBright};
  line-height: 1.15;
  margin-bottom: 40px;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.greenDim};
    background: ${({ theme }) => theme.bgHighlight};

    span {
      color: ${({ theme }) => theme.green};
    }
  }
`

const LinkType = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  width: 72px;
  flex-shrink: 0;
  transition: color 0.2s;
`

const LinkVal = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text};
  flex: 1;
  padding: 0 16px;
  transition: color 0.2s;
`

const LinkArrow = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.textSec};
  transition: color 0.2s;
`

const Footer = styled.p`
  margin-top: 60px;
  font-size: 11px;
  color: ${({ theme }) => theme.textDim};
  letter-spacing: 0.04em;
`

const CONTACT_ITEMS = [
  {
    type: 'email',
    value: 'peddishreyas2@gmail.com',
    href: `mailto:${personal.email}`,
  },
  {
    type: 'github',
    value: 'github.com/shreyas-peddi',
    href: personal.github,
  },
  {
    type: 'linkedin',
    value: 'linkedin.com/in/shreyas-peddi',
    href: personal.linkedin,
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <Section id="contact" ref={ref}>
      <SectionHead>
        <Cmd><span>$</span> connect --social</Cmd>
        <Rule />
      </SectionHead>

      <Content
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Headline>
          Let's build something together.
        </Headline>

        <Links>
          {CONTACT_ITEMS.map(({ type, value, href }) => (
            <ContactLink key={type} href={href} target={type === 'email' ? undefined : '_blank'} rel="noopener noreferrer">
              <LinkType>{type}</LinkType>
              <LinkVal>{value}</LinkVal>
              <LinkArrow>↗</LinkArrow>
            </ContactLink>
          ))}
        </Links>

        <Footer>
          © {new Date().getFullYear()} Shreyas Peddi · Atlanta, GA
        </Footer>
      </Content>
    </Section>
  )
}
