export default function cliente(req, res){
    
    if(req.method === "GET"){
        clienteGet(req, res);
    } else{
        res.status(405).send();
    }
    res.status(200).send()
}

function clienteGet(req, res){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        email: 'maria@gmail.com'
    })
}