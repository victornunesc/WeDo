import {Container} from "./style"
import {Modal} from "../Modal"
import {Input} from "../Input"
import {Button} from "../Button"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"

export const ActivityEdit = () => {

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        date: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const handleEditActivity = (data) => {
        console.log(data)
    }

    return (
        <>
            <Modal/>
            <Container> 
                <h2>Editar Atividade</h2>
                <form onSubmit={handleSubmit(handleEditActivity)}>
                    <section className="inputs">
                        <Input register={register} errors={errors} name="title" placeholder="Título"/>
                        <input type="datetime-local" {...register("date")}/>
                    </section>
                    <Button type="submit">Atualizar</Button>
                    <Button>Deletar</Button>
                </form>
            </Container>
        </>
    )
}