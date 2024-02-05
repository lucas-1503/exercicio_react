import { useEffect, useState } from 'react'
import './formulario.css'

const Frm = () =>{
    
    const [peso, setPeso ] = useState(0);
    const [altura ,setAltura] = useState(0);

    const calculaImc = () => {
        const imc = peso/(altura*altura)
        console.log(imc)
        if(imc <= 17 ){
            return(
                <p>Seu IMC é: {(imc.toFixed(2))}. <span className='danger'>Você está muito abaixo do peso</span></p>
            )
        } else if (imc <= 18.49 && imc > 17){
            return(
                <p>Seu IMC é: {(imc.toFixed(2))}. <span className='warning'>Você está abaixo do peso</span> </p>
            )
        } else if ( imc <= 24.99 && imc > 18.5) {
            return(
                <p>Seu IMC é: {(imc.toFixed(2))}. <span className='good'>Você está com o peso normal</span></p>
            )    
        } else if (25 <= imc <= 29.99){
            return (
                <p>Seu IMC é: {(imc.toFixed(2))}.<span className='warning'>Você está acima do peso</span></p>
            )
        } else if (30 <= imc <= 34.99){
            return (
                <p>	Seu IMC é: {(imc.toFixed(2))}.<span className='danger'>Obesidade I</span></p>
            )
        } else if (35 <= imc <= 39.99){
            return (
                <p>	Seu IMC é: {(imc.toFixed(2))}.<span className='danger'>Obesidade II (severa)</span></p>
            )
        } else {
            return (
                <p>Seu IMC é: {(imc.toFixed(2))}.<span className='danger'>Obesidade III (mórbida)</span></p>
            )
        }
    }

    const verificar = () => {
        return true
    } 

    useEffect(()=>{
        calculaImc()
    },[verificar])


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
        <button className='btn' onClick={evento => !verificar(evento)} type='button'>Verificar</button>
        <h3>
        {calculaImc()}
        </h3>
    </div>
    )
}

export default Frm