const express = require('express');
const path = require('path');

let app = express();
const publicPath = path.join(__dirname, '/');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/app/index.html'));
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});