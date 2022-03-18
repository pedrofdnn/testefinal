

import { ScreenContainer, InputsContainer } from './styled'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useForm } from '../../Hooks/useForms'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Login } from '@mui/icons-material'
import { goListPage } from '../../Router/Coordinator'


export function LoginForm() {

    const [form, onChange, clear] = useForm({ email: "", Password: "" })
    const Navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        Login(form, clear, Navigate, setIsLoading)
    }

    return (
        <ScreenContainer>
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
                        onClick={() => goListPage(Navigate)}
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    >
                        {isLoading ? <CircularProgress size={24} /> : <>Fazer Login</>}
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

