const express = require('express');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/itemsRoutes');

const app = express();
const port = process.env.PORT || 3000; 
app.use(bodyParser.json());

app.use('/api/items', itemsRoutes);

app.use(express.static('client'));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
