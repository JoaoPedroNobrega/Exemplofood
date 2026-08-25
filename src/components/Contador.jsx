import { useState } from "react"

const Contador = () => {

    // Hook - useState - manipula o estado da variável
    const [contador, setContador] = useState(0);

    return (
        <>
            <h2>Contagem Inicial:{contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={() => setContador(contador - 1)}>Diminuir</button>
        </>
    )
}

export default Contador
