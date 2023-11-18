// npm install cors --save
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('bdEmployes.json'); // Assurez-vous que le chemin est correct
const middlewares = jsonServer.defaults();

// Ajoutez le middleware CORS
const cors = require('cors');
server.use(cors());

// Utilisez les middlewares par défaut (logger, static, cors)
server.use(middlewares);

// Utilisez le routeur JSON Server
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
