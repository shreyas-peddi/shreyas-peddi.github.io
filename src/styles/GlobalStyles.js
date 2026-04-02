import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: auto; /* Lenis handles this */
  }

  html::-webkit-scrollbar {
    display: none;
  }

  body {
    background-color: ${theme.colors.cream};
    color: ${theme.colors.charcoal};
    font-family: ${theme.fonts.body};
    line-height: 1.6;
    overflow-x: hidden;
  }

  @media (pointer: fine) {
    body { cursor: none; }
    a, button { cursor: none; }
  }

  h1, h2, h3, h4 {
    font-family: ${theme.fonts.display};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${theme.colors.gold};
    color: ${theme.colors.charcoal};
  }

  section {
    position: relative;
  }
`
