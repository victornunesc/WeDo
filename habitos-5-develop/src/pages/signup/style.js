import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LeftSide = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px){
        display: none;
    }
`

export const RightSide = styled.div `
    width: 50%;
    font-size: 1.2rem;
    
    @media (max-width: 1000px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const Box = styled.div `
    width: 80%;
    height: 80vh;
    background-color: white;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    position: relative;

    @media (max-width: 1000px){
        height: 70vh;
    }
    @media (max-width: 500px){
        width: 95%;
    }
`

export const CenterForm = styled.div `
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const Form = styled.form `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input `
    width: 100%;
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0px;
    background-color: #ECF1F2;
    font-size: 1.2rem;

    @media (max-width: 1000px){
        font-size: 1.2rem;
    }
`

export const Label = styled.label `
    width: 100%;
    text-align: left;
    margin-top: 10px;
`

export const ErrorMessage = styled.span `
    color: red;
    width: 100%;
    text-align: left;
`

export const Button = styled.button `
    cursor: pointer;
    width: 200px;
    background-color: #B04A4A;
    color: white;
    border-radius: 5px;
    padding: 10px 0px;
    font-size: 1.4rem;
    margin: 10px 0px;
`

export const AlreadyRegistered = styled.button `
    cursor: pointer;
    background-color: transparent;
    font-size: 1.2rem;

    span{
        color: #B04A4A;
    }

    @media (max-width: 1000px){
        font-size: 1.5rem;
    }
`

export const DivFlower = styled.div `
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateX(50%);

    @media (max-width: 1000px){
        display: none;
    }
`