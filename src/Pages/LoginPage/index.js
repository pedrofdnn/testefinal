

import { LogoImage, ScreenContainer, InputsContainer } from './styled'
import logo from '../../Assets/logo.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useForm } from '../../Hooks/useForms'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Login } from '@mui/icons-material'
import { goToListPage, goToNewUsers } from '../../Router/Coordinator'


export function LoginPage() {

    const [form, onChange, clear] = useForm({ email: "", Password: "" })
    const Navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.prevent()
        Login(form, clear, Navigate, setIsLoading)
    }

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmitForm={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}

                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                    <Button
                        onClick={() => Navigate(goToListPage)}
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    >
                        {isLoading ? <CircularProgress size={24} /> : <>Fazer Login</>}
                    </Button>

                    <Button
                        onClick={() => goToNewUsers(Navigate)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                    >
                        Não possui conta? Cadastre-se
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

