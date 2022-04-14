const express = require('express');
const port = 3000;
const cors = require('cors');
const app = express();

//Configurando aplicação para trabalhar com JSONS
app.use(express.json());

app.use(cors());

//Definir dados para usar na aplicação
const paletas = [
  {
    id: 1,
    sabor: 'acai com leite condensado',
    descricao: 'Paleta de acai com leite condensado',
    foto: '/assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Paleta de banana com nutella',
    foto: '/assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga com Brigadeiro',
    descricao: 'Paleta de chocolate belga com brigadeiro',
    foto: '/assets/images/chocolate-belga-com-brigadeiro.png',
    preco: 10.0,
  },
];

app.get('/', function (req, res) {
  res.send('Hello word');
});

app.get('/paletas/find-paletas', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/find-paletas/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost: ${port}👨‍💻`);
});
