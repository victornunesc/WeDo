import { Header,Logo, Photo, Container, ContainerHabits, ButtonSports, ButtonDomesticHabits,LastBox } from "./stylle";
import LogoWedo from "../../assets/LogoWedo.png"
import ProfilePhoto from "../../assets/ProfilePhoto.png"


export const Dashboard = () => {
  return(
 <>
    
    <Header>
        <Logo src={LogoWedo} alt="logo-wedo" />
        <Photo src={ProfilePhoto} alt="logo-wedo" />
    </Header>
    
     <Container>
       <h2>Meus hábitos</h2>
       <ContainerHabits>
         <ButtonSports/><ButtonSports/>
       </ContainerHabits>
       <ContainerHabits>
         <ButtonDomesticHabits/><ButtonDomesticHabits/>
       </ContainerHabits>

    </Container>

    <Container>

      
    </Container>

 </>
   

  ) 
  
 
};
