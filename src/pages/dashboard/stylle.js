import styled from "styled-components"

export const Tittle = styled.h2`

position: absolute;
width: 304px;
height: 48px;
left: 24px;
top: 5px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: var(--font-line-height-h2);
display: flex;
align-items: center;
color: var(--color-black-dark);

`
export const P1 = styled.p`

position: absolute;
width: 410px;
height: 64px;
left: 54px;
top: 145px;
font-family: Roboto;
font-style: italic;
font-weight: normal;
font-size: 20px;
line-height: 32px;
display: flex;
align-items: center;
text-align: center;
color: va(--color-black-light);

`
export const P2 = styled.p`

position: absolute;
width: 300px;
height: 96px;
left: 12px;
top: 154px;
font-family: Roboto;
font-style: italic;
font-weight: normal;
font-size: 20px;
line-height: 32px;
display: flex;
align-items: center;
text-align: center;
color: va(--color-black-light);

`
export const Button = styled.button`
height: 40px;
width: 220px;
left: 0px;
top: 0px;
position: absolute;
left: 50px;
top: 376px;
border-radius: 8px;
background: #B04A4A;
border-radius: 8px;
@media (max-width: 800px) {
    left: 795px;
    top: 591px;
    }
`
export const Input = styled.input`
color:black;
position: absolute;
width: 250px;
height: 40px;
left: 740px;
top: 24px;
background: #ECF1F2;
border-radius: 4px;
@media screen and (max-width: 800px) {
    display: none;
    }
`

export const Tittle2 = styled.h2`

position: absolute;
width: 304px;
height: 48px;
left: 16px;
top: -5px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: var(--font-line-height-h2);
display: flex;
align-items: center;
color: var(--color-black-dark);

`

export const ImageHabits = styled.img`

position: absolute;
width: 304px;
height: 393px;
left: 91px;
top: 179px;
@media screen and (max-width: 800px) {
    display: none;
    }

`
export const ImageIllustration = styled.img`

position: absolute;
width: 604px;
height: 593px;
left: 120px;
top: 50px;
@media screen and (max-width: 800px) {
    display: none;
    }

`




export const Container = styled.div`

height: 431px;
width: 324px;
position: absolute;
left: 42px;
top: 80px;
border-radius: 10px;
left: 18px;
top: 80px;
background: var(--color-white-light);
@media screen and (min-width: 800px) {
    position: absolute;
    width: 480px;
    height: 650px;
    left: 195px;
    top: 196px;
    background: var(--color-white-light) ;
    border-radius: 10px;
    img.profile {
      height: 100px;
    }
  }
  @media screen and (min-width: 1240px) {
    margin: 40px auto 32px;
  }

`
export const Container2 = styled.div`

position: absolute;
left: 42px;
top: 80px;
border-radius: 10px;
width: 324px;
height: 431px;
left: 18px;
top: 535px;
background: var(--color-white-light);
@media screen and (min-width: 800px) {
    position: absolute;
    width: 1000px;
    height: 650px;
    left: 700px;
    top: 196px;
    background: var(--color-white-light) ;
    border-radius: 10px;
    img.profile {
      height: 100px;
    }
  }
  @media screen and (min-width: 1240px) {
    margin: 40px auto 32px;
  }

`










