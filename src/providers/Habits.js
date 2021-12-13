import {createContext, useState} from "react"

export const HabitsContext = createContext()

export const HabitsProvider = ({children}) => {

    const [habits, setHabits] = useState([])
    const [isHabit, isSetHabit] = useState(false)

    const [isEdit, isSetEdit] = useState(false)
    const [actualHabit, setActualHabit] = useState(0)

    const showModalHabit = () => {
        isSetHabit(true)
    }

    const hideModalHabit = () => {
        isSetHabit(false)
    }

    const showEditModal = (habit) => {
        isSetEdit(true)
        setActualHabit(habit.id)
    }

    const hideEditModal = () => {
        isSetEdit(false)
    }

    return (
        <HabitsContext.Provider value={{habits, setHabits, isHabit, isSetHabit, isEdit, isSetEdit, actualHabit, setActualHabit, showModalHabit, hideModalHabit, showEditModal, hideEditModal}}>
            {children}
        </HabitsContext.Provider>
    )
}