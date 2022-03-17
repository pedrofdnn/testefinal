import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { div } from './styled'



export function LoginPage() {

    return (
        <div className='Container'>

            <TextField
                name={"email"}
                //value={form.email}
                //onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"email"}
            />

            <TextField
                name={"password"}
                //value={form.password}
                //onChange={onChange}
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
                variant={"contained"}>
                Login

            </Button>

            <a href='./newUsers'>Fazer Registro</a>

        </div>
    );
}