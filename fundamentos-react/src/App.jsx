import './App.css'
import React from 'react'

import Mega from './components/Mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#14 - Mega" color="#B9006E">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#13 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#12 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#11 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#10 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#9 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome:'Fernando' }} />
                <UsuarioInfo />
                {/*<UsuarioInfo usuario={{}} />
                <UsuarioInfo />*/}
            </Card>

            <Card titulo="#8 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#7 - Repetição" color="#FFA07A">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#6 Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
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

)