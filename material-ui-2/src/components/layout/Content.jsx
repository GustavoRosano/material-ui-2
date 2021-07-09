import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Input from '../../views/examples/Input'
import Home from '../../views/examples/Home'
import Btn from '../../views/examples/Btn'
import Cadastro from '../../views/examples/Cadastro'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/login">
                <Input />
            </Route>
            <Route path="/btn">
                <Btn />
            </Route>
            <Route path="/cadastro">
                <Cadastro />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
)

export default Content