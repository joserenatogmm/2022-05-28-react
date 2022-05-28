import React, {useState} from "react"
import './style.css'

function Contador () {

    const [valor, setValor] = useState(5)
    return (
        <div className="Components.Contador">
            <h1 className="destaqueContador">Olá, eu sou o Contador</h1>
            <span>{valor} <button type="button" onClick={() => setValor(valor + 1)}>+</button></span>
        </div>
    )
}

export default Contador;