const express = require('express');
const session = require('express-session');
const mysql = require('mysql2/promise');

const app = express();
const port = 3306;

// Configuração da sessão
app.use(session({
  secret: 'seuSegredo', // Segredo para assinar a sessão, mantenha seguro
  resave: false,
  saveUninitialized: true,
}));

// Configuração do banco de dados
const pool = mysql.createPool({
  host: 'seu_host',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'bomba',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Rota de login
app.post('/login', async (req, res) => {
  const { usuario, senha } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE nome_usuario = ? AND senha = ?', [usuario, senha]);

    if (rows.length > 0) {
      // Credenciais válidas, criando a sessão
      req.session.usuario = usuario;
      res.status(200).json({ success: true, message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao realizar o login:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

// Exemplo de rota protegida
app.get('/perfil', (req, res) => {
  if (req.session.usuario) {
    res.status(200).json({ success: true, message: 'Bem-vindo ao seu perfil', usuario: req.session.usuario });
  } else {
    res.status(401).json({ success: false, message: 'Você não está autenticado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
