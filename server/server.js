const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/routes');

app.set('view engine', 'ejs');

routes(app);

app.listen(port, () => console.log('listening on port: ' + port));
