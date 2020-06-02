const HTTP = require('http');
const express = require('express');
const app = express();  
const path = require('path');    
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/homeRoutes');

app.use(express.static("views"));
app.use(homeRoutes);

const server = HTTP.createServer(app);

app.listen(8000);