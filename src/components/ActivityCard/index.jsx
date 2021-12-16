import { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

import { IconButton } from '../Button';
import { ActivityEdit } from '../ActivityEdit';

import { Card } from './style';
import { formattedDate } from '../Input/Utility/formatter';

export const ActivityCard = ({ cardActivity }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const { id, title, realization_time } = cardActivity;

  const newDate = formattedDate(new Date(realization_time));

  return (
    <Card>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="date">
        <div className="alignItems">
          <p>
            <FiCalendar />
          </p>
          <p>{newDate}</p>
        </div>
        <div className="icon">
          <IconButton
            primaryColor
            arrowUp
            onClick={() => setOpenModalEdit(true)}
          />
        </div>
      </div>
      {openModalEdit && (
        <ActivityEdit setOpenModalEdit={setOpenModalEdit} id={id} />
      )}
    </Card>
  );
};
