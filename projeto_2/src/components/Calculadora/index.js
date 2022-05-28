import React, { useState } from 'react'
import Display from '../Display'
import Button from '../Button'
import InputValue from '../InputValue'

function Calculadora() {
    const [total, setTotal] = useState(0)
    const [valor, setValor] = useState(0)

    function soma() {
        setTotal(total + parseInt(valor))
    }

    function subtracao() {
        setTotal(total - parseInt(valor))
    }

    function multiplicacao () {
        setTotal(total * parseInt(valor))
    }

    function divisao() {
        setTotal(total / parseInt(valor))
    }

    return (
        <div>
            <Display value={total} />
            <InputValue type="number" value={valor} change={setValor} />
            <Button type="button" text="+" click={soma} />
            <Button type="button" text="-" click={subtracao} />
            <Button type="button" text="*" click={multiplicacao} />
            <Button type="button" text="/" click={divisao} />
        </div>
    )

}

export default Calculadora