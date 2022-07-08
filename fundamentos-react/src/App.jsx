import './App.css'
import React from 'react'

import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () =>

    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#6 Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira" />
            </Card>

            <Card titulo="#5 Cards" color="#000">
                <p>Só olhar em volta dos cards dos exercícios</p>
            </Card>

            <Card titulo="#4 Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#3 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 Com Parâmentro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#1 Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>