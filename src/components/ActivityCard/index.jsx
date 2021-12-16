import { useState, useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';

import { IconButton } from '../Button';
import { ActivityEdit } from '../ActivityEdit';

import { Card } from './style';
import { useGroup } from "../../providers/Groups"

export const ActivityCard = ({ cardActivity }) => {

  const {akuma} = useGroup()
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const id = cardActivity.id;

  const fixDate = cardActivity.realization_time.substr(0, 10)
  const newDate = fixDate.split("-").reverse().join("/")

  return (
    <Card>
      <div className="title">
        <h3>{cardActivity.title}</h3>
      </div>
      <div className="date">
        <div className="alignItems">
          <p>
            <FiCalendar />
          </p>
          <p>{newDate}</p>
        </div>
        {
          !akuma && 
          <div className="icon">
            <IconButton
              primaryColor
              arrowUp
              card
              onClick={() => setOpenModalEdit(true)}
            />
          </div>
        }
      </div>
      {openModalEdit && (
        <ActivityEdit setOpenModalEdit={setOpenModalEdit} id={id}/>
      )}
    </Card>
  );
};
