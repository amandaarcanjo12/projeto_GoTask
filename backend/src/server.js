import express from 'express';
import tarefaRoutes from "./routes/tarefaRoutes.js"

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(tarefaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})
