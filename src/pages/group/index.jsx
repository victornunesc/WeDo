import Header from "../../components/Header"
import {Button} from "../../components/Button"
import {Main, GroupTitle, Options, GroupInfos, Center, Footer} from "./style"
import ImageInfo from "../../assets/ImageInfo.png"
import ImageGoal from "../../assets/ImageGoal.png"
import ImageActivity from "../../assets/ImageActivity.png"
import ImageUsers from "../../assets/ImageUsers.png"
import {useState} from "react"

export const Group = ({group}) => {

    const [info, setInfo] = useState(true)
    const [goal, setGoal] = useState(false)
    const [activity, setActivity] = useState(false)
    const [users, setUsers] = useState(false)

    const functionInfo = () => {
        setInfo(true)
        setGoal(false)
        setActivity(false)
        setUsers(false)
    }

    const functionGoal = () => {
        setInfo(false)
        setGoal(true)
        setActivity(false)
        setUsers(false)
    }

    const functionActivity = () => {
        setInfo(false)
        setGoal(false)
        setActivity(true)
        setUsers(false)
    }

    const functionUsers = () => {
        setInfo(false)
        setGoal(false)
        setActivity(false)
        setUsers(true)
    }

    // const {
    //     name,
    //     description,
    //     category,
    //     creator,
    //     users_on_group,
    //     goals,
    //     activities,
    // } = group

    return (
        <>
            <Header/>
            <Main>
                <GroupTitle>
                    <h2>Aqui vai colocar (name)</h2>
                    <Button>Aqui vai colocar (category)</Button>
                </GroupTitle>
                <Options>
                    <Button onClick={() => functionInfo()}>Info</Button>
                    <Button onClick={() => functionGoal()}>Metas</Button>
                    <Button onClick={() => functionActivity()}>Atividades</Button>
                    <Button onClick={() => functionUsers()}>Usuários</Button>
                </Options> 
                <GroupInfos>
                    {
                        info &&
                        <>
                            <div className="container">
                                <div className="container1">
                                    <h3>Descrição</h3>
                                    <p className="fundo">Aqui vai colocar (description)</p>
                                    <p className="fundo">Usuários no Grupo: <span>Aqui vai colocar (users_on_group.length)</span></p>
                                    <p className="fundo">Metas: <span>Aqui vai colocar (goals.length)</span></p>
                                    <p className="fundo">Atividades: <span>Aqui vai colocar (activities.length)</span></p>
                                </div>
                                <div className="container2">
                                    <img src={ImageInfo} alt="ImageInfo" />
                                </div>
                            </div>
                            <Footer>
                                <Button>Editar</Button>
                                <h3>@criador</h3>
                            </Footer>
                        </>
                    }
                    {
                        goal &&
                        <>
                            <h3>Metas</h3>
                            <Center>
                                <h3>Nenhuma meta ainda, clique para adicionar uma!</h3>
                                <img src={ImageGoal} alt="ImageGoal" />
                            </Center>
                            <div className="addEnd">
                                <Button>Adicionar Meta</Button>
                            </div>
                        </>
                    }
                    {
                        activity &&
                        <>
                            <h3>Atividades</h3>
                            <Center>
                                <h3>Nenhuma atividade ainda, clique para adicionar uma!</h3>
                                <img src={ImageActivity} alt="ImageActivity" />
                            </Center>
                            <div className="addEnd">
                                <Button>Adicionar Atividade</Button>
                            </div>
                        </>
                    }
                    {
                        users &&
                        <>
                            <h3>Usuários</h3>
                            <Center>
                                <h3>Nenhum usuário no grupo, seja o primeiro!</h3>
                                <img src={ImageUsers} alt="ImageUsers" />
                            </Center>
                        </>
                    }
                </GroupInfos>
                <Footer>
                    <Button>Inscrever-se</Button>
                    <Button>Voltar</Button>
                </Footer>
            </Main>
        </>
    )
}