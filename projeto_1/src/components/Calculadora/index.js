import React, {useState} from "react"
import './style.css'

function Calculadora () {
    const [valor, setValor] = useState(0)
    const [total, setTotal] = useState(0)

    function toNumber(n) {
        return (n * 1)
    }

    function soma() {
        setTotal(toNumber(total) + toNumber(valor))
        setValor(0)
    }

    function subtracao() {
        setTotal(toNumber(total) - toNumber(valor))
        setValor(0)
    }

    function multiplicacao () {
        setTotal(toNumber(total) * toNumber(valor))
        setValor(0)
    }

    function divisao() {
        setTotal(toNumber(total) / toNumber(valor))
        setValor(0)
    }

    function atualizaTotal(event) {
        setValor(event.target.value)
    }

    return (
        <div className="Components.Calculadora">
            <h1 className="headerCalculadora">Calculadora</h1>
            <div className="totalCalculadora">
                {total}
            </div>

            <input className='inputCalculadora' type="number" value={valor} onChange={atualizaTotal}/>
            <fieldset>
                <legend>Operações</legend>
                <button type="button" onClick={soma}>+</button>&nbsp;<button type="button" onClick={subtracao}>-</button>&nbsp;<button type="button" onClick={multiplicacao}>*</button>&nbsp;<button type="button" onClick={divisao}>/</button>
            </fieldset>
        </div>
    )

}

export default Calculadora