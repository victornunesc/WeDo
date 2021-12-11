import {
  Title,
  Input,
  Main,
  HeadContainer,
  ContainerHabits,
  ContainerGroups,
  FixPage,
  Groups,
  NoItems,
  BackgroundMessage,
  BackgroundImage
} from "./style";


import Habits from "../../assets/Habits.png" 
import Ilustration from "../../assets/Ilustration.png" 
import Header from "../../components/Header";
import api from "../../services/api"
import { IconButton } from "../../components/Button";
import {useContext} from "react"
import {AuthContext} from "../../providers/AuthContext"
import { useEffect, useState } from "react"
import {CardHabits} from "../../components/CardHabits/index"
import {ModalHabits} from "../../components/ModalHabits/index"

export const Dashboard = () => {

  const {access, habits, setHabits} = useContext(AuthContext) 

  const [isHabit, isSetHabit] = useState(false)

  const loadData = () => {
    api.get("habits/personal/", {
      headers: {Authorization: `Bearer ${access}`}
    })
    .then((response) => {
      setHabits(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  const showModalHabit = () => {
    isSetHabit(true)
  }

  const hideModalHabit = () => {
    isSetHabit(false)
  }

  return(
    <>
      <Header/>
      <FixPage>
        <Main>
          <ContainerHabits>
            <HeadContainer>
              <Title>Meus Hábitos</Title>
              <IconButton add onClick={() => showModalHabit()}/>
            </HeadContainer>
            {
              habits.length >=1 ?
              habits.map((habit, index) => (
                <CardHabits key={index} habit={habit}/>
              ))
              :
              <>
                <NoItems>
                  <BackgroundImage src={Habits} alt="Habits"/>
                  <BackgroundMessage>Nenhum hábito ainda, clique para adicionar um!</BackgroundMessage>
                </NoItems>
              </>
            }
          </ContainerHabits>
          <ContainerGroups>
            <HeadContainer>
              <Title>Meus Grupos</Title>
              <Input placeholder="Pesquisar Grupos"/>
            </HeadContainer>
            <Groups>
            {
              // COLOCAR O MAP DOS GRUPOS AKI, IGUAL AO CARD DE CIMA, DE HÁBITOS

              // :
              <>
                <NoItems>
                  <BackgroundImage src={Ilustration} alt="Ilustration"/>
                  <BackgroundMessage>Você não está em nenhum grupo, encontre grupos que queria entrar!</BackgroundMessage>
                </NoItems>
              </>
            }
            </Groups>
          </ContainerGroups>
        </Main>
      </FixPage>
      {
        isHabit ?
        <ModalHabits hideModalHabit={hideModalHabit}/>
        :
        <>
        </>
      }
    </>
  ) 
}