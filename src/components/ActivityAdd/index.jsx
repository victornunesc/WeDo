import {Container} from "./style"
import {Modal} from "../Modal"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import {Input} from "../Input"
import {Button} from "../Button"
import {useParams} from "react-router-dom"

import {useContext} from "react"
import {ActivitiesContext} from "../../providers/Activities"

export const ActivityAdd = () => {

    const params = useParams()

    const {addActivity} = useContext(ActivitiesContext)

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        realization_time: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const handleAddActivity = (data) => {
        addActivity(data, params.id)
    }

    return (
        <>
            <Modal/>
            <Container>
                <h2>Adicionar Atividade</h2>
                <form onSubmit={handleSubmit(handleAddActivity)}>
                    <section className="inputs">
                        <Input register={register} errors={errors} name="title" placeholder="Título"/>
                        {/* <Input register={register} errors={errors} name="realization_time" placeholder="Data"/> */}
                        <input type="datetime-local" {...register("realization_time")}/>
                    </section>
                    <Button type="submit">Adicionar</Button>
                </form>
            </Container>
        </>
    )
}