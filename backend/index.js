const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app=express();


app.listen(5000, () => {
    console.log("server listening at 5000");
});