import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/btn">Botão</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu