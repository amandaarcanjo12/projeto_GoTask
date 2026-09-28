CREATE TABLE tarefas(
id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    concluida BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios (
id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (id, nome, email, senha, criado_em)
VALUES
(1, 'Ana Silva', 'ana.silva@email.com', '123456', CURRENT_TIMESTAMP),
(2, 'Carlos Eduardo', 'carlos.dev@email.com', '123456', CURRENT_TIMESTAMP),
(3, 'Mariana Costa', 'mariana.costa@email.com','123456', CURRENT_TIMESTAMP);

INSERT INTO tarefas (id, usuario_id, nome, descricao, concluida, criado_em)
VALUES 
(1, 1, 'comprar itens que faltam', 'ir ao mercado comprar pó de café e frutas', FALSE, '2026-09-28 10:00:00'),
(2, 3, 'Pagar conta de luz', 'Baixar o boleto e pagar via PIX.', TRUE, '2026-09-27 14:30:26'),
(3, 2, 'Estudar PostgreSQL', 'Ler capítulo sobre chave estrangeira e JOIN.', FALSE, '2026-09-25 09:15:00');

select * from usuarios
select * from tarefas