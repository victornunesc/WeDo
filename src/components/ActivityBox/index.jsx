import {Box} from "./style"
import {ActivityCard} from "../ActivityCard"

import {useHabits} from "../../providers/Habits"

export const ActivityBox = () => {

    const {habits} = useHabits()
    
    return (
        <>
            <Box>
                {
                    habits.map((habit, index) => (
                        <ActivityCard key={index} habit={habit}/>
                    ))
                }
            </Box>
        </>
    )
}