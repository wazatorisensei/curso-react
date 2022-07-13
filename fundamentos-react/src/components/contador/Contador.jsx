import "./Contador.css"
import React, { Component } from 'react'

import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    /*constructor(props) { //não e a melhor forma, e melhor criar uma arrow no inc
        super(props)

        this.inc = this.inc.bind(this)
    }*/

    inc = () => {  //função arrow
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {  //função arrow
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    /*constructor(props) { //não e a melhor forma
        super(props)
        
        this.state = {
            numero: this.props.numeroInicial
        }

    }*/

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}

export default Contador