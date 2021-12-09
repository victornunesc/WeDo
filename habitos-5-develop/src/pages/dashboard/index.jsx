import { 
  Header,
  Tittle,
  Tittle2,
  Logo, 
  Photo, 
  Container, 
  Container2 ,
  ContainerHabits, 
  ContainerHabits2,
  ContainerHabits3,
  ContainerGroups, 
  ButtonSports,
  ButtonSports2, 
  ButtonDomesticHabits,
  ContainerGroups2,
  ButtonDomesticHabits2,
  ButtonGroups,
  ButtonGroups2,
  ButtonSet,
  ButtonAddHabits
  } from "./stylle";


import LogoWedo from "../../assets/LogoWedo.png"
import ProfilePhoto from "../../assets/ProfilePhoto.png"
import Buttons from "../../assets/Buttons.png"
import Seta from "../../assets/Seta.png"


export const Dashboard = () => {
  return(
 <section>
    
    <Header>
        <Logo src={LogoWedo} alt="logo-wedo" />
        <Photo src={ProfilePhoto} alt="logo-wedo" />
    </Header>
    
    <Container>
          <Tittle>Meus hábitos</Tittle>
          <ButtonAddHabits src={Buttons} alt="Button add habits"/>

        <ContainerHabits>

        <p>Calestenia a tarde (15 minutos)</p>
        <ButtonSports>Saúde</ButtonSports>
        <ButtonSports2>Incompleto</ButtonSports2>

        </ContainerHabits>

        <ContainerHabits2>
        <p>Passar roupa</p>
        <ButtonDomesticHabits>Casa</ButtonDomesticHabits>
        <ButtonDomesticHabits2>Completo</ButtonDomesticHabits2>
         
         </ContainerHabits2>
         <ContainerHabits3>
           Passar roupa
         </ContainerHabits3>

    </Container>

    <Container2>

        <Tittle2>Meus grupos</Tittle2>

        <ContainerGroups>

          <h3>Grupo de Leitura</h3>
          <p>Somos um grupo de leitura, focado em auto ajuda.</p>

          <ButtonGroups>Leitura</ButtonGroups>
          <ButtonGroups2>3 membros</ButtonGroups2>
          <ButtonSet src={Seta} alt="button set groups" />
        </ContainerGroups>

        <ContainerGroups2>

        <h3>Kenzie Group</h3>
        <p>Programadores</p>

        </ContainerGroups2>
      
    </Container2>

 </section>
   

  ) 
  
 
};
