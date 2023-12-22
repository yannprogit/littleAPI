//------------- Import -------------
const express = require('express');

//------------- Init -------------
const port = 8000;
const app = express();

//------------- Main routes -------------
app.use(express.json());

// Route de base
app.get('/', (res) => {
    res.json({ message: 'Bienvenue sur littleAPI !' });
});

const foodsRouter = require('./routers/foods');
app.use('/foods', foodsRouter);

const ingredientsRouter = require('./routers/ingredients');
app.use('/ingredients', ingredientsRouter);

const compositionsRouter = require('./routers/compositions');
app.use('/compositions', compositionsRouter);

const customersRouter = require('./routers/customers');
app.use('/customers', customersRouter);

const employeesRouter = require('./routers/employees');
app.use('/employees', employeesRouter);

const purchasesRouter = require('./routers/purchases');
app.use('/purchases', purchasesRouter);

//Start the server
app.listen(port, () => {
    console.log('Server is start !');
});

