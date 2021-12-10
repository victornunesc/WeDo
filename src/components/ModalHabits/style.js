import styled from "styled-components"

export const ShowOnlyContainer = styled.div `
    width: 100%;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    opacity: 0.8;
    z-index: 0;
`

export const Container = styled.div `
    display: flex;
    justify-content: center;
`

export const ContainerModal = styled.div `
    background-color: var(--color-white-dark);
    color: var(--color-black);
    width: 40%;
    top: 15%;
    padding: 10px;
    position: fixed;
    border-radius: 10px;
    opacity: 1;
    z-index: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px){
        width: 60%;
    }

    @media (max-width: 660px){
        width: 70%;
    }
`

export const HeaderModal = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CloseButton = styled.button `
    cursor: pointer;
    background-color: white;
    color: black;
    border-radius: 50%;
    padding: 10px;
    font-size: 1.5rem;
`

export const MainModal = styled.div `
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form `
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    Button{
        margin-top: 15px;
    }

    @media (max-width: 660px){
        display: flex;
        align-items: center;
    }
`

export const FixForm = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`

export const Input = styled.input `
    width: 100%;
    margin: 10px 0px;
    border-radius: 5px;
    padding: 15px;
`