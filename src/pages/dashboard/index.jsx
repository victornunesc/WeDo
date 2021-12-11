import Header from "../../components/Header";
import { Modal } from "../../components/ModalHabits/index";
import { ModalProfile } from "../../components/ModalProfile";

import 
 {Tittle,
  Tittle2,
  P1,
  P2,
  ImageHabits,
  ImageIllustration, 
  Container, 
  Container2,
  Button,
  Input
  } from "./stylle";


import LogoWedo from "../../assets/LogoWedo.png"
import ProfilePhoto from "../../assets/profile-picture.png"
import Habits from "../../assets/Habits.png" 
import Ilustration from "../../assets/Ilustration.png" 
import Header from "../../components/Header";
import api from "../../services/api"
import { IconButton } from "../../components/Button";
import { FiPlus, FiCheck } from 'react-icons/fi';


export const Dashboard = () => {
  return(
   <section>
      <Header/>
      <Container>
            <ImageHabits src={Habits} alt="habits"/>
            <Tittle>Meus hábitos</Tittle>
            <IconButton/>
            <P1>Nenhum hábito ainda, <br/> clique para adicionar um!</P1>
      </Container>
      <Container2>
          <Tittle2>Meus grupos</Tittle2>
          <ImageIllustration src={Ilustration}  alt="Ilustration" />
          <P2>Você não está em nenhum grupo ainda, procure grupos que queira entrar!</P2>
          <Input placeholder="Pesquisar Grupos"/>
          <Button>encontrar grupos</Button>
      </Container2>
            {/* <Modal/> */}
   </section>
  ) 
}