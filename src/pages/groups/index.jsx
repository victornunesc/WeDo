import { useState } from "react";
import Header from "../../components/Header";
import { Div, Container, Cabecalho, Input } from "./style";
import imageGroup from "../../assets/ImageGroup.png";
import { RenderGroups } from "../../components/RenderGroups";

export const Groups = () => {
  const [groups, setGroups] = useState([]);

  return (
    <Div>
      <Header />
      <Container>
        <Cabecalho>
          <div className="flex">
            <h2>Grupos</h2>
          </div>

          <Input placeholder="Pesquisar Grupos" type="text" />
        </Cabecalho>
        {/* <img src={imageGroup} alt="group" className="imageGroup" /> */}
        <RenderGroups groups={groups} setGroups={setGroups} />
        <footer>
          <button>Voltar</button>
          <button>Criar Grupo</button>
        </footer>
      </Container>
    </Div>
  );
};
