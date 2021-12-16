import {Card} from "./style"
import {FiCalendar} from "react-icons/fi"
import {IconButton} from "../Button"
import {ActivityEdit} from "../ActivityEdit"

import {useState} from "react"

export const ActivityCard = ({cardActivity}) => {

    const [openModalEdit, setOpenModalEdit] = useState(false)

    const id = cardActivity.id

    return (
        <Card>
            <div className="title">
                <h3>
                    {cardActivity.title}    
                </h3>
            </div>
            <div className="date">
                <div className="alignItems">
                    <p>
                        <FiCalendar/> 
                    </p>
                    <p>
                        {cardActivity.realization_time}
                    </p>
                </div>
                <div className="icon">
                    <IconButton primaryColor arrowUp onClick={() => setOpenModalEdit(true)}/>
                </div>
            </div>
            {
                openModalEdit && <ActivityEdit setOpenModalEdit={setOpenModalEdit} id={id}/>
            }
        </Card>

    )
}