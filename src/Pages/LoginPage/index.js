

import { LogoImage, ScreenContainer, SignUpButtonContainer } from './styled'
import logo from '../../Assets/logo.png'
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router-dom'
import { goNewUsers } from '../../Router/Coordinator'
import { LoginForm } from './Component'


export function LoginPage() {

    const Navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goNewUsers(useNavigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                >
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer >
    )
}

