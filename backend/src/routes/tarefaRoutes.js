import Router from 'express';
import  tarefaController  from "../controllers/tarefaController.js"

const router = Router();

router.get('/tarefa', tarefaController.getAll);
router.get('/tarefa', tarefaController.get);
router.put('/tarefa', tarefaController.update);
router.patch('/tarefa', tarefaController.patch);
router.delete('tarefa', tarefaController.delete);

export default router