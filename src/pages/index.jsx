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
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-02/123" cor="blue" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42a9a9" />
            <Navegador texto="Conteúdo Estatico" destino="/estatico" cor="#fa054a" />
        </div>
    );
}