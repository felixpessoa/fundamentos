import Layout from "@/components/Layout";

export async function getStaticProps(){
    // fetch()
    return {
        props: {
            numero: Math.random()
        }
    }
}
// export function getStaticProps(){
//     return {
//         props: {
//             numero: Math.random()
//         }
//     }
// }

export default function Estatico(props){

    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}