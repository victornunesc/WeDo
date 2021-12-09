import styled from "styled-components"

export const Header = styled.div`

/* height: 10vh;
width: 100%;
position: absolute;
left: 0px;
top: 0px;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: var(--color-white-light);
box-shadow: 0px 4px 40px -10px var(--color-black-dark);
border-radius: 1px;
display: flex;
align-items: center; */

display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  max-width: 1200px;
  padding: 32px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  margin-bottom: 32px;
  h1.logo {
  }
  img.profile {
    height: 44px;
    transition: 0.3s;
  }
  @media screen and (min-width: 800px) {
    height: 124px;
    margin: 40px 40px 32px;
    img.profile {
      height: 100px;
    }
  }
  @media screen and (min-width: 1240px) {
    margin: 40px auto 32px;
  }


`

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

export const Logo = styled.img`

height: 50px;
width: 72px;
position: absolute;
left: 8px;
top: 8px;

`

export const Photo = styled.img`

height: 44px;
width: 44px;
position: absolute;
left: 308px;
top: 9px;
`
export const ImageHabits = styled.img`

position: absolute;
width: 304px;
height: 393px;
left: 131px;
top: 352px;
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

export const ButtonSet = styled.img`

height: 32px;
width: 32px;
position: absolute;
left: 265px;
top: 166px;

`
export const ButtonAddHabits = styled.img`

color:var(--color-white-light);
height: 40px;
width: 40px;
position: absolute;
left: 260px;
top: 5px;

`

export const Container = styled.div`

height: 431px;
width: 324px;
position: absolute;
left: 18px;
top: 80px;
border-radius: 10px;
width: 324px;
height: 431px;
left: 18px;
top: 80px;
background: var(--color-white-light);
@media screen and (min-width: 800px) {
    position: absolute;
    width: 500px;
    height: 650px;
    left: 121px;
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

height: 431px;
width: 324px;
position: absolute;
left: 18px;
top: 80px;
border-radius: 10px;
width: 324px;
height: 431px;
left: 18px;
top: 535px;
background: var(--color-white-light);
@media screen and (min-width: 800px) {
    position: absolute;
    width: 1020px;
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


export const ContainerHabits = styled.div`

height: 124px;
width: 300px;
position: absolute;
left: 12px;
top: 50px;
border-radius: 10px;
background: var(--color-white-dark);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }

`

export const ContainerHabits2 = styled.div`

height: 124px;
width: 300px;
position: absolute;
left: 12px;
top: 185px;
border-radius: 10px;
background: var(--color-white-dark);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }
`

export const ButtonSports = styled.div`

color:var(--color-white-light);
height: 32px;
width: 140px;
position: absolute;
left: 4px;
top: 84px;
background: var(--color-primary-dark);
border-radius: 0px 0px 0px 10px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }
`
export const ButtonSports2 = styled.div`

color:var(--color-white-light);
height: 32px;
width: 140px;
position: absolute;
left: 155px;
top: 84px;
background: var(--color-primary-dark);
border-radius: 0px 0px 10px 0px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }

`

export const ButtonDomesticHabits = styled.div`

color:var(--color-white-light);
height: 32px;
width: 140px;
position: absolute;
left: 4px;
top: 86px;
background:var(--color-utility-success);
border-radius: 0px 0px 0px 10px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }
`

export const ButtonDomesticHabits2 = styled.div`

color:var(--color-white-light);
height: 32px;
width: 140px;
position: absolute;
left: 155px;
top: 86px;
background:var(--color-utility-success);
border-radius: 0px 0px 10px 0px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }
`


export const ContainerHabits3 = styled.div`

height: 96px;
width: 300px;
position: absolute;
left: 13px;
top: 322px;
border-radius: 10px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 32px;
display: flex;
background: var(--color-white-dark);
border-radius: 10px;
text-shadow: 0px 4px 4px var(--color-black-dark);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }
`
export const ContainerGroups = styled.div`

height: 204px;
width: 300px;
position: absolute;
left: 12px;
top: 70px;
border-radius: 10px;
background: var(--color-white-dark);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
@media screen and (min-width: 800px) {
   display:none;
    }
`

export const ContainerGroups2 = styled.div`

height: 130px;
width: 300px;
position: absolute;
left: 12px;
top: 285px;
border-radius: 10px;
background: var(--color-white-dark);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }
`
export const ButtonGroups = styled.div`

color:var(--color-white-light);
height: 32px;
width: 126px;
position: absolute;
left: 5px;
top: 166px;
background: var(--color-primary-dark);
border-radius: 10px 0px 0px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }

`
export const ButtonGroups2 = styled.div`

color:var(--color-white-light);
display: flex;
align-items: center;
height: 32px;
width: 126px;
position: absolute;
left: 135px;
top: 166px;
background: var(--color-primary-dark);
border-radius: 0px 0px 0px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width: 800px) {
   display:none;
    }

`