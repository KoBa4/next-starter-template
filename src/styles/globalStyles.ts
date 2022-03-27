import { createGlobalStyle, css } from 'styled-components'
import reset from './reset'

const fontFamily = `system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`

const globalStyles = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
    font-family: ${css`${fontFamily}`};
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #__next {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100vw;
    min-height: 100vh;
  }
`

export default globalStyles
