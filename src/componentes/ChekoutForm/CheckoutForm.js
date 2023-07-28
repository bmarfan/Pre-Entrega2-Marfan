import { useState } from "react";
import "./CheckoutForm.css"

const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return(
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="label">
                    Nombre
                    <input 
                        className="input"
                        type="text"
                        value={nombre}
                        onChange={({target}) => setNombre(target.value)}
                    />
                </label>

                <label className="label">
                    Telefono
                    <input 
                        className="input"
                        type="text"
                        value={telefono}
                        onChange={({target}) => setTelefono(target.value)}
                    />
                </label>

                <label className="label">
                    Email
                    <input 
                        className="input"
                        type="text"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                </label>

                <div className="label">
                    <button type="submit" className="button">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm