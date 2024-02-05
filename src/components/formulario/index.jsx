import { useState } from 'react'
import './formulario.css'

const Frm = () =>{
    
    const [peso, setPeso ] = useState(0);
    const [altura ,setAltura] = useState(0);
    const [mensagem, setMensagem] = useState('')

    const calculaImc = () => {
        const imc = peso/(altura*altura)
        
        if(imc <= 17 ){
            return(
                resultado = `Seu IMC é: {(imc.toFixed(2))}. <span className='danger'>Você está muito abaixo do peso</span>`
            )
        } else if (imc <= 18.49 && imc > 17){
            return(
                resultado = `Seu IMC é: {(imc.toFixed(2))}. <span className='warning'>Você está abaixo do peso</span> `
            )
        } else if ( imc <= 24.99 && imc > 18.5) {
            return(
                resultado = `Seu IMC é: {(imc.toFixed(2))}. <span className='good'>Você está com o peso normal</span>`
            )    
        } else if (25 <= imc <= 29.99){
            return (
                resultado = `Seu IMC é: {(imc.toFixed(2))}.<span className='warning'>Você está acima do peso</span>`
            )
        } else if (30 <= imc <= 34.99){
            return (
                resultado = `Seu IMC é: {(imc.toFixed(2))}.<span className='danger'>Obesidade I</span>`
            )
        } else if (35 <= imc <= 39.99){
            return (
                resultado = `Seu IMC é: {(imc.toFixed(2))}.<span className='danger'>Obesidade II (severa)</span>`
            )
        } else {
            return (
                resultado = `Seu IMC é: {(imc.toFixed(2))}.<span className='danger'>Obesidade III (mórbida)</span>`
                )
            }
    return resultado
    }

    const verificar = () => {
        const resultado = calculaImc();
        setMensagem(resultado)
    } 

    return(
    <div className='container'>
        <h1>Verifique o seu IMC</h1>
        <form>
            <label htmlFor="">Peso (Kg)</label>
            <input className="numero" onChange={evento => setPeso(parseFloat(evento.target.value))} type='number' placeholder='altura'/>
            <br />
            <label htmlFor="">Altura (m)</label>
            <input className="numero" onChange={evento => setAltura(parseFloat(evento.target.value))} type='number' placeholder='peso'/>
        </form>
        <button className='btn' onClick={verificar} type='button'>Verificar</button>
        <h3>
        {mensagem && <div>{mensagem}</div>}
        </h3>
    </div>
    )
}

export default Frm