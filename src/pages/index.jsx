import Link from "next/link";
import Navegador from "@/components/Navegador";

export default function Inicio() {

    // return (
    //     <div>
    //         <h1>Fundamentos de Next.js & React</h1>
    //         <h2>Vamos estudar esse framework </h2>
    //     </div>
    // );
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            height: "100vh"
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
        </div>
    );
}