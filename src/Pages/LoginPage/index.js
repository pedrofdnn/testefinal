

import { LogoImage, ScreenContainer, InputsContainer } from './styled'
import logo from '../../Assets/logo.png'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useState } from 'react'


export function LoginPage() {

    //const [form, onChange, clear] = useForm(email: , Password: )



    const [isLoading, setIsLoading] = useState(false)
    const onSubmitForm = (event) => {
        event.prevent()
    }

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmitForm={onSubmitForm}>
                    <TextField
                        name={"email"}
                        // value={form.email}
                        // onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                        
                    />
                    <TextField
                        name={"password"}
                        // value={form.password}
                        // onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                       {isLoading ? <CircularProgress size={24}/> : <>Fazer Login</>}
                    </Button>

                    <Button
                        //onClick={() => goToNewUsers(history)}
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

