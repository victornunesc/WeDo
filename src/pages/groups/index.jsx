import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Div, Container, Cabecalho, Footer } from "./style";
import { RenderGroups } from "../../components/RenderGroups";
import { FindGroups } from "../../components/FindGroups";
import { ContainerGroupNone } from "../../components/ContainerGroupNone/inedex";
import { useAuth } from "../../providers/AuthContext";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [input, setInput] = useState("");
  const [groupInput, setGroupInput] = useState([]);
  const { access } = useAuth();
  const [page, setPage] = useState(1);

  const history = useHistory();

  useEffect(() => {
    api
      .get(`groups/?page=${page}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const newGroups = response.data.results;
        setGroups([...groups, ...newGroups]);
      })
      .catch((err) => console.log(err));
  }, [page]);

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
        {groups.length === 0 ? (
          <ContainerGroupNone />
        ) : (
          <RenderGroups
            groups={groups}
            setGroups={setGroups}
            groupInput={groupInput}
            input={input}
            page={page}
            setPage={setPage}
          />
        )}

        <Footer>
          <button
            className="backButton"
            onClick={() => history.push("/dashboard")}
          >
            Voltar
          </button>
          <button className="redButtom">Criar Grupo</button>
        </Footer>
      </Container>
    </Div>
  );
};
