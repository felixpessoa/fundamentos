import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado(){
    // let numero = 3;

    // const state = useState(0)
    // let numero = state[0]
    // let alterarNumero = state[1]

    const [numero, setNumero] = useState(0);

    function incrementar(){
        // numero += 1
        // alterarNumero(numero + 1)
        setNumero(numero + 1);
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar </button>
        </Layout>
    )
}