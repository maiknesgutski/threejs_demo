'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

// Constants
const PORT = 9595;
const HOST = "0.0.0.0";

// APP
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

fs.readFile('public/index.html', (error, html) => {
    if (error) throw error;

    app.get('/', (request, resolve) => {
        resolve.write(html);
        resolve.end();
    })
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});