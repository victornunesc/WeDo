import {Card} from "./style"
import {FiCalendar} from "react-icons/fi"
import {IconButton} from "../Button"

export const ActivityCard = ({habit}) => {
    return (
        <Card>
            <div className="title">
                <h3>
                    {habit.title}    
                </h3>
            </div>
            <div className="date">
                <div className="alignItems">
                    <p>
                        <FiCalendar/> 
                    </p>
                    <p>
                        {habit.category}
                    </p>
                </div>
                <div className="icon">
                    <IconButton primaryColor arrowUp onClick={() => console.log("teste")}/>
                </div>
            </div>
        </Card>

    )
}