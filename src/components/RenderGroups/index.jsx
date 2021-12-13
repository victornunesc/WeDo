import { useState, useEffect } from "react";
import api from "../../services/api";
import { useAuth } from "../../providers/AuthContext";
import { Card, Section } from "./style";
import { FiArrowUpRight } from "react-icons/fi";

export const RenderGroups = ({ groups, setGroups, groupInput, input }) => {
  const { access } = useAuth();
  const [page, setPage] = useState(1);

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
    <Section>
      {groupInput.length > 0 && input !== ""
        ? groupInput.map((group, index) => (
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

                <div className="icon-button-group">
                  <FiArrowUpRight className="icon-group" />
                </div>
              </div>
            </Card>
          ))
        : groups.map((group, index) => (
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

                <div className="icon-button-group">
                  <FiArrowUpRight className="icon-group" />
                </div>
              </div>
            </Card>
          ))}

      <div className="section__render_full" onClick={() => setPage(page + 1)}>
        Ver mais
      </div>
    </Section>
  );
};
