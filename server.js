//------------- Import -------------
const express = require('express');

//------------- Init -------------
const port = 8000;
const app = express();

//------------- Main routes -------------
app.use(express.json());

const foodsRouter = require('./routers/foods');
app.use('/foods', foodsRouter);

//Start the server
app.listen(port, () => {
    console.log('Server is start !');
});

