import React from 'react'
import { css, Global } from '@emotion/react'

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Lexend:wght@200;400;600&display=swap");

  * {
    font-family: "Lexend", sans-serif !important;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`

const GlobalStyles = () => React.createElement(Global, { styles })

export default GlobalStyles
