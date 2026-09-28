import  tarefaService  from "../services/tarefaService.js"

export const tarefaController = {
    async getAll(req, res){
        try{
            const tarefas = await tarefaService.getAllTarefa();
            res.json(tarefas);
        } catch(error){
            res.status(404).json({ erro: error.message});
        }
    },

    async get(req, res){
        try{
            const tarefas = await tarefaService.getTarefa(req.params.id);
            res,json(tarefas);
        } catch(error){
            res.status(404).json({ erro: error.message});
        }
    },

    async update(req, res){
        try{
            const tarefaAtualizada = await tarefaService.updateTarefa(req.params.id, req.body)
            res.json(tarefaAtualizada)
        } catch (error){
            const status = error.message === 'Tarefa não encontrada' ? 404 : 400
            res.status(404).json({ erro: error.message});
        }
    },

     async patch(req, res){
        try{
            const tarefaAlterada = await tarefaServiceService.patchTarefa(req.params.id, req.body);
            res.json(tarefaAlterada);
        }catch(error){
            const status = error.message === "Tarefa não encontrada" ? 404 : 400
            res.status(status).json({ erro: error.message });
        }
    },

    async delete(req, res){
        try{
            const tarefaRemovida = await tarefaService.deleteTarefa(req.params.id);
            res.json({
                mensagem: `Tarefa removida com sucesso: {$tarefaRemovida.nome}`
            })

        }catch(error){
            const status = error.message === "Tarefa não encontrada" ? 404 : 400
            res.status(status).json({ erro: error.message });
        }
    }
}