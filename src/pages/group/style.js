import styled from "styled-components"

export const Main = styled.div `
    max-width: 1200px;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--color-white-light);
    display: flex;
    flex-direction: column;
`

export const GroupTitle = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-white);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
`

export const Options = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--color-white-dark);
    
    Button{
        width: 295px;
        text-align: center;
        border-radius: 0px;
    }
    Button:hover{
        background-color: var(--color-primary-dark);
    }
    Button:nth-child(1){
        border-top-left-radius: 5px;
    }
    Button:nth-child(4){
        border-top-right-radius: 5px;
    }
`

export const GroupInfos = styled.div `
    margin-top: 20px;
    padding: 10px;
    background-color: var(--color-white);
    
    .fundo{
        background-color: var(--color-white-light);
        padding: 10px;
        width: 419px;
        margin-top: 10px;

        span{
            color: var(--color-black);
        }

        @media (max-width: 460px){
            width: 280px;
        }
    }

    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .container1{
        max-width: 500px;
    }
    .container2{
        max-width: 800px;

        @media (max-width: 1150px){
            img{
                width: 500px;
            }
        }
        @media (max-width: 950px){
            img{
                width: 350px;
            }
        }

        @media (max-width: 800px){
            img{
                display: none;
            }
        }
    }

    .addEnd{
        display: flex;
        justify-content: flex-end;

        Button{
            padding: 10px;
            line-height: 10px;
        }
    }
`

export const Center = styled.div `
    img{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
    }
    h3{
        width: 250px;
        margin: auto;
        text-align: center;
    }
`

export const Footer = styled.div `
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 420px){
        flex-direction: column;
        text-align: center;

        Button{
            margin-top: 10px;
        }
    }
`