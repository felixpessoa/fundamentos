import Layout from "@/components/Layout";

export default function Jsx(){
    const a = 4;
    const b = 3;
    console.log(a * b);

    //Objeto
    const obj = {nome: 'João', idade: 30}

    const titulo = <h1>JSX é um conceito central</h1>;

    function subtitulo(){
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'João', idade: 30}) /*Dentro de um dobol {{}} significa um objeto*/}
            </p>

        </div>
        </Layout>

    );



    // return (
    //     <div>
    //         {titulo}
    //         {a * b /*usando os {} podemos usar codigos js*/}
    //         <h2>{"Muito legal".toUpperCase()}</h2>
    //         <p>
    //             {JSON.stringify({nome: 'João', idade: 30}) /*Dentro de um dobol {{}} significa um objeto*/}
    //         </p>




    //     </div>

    // );
}