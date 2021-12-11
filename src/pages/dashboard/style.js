import styled from "styled-components"

export const Title = styled.h2 `
  color: var(--color-black-dark);
`

export const Input = styled.input`
  color: black;
  background-color: #ECF1F2;
  border-radius: 4px;
  padding: 10px;
`

export const FixPage = styled.div `
  display: flex;
  flex-direction: column;
`

export const Main = styled.div `
  width: 80%;
  background-color: var(--color-white-dark);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`

export const ContainerHabits = styled.div `
  width: 22%;
  background-color: white;
  border-radius: 5px;
`

export const ContainerGroups = styled.div `
  width: 75%;
  background-color: white;
  border-radius: 5px;
`

export const HeadContainer = styled.div `
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Groups = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const NoItems = styled.div `
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
`

export const BackgroundMessage = styled.p `
  background-color: white;
  color: var(--color-black-light);
  text-align: center;
  z-index: 1;
  position: absolute;
  width: 15%;
  border-radius: 5px;
  padding: 15px;
`

export const BackgroundImage = styled.img `
  z-index: 0;
  width: 100%;
`