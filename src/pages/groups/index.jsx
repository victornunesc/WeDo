import { useState } from "react";
import Header from "../../components/Header";
import { Div, Container, Cabecalho, Footer } from "./style";
import { RenderGroups } from "../../components/RenderGroups";
import { FindGroups } from "../../components/FindGroups";
import { ContainerGroupNone } from "../../components/ContainerGroupNone/inedex";

export const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [input, setInput] = useState("");
  const [groupInput, setGroupInput] = useState([]);
  console.log(groups);
  return (
    <Div>
      <Header />
      <Container>
        <Cabecalho>
          <div className="flex">
            <h2>Grupos</h2>
          </div>

          <FindGroups
            placeholder="Pesquisar Grupos..."
            type="text"
            input={input}
            setInput={setInput}
            groupInput={groupInput}
            setGroupInput={setGroupInput}
          />
        </Cabecalho>
        {!groups ? (
          <RenderGroups
            groups={groups}
            setGroups={setGroups}
            groupInput={groupInput}
            input={input}
          />
        ) : (
          <ContainerGroupNone />
        )}

        <Footer>
          <button className="backButton">Voltar</button>
          <button className="redButtom">Criar Grupo</button>
        </Footer>
      </Container>
    </Div>
  );
};
