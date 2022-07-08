import React from 'react'

export default function ComParametro(props) {
    //console.log(props)
    const status = props.nota >= 7 ? 'Aprovado' : 'de Recuperação'
    const notaInt = Math.ceil(props.nota) //ceil arredonda para cima
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status}</strong>!
            </p>
        </div>
    )
}