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

        /* TYPOGRAPHY */
        --font-size-h1: 54px;
        --font-line-height-h1: 64px;

        --font-size-h2: 36px;
        --font-line-height-h2: 48px;

        --font-size-h3: 24px;
        --font-line-height-h3: 32px;

        --font-size-p: 16px;
        --font-line-height-p: 16px;

        --font-size-body: 14px;
        --font-line-height-body: 14px;

        --font-size-small: 12px;
        --font-line-height-small: 12px;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--color-white-dark);
        font-size: 16px;
    }

    h1 {
        font-size: var(--font-size-h1);
        line-height: var(---font-line-height-h1);
    }

    h2 {
        font-size: var(--font-size-h2);
        line-height: var(---font-line-height-h2);
    }

    h3 {
        font-size: var(--font-size-h3);
        line-height: var(---font-line-height-h3);
    }

    p {
        font-size: var(--font-size-p);
        line-height: var(---font-line-height-p);
    }
`;

export default GlobalStyle;
