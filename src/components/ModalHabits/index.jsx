import {ShowOnlyContainer, Container, ContainerModal, HeaderModal, CloseButton, MainModal, Form, FixForm} from "./style"
import {Input, InputRadio, InputRadioContainer} from "../Input/index"
import {Button} from "../Button/index"
import {useContext} from "react"
import {AuthContext} from "../../providers/AuthContext"
import {toast} from "react-toastify"
import {Modal} from "../Modal/index"

import api from "../../services/api"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

export const ModalHabits = () => {

    const {access, user, habits, setHabits, hideModalHabit} = useContext(AuthContext)

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        category: yup.string().required("Campo Obrigatório"),
        frequency: yup.string().required("Campo Obrigatório").nullable(),
        difficulty: yup.string().required("Campo Obrigatório").nullable(),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    }) 

    const sendHabit = (data) => {
        const newData = {
            title: data.title,
            category: data.category,
            frequency: data.frequency,
            difficulty: data.difficulty,
            achieved: false,
            how_much_achieved: 0,
            user: user.user_id,
        }
        api.post("habits/", newData, {
            headers: { Authorization: `Bearer ${access}`},
        })
        .then((response) => {
            setHabits([...habits, response.data])
            toast.success("Hábito criado!")
        })
        .catch((err) => {
            console.log(err)
            toast.error("Não foi possível criar um Hábito")
        })
    }

    return (
        <>
            <Modal onClick={() => hideModalHabit()}/>
            <Container>
                <ContainerModal>
                    <HeaderModal>
                        <h2>Adicionar Hábito</h2>
                        <CloseButton onClick={() => hideModalHabit()}>X</CloseButton>
                    </HeaderModal>
                    <MainModal>
                        <Form onSubmit={handleSubmit(sendHabit)}>
                            <FixForm>
                                <Input register={register} errors={errors} name="title" placeholder="Título"/>
                                <Input register={register} errors={errors} name="category" placeholder="Category"/>
                                <InputRadioContainer register={register} errors={errors} name="frequency" title="Frequência">
                                    <InputRadio register={register} name="frequency" label="Diária"/>
                                    <InputRadio register={register} name="frequency" label="Semanal"/>
                                    <InputRadio register={register} name="frequency" label="Mensal"/>
                                    <InputRadio register={register} name="frequency" label="Anual"/>
                                </InputRadioContainer>
                                <InputRadioContainer register={register} errors={errors} name="difficulty" title="Dificuldade">
                                    <InputRadio register={register} name="difficulty" label="Muito Fácil" sizeBigger/>
                                    <InputRadio register={register} name="difficulty" label="Fácil" sizeBigger/>
                                    <InputRadio register={register} name="difficulty" label="Médio" sizeBigger/>
                                    <InputRadio register={register} name="difficulty" label="Difícil" sizeBigger/>
                                    <InputRadio register={register} name="difficulty" label="Muito Difícil" sizeBigger/>
                                </InputRadioContainer>
                            </FixForm>
                            <Button type="submit">Enviar</Button>
                        </Form>
                    </MainModal>
                </ContainerModal>
            </Container>
        </>
    )
}