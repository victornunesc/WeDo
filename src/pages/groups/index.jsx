import { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { useAuth } from "../../providers/AuthContext";
import { Div, Container, Cabecalho, Input, Card, Section } from "./style";
import imageGroup from "../../assets/ImageGroup.png";

export const Groups = () => {
  const { access } = useAuth();
  const [page, setPage] = useState(1);

  const [groups, setGroups] = useState([]);

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

  console.log(groups);
  console.log(page);

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
        <Section>
          {groups.map((group, index) => (
            <Card key={index}>
              <div className="upPart">
                <h3 className="group-name">{group.name}</h3>
                <p className="group-description">{group.description}</p>
              </div>
              <div className="downPart">
                <div className="category-group-card">{group.category}</div>
                {group.users_on_group.length > 1 ||
                group.users_on_group.length === 0 ? (
                  <div className="user-on-group-card">
                    {group.users_on_group.length} Membros
                  </div>
                ) : (
                  <div className="user-on-group-card">
                    {group.users_on_group.length} Membro
                  </div>
                )}

                <div className="icon-button-group">icon</div>
              </div>
            </Card>
          ))}
          <button onClick={() => setPage(page + 1)}>mais grupos</button>
        </Section>
        <footer>
          <button>Voltar</button>
          <button>Criar Grupo</button>
        </footer>
      </Container>
    </Div>
  );
};
