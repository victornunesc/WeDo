import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        /* COLORS */
        --color-primary-light: #FFE9D7;
        --color-primary: #FDD6B6;
        --color-primary-dark: #D7A57B;

        --color-secondary-light: #FDB6B6;
        --color-secondary: #B04A4A;
        --color-secondary-dark: #8E2828;
        
        --color-utility-info: #586B8F;
        --color-utility-warning: #FDF8B6;
        --color-utility-success: #95C06E;
        --color-utility-danger: #D77B7B;

        --color-white-light: #FEFEFE;
        --color-white: #ECF1F2;
        --color-white-dark: #C7D7DA;
        
        --color-grey-light: #EFEFEF;
        --color-grey: #C1C1C1;
        --color-grey-dark: #969696;
        
        --color-black-light: #686868;
        --color-black: #303030;
        --color-black-dark: #030202;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--color-white-dark);
    }

    h1 {
        font-size: 54px;
        line-height: 64px;
    }

    h2 {
        font-size: 36px;
        line-height: 48px;
    }

    h3 {
        font-size: 24px;
        line-height: 32px;
    }

    p {
        font-size: 16px;
        line-height: 16px;
    }

    p.body {
        font-size: 14px;
        line-height: 14px;
    }

    p.small {
        font-size: 12px;
        line-height: 12px;
    }
`;

export default GlobalStyle;
