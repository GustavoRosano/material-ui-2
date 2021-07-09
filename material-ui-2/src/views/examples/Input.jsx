import './Input.css'
import React, { useState } from 'react'
import { Input } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'

export default props => {

    const [value, setValue] = useState('')
    const [senha, setSenha] = useState('')

    function mudar(e) {
        setValue(e.target.value)
    }
    function mudarSenha(e) {
        setSenha(e.target.value)
    }

    return (
        <Grid container className="Input">
            <Grid item xl={6}>
                <h1>Login</h1>
                <p>_________________________________________________________________________________________________________</p>
                <div>
                    <Input type="email" onChange={mudar} placeholder="e-mail:" />
                </div>
                <p>{value}</p>
                <div>
                    <Input type="password" onChange={mudarSenha} placeholder="Senha: *******" />
                </div>
                <div className="Btn">
                    <Button>
                    <a href="/">Entrar</a>
                    </Button>
                </div>
                <div className="Btn">
                    <Button>
                        <a href="/cadastro">Ainda Não Tenho Cadastro</a>
                    </Button>
                </div>
            </Grid>
        </Grid>

    )

}