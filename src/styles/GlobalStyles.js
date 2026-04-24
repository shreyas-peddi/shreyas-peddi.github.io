import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontMono};
    font-size: 14px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.greenDim};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.green};
  }

  ::selection {
    background: ${({ theme }) => theme.greenDim};
    color: ${({ theme }) => theme.greenBright};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
