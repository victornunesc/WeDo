import {Container, ContainerModal, HeaderModal, CloseButton, MainModal, Form, FixForm} from "../ModalHabits/style"

import {GroupButtons} from "./style"
import {Input, InputRadio, InputRadioContainer} from "../Input/index"
import {Button} from "../Button/index"
import {useContext, useEffect} from "react"
import {AuthContext} from "../../providers/AuthContext"
import {HabitsContext} from "../../providers/Habits"
import {toast} from "react-toastify"
import {Modal} from "../Modal/index"

import api from "../../services/api"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

export const EditHabits = ({loadData}) => {

    const {access} = useContext(AuthContext)
    const {hideEditModal, actualHabit} = useContext(HabitsContext)

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        category: yup.string().required("Campo Obrigatório"),
        frequency: yup.string().required("Campo Obrigatório").nullable(),
        difficulty: yup.string().required("Campo Obrigatório").nullable(),
    })

    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: yupResolver(schema)
    }) 

    const updateHabit = (data) => {

        api.patch(`habits/${actualHabit}/`, data, {
            headers: { Authorization: `Bearer ${access}`},
        })
        .then((response) => {
            toast.success("Hábito Editado com Sucesso!")
            loadData()
        })
        .catch((err) => {
            toast.error("Não foi possível editar")
        })
    }

    const deleteHabit = (id) => {
        api.delete(`/habits/${id}/`, {
            headers: { Authorization: `Bearer ${access}`},
        })
        .then((response) => {
            toast.success("Hábito Excluído!")
            hideEditModal()
            loadData()
        })
        .catch((err) => {
            toast.error("Não foi possível Excluir")
            console.log(err)
        })
    }

    useEffect(() => {
        api.get(`habits/${actualHabit}/`, {
            headers: {Authorization: `Bearer ${access}`}
        })
        .then((response) => {
            const {
                title,
                category,
                frequency,
                difficulty
            } = response.data
        reset({
            title,
            category,
            frequency,
            difficulty
        })
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <Modal onClick={() => hideEditModal()}/>
            <Container>
                <ContainerModal>
                    <HeaderModal>
                        <h2>Editar Hábito</h2>
                        <CloseButton onClick={() => hideEditModal()}>X</CloseButton>
                    </HeaderModal>
                    <MainModal>
                        <Form onSubmit={handleSubmit(updateHabit)}>
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
                            <GroupButtons>
                                <Button onClick={() => deleteHabit(actualHabit)}>Deletar</Button>
                                <Button type="submit">Atualizar</Button>
                            </GroupButtons>
                        </Form>
                    </MainModal>
                </ContainerModal>
            </Container>
        </>
    )
}