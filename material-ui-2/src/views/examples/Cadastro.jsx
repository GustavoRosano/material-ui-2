import './Cadastro.css'
import React, { useState } from 'react'
import { Input } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'

export default props => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [value, setValue] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')

    function mudar(e) {
        setValue(e.target.value)
    }
    function mudarNome(e) {
        setNome(e.target.value)
    }
    function mudarSobrenome(e) {
        setSobrenome(e.target.value)
    }
    function mudarTelefone(e) {
        setTelefone(e.target.value)
    }
    function mudarSenha(e) {
        setSenha(e.target.value)
    }

    return (
        <Grid container className="Cadastro">
            <Grid item xl={6}>
                <h1>Cadastre-se</h1>
                <p>__________________________________________________________________________________________________________</p>
                <div>
                    <Input type="text" onChange={mudarNome} placeholder="Nome:" />
                </div>
                <p>{nome}</p>
                <div>
                    <Input type="text" onChange={mudarSobrenome} placeholder="Sobrenome:" />
                </div>
                <p>{sobrenome}</p>
                <div>
                    <Input type="text" onChange={mudar} placeholder="e-mail:" />
                </div>
                <p>{value}</p>
                <div>
                    <Input type="text" onChange={mudarTelefone} placeholder="Telefone: (11) 99999-9999" />
                </div>
                <p>{telefone}</p>
                <div>
                    <Input type="text" onChange={mudarSenha} placeholder="Senha: *******" />
                </div>
                <p>{senha}</p>
                <div className="Btn">
                    <Button>
                        <a href="/login">Cadastre-se</a>
                    </Button>
                </div>
            </Grid>
        </Grid>

    )

}