import  tarefaRepository from "../repositories/tarefaRepository.js";

export const tarefaService = {
    // Apenas repassa a ordem para buscar todos os animais no repositório
    async getAllTarefa() {
        return await tarefaRepository.findAll();
    },

    async getTarefa(id){
        const tarefaExistente = await tarefaRepository.findById(id);
        if(!tarefaExistente){
            throw new Error('Tarefa não encontrada');
        }

        return tarefaExistente
    },

    // Regra de negócio para atualizar
    async updateTarefa(id, tarefaRequisicao){
        // Verifica primeiro se o chef realmente existe no banco de dados
        const tarefaExistente = await tarefaRepository.findById(id);
        
        if(!tarefaExistente){
            throw new Error('Tarefa não encontrada');
        }
        return await tarefaRepository.update(id, tarefaRequisicao);
    },

    async patchChef(id, tarefaRequisicao){
        const tarefaExistente = await tarefaRepository.findById(id);
        
        if(!tarefaExistente){
            throw new Error('Tarefa não encontrada');
        }
        return await tarefaRepository.patch(id,tarefaRequisicao);
    },

    async deleteTarefa (id){
        const tarefaExistente = await tarefaRepository.findById(id);
        
        if(!tarefaExistente){
            throw new Error('Tarefa não encontrada');
        }
        return await tarefaRepository.delete(id, tarefaRequisicao);
    }
};