import React from 'react'

export default (props) => {
    const { min, max } = props

    const [a, b] = [1, 2] // array
    const {c, d, x, y} = { c:12, d:45, x:'teste'} // objeto

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> {aleatorio}
            </p>
        </div>
    )
}