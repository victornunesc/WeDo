import {Container, LeftSide, RightSide, Box, CenterForm, Form, Input, Label, Button, ErrorMessage, AlreadyRegistered, DivFlower} from "./style"
import LogoSignUp from "../../assets/Images/LogoSignUp.png"
import Flowers from "../../assets/Images/Flowers.png"
import api from "../../services/api"
import {toast} from "react-toastify"
import {useHistory} from "react-router-dom"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

export const Signup = () => {

    const history = useHistory()

    const schema = yup.object().shape({
        username: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório"),
        confirmPassword: yup.string().required("Campo Obrigatório").oneOf([yup.ref("password")], "Senhas devem ser Iguais"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const sendRegister = (data) => {
        const newData = {
            username: data.username,
            email: data.email,
            password: data.password,
        }
        api.post("/users/", newData)
        .then((response) => {
            toast.success("Conta Criada com Sucesso!")
            history.push("/login")
        })
        .catch((err) => {
            toast.error("Erro ao Criar Conta!")
            console.log(err)
        })
    }

    return (
        <>
            <Container>
                <LeftSide>
                     
                </LeftSide>
                <RightSide>
                    <Box>
                        <CenterForm>
                            <Form onSubmit={handleSubmit(sendRegister)}>
                                <Label htmlFor="">Username</Label>
                                <Input type="text" placeholder="Username" {...register("username")}/>
                                <ErrorMessage>{errors.username?.message}</ErrorMessage>
                                <Label htmlFor="">Email</Label>
                                <Input placeholder="Email" {...register("email")}/>
                                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                                <Label htmlFor="">Password</Label>
                                <Input type="password" placeholder="Senha" {...register("password")}/>
                                <ErrorMessage>{errors.password?.message}</ErrorMessage>
                                <Label htmlFor="">Confirm Password</Label>
                                <Input type="password" placeholder="Confirmar Senha" {...register("confirmPassword")}/>
                                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
                                <Button type="submit">Cadastrar</Button>
                                <AlreadyRegistered>Já possui uma conta? <span>Faça login</span></AlreadyRegistered>
                            </Form>
                        </CenterForm>
                        <DivFlower>
                            <img src={Flowers} alt="Flower" />
                        </DivFlower>
                    </Box>
                </RightSide>
            </Container>
        </>
    )
}