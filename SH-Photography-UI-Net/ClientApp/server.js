const path = require('path');
const express = require('express');

var cacheTime = 86400000 * 7;
app.use(express.static(path.join(__dirname, 'public'), { maxAge: cacheTime }));