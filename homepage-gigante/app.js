const express = require('express');
const path = require('path');

const app = express();

// Impostazione del motore di rendering Pug e del percorso delle viste
app.set('view engine', 'pug');
app.set('views', [
  path.join(__dirname, 'views'), // Cartella principale delle viste
  path.join(__dirname, 'views', 'profili') // Cartella specifica per i profili
]);

// Servire i file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route per la homepage
app.get('/', (req, res) => {
  res.render('index'); // Renderizza index.pug dalla cartella principale delle viste
});

// Route per la pagina dei profili
app.get('/profili', (req, res) => {
  res.render('profili'); // Renderizza profili.pug dalla cartella specifica per i profili
});

// Route per il profilo della persona 1
app.get('/profili/persona1', (req, res) => {
  res.render('persona1'); // Renderizza persona1.pug dalla cartella specifica per i profili
});

// Route per il profilo della persona 2
app.get('/profili/persona2', (req, res) => {
  res.render('persona2'); // Renderizza persona2.pug dalla cartella specifica per i profili
});

// Route per il profilo della persona 3
app.get('/profili/persona3', (req, res) => {
  res.render('persona3'); // Renderizza persona3.pug dalla cartella specifica per i profili
});

// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
