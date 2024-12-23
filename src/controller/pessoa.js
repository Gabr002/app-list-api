const service = new servicePessoa();

class controllerPessoa{
    PegarTodos(req, res) {
        try{
            const nomes = service.PegarTodos();
            res.status(200).send({ nomes });
        }catch(Error){
            res.status(500).send({ Error: e.message });
        }
    }
    PegarUm(req, res) {
        try{
            const id = req.params.id;
            const nome = service.PegarUm(id);
            res.status(200).send({ nome });
        }catch(e){
            res.status(500).send({ Error: e.message });
        }

    }
    Adicionar(req, res) {
        try{
            const nome = req.body.nome;
            service.Adicionar(nome);
            res.status(201).send();
        }catch(e){
            res.status(500).send({ Error: e.message });
        }
        
    }

    Alterar(req, res) {
        try{
            const id = req.params.id;
            const nome = req.body.nome;
            service.Alterar(id, nome);
            res.status(201).send();
        }catch(e){
            res.status(500).send({ Error: e.message})
        }
    }

    Deletar(req, res) {
        try{
            const id = req.params.id;
            service.Deletar(id);
            res.status(201).send();
        }catch(e){
            res.status(500).send({ Error: e.message })
        }
    }
}

module.exports = controllerPessoa;