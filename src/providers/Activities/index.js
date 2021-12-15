import {createContext} from "react"
import {toast} from "react-toastify"
import api from "../../services/api"
import {useAuth} from "../Auth"

export const ActivitiesContext = createContext()

export const ActivitiesProvider = ({children}) => {

    const {access} = useAuth()

    const addActivity = (data, groupId) => {
        data.group = groupId

        api.post("activities/", data, {
            headers: {Authorization: `Bearer ${access}`},
        })
        .then((response) => {
            toast.success("Atividade Criada!")
        })
        .catch((err) => {
            toast.error("Não foi possível criar a Atividade")
            console.log(err)
        })
    }

    return (
        <ActivitiesContext.Provider value={{addActivity}}>
            {children}
        </ActivitiesContext.Provider>
    )
}