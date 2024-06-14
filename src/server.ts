import express, { json } from 'express';
import bodyParser from 'body-parser';
import productRouter from './Routes/productRouter';

let app = express();
app.use(bodyParser.json());

// app.use(bodyParser.json());
app.use(express.json());

app.use('/products', productRouter);

app.listen(4005, () => {
    console.log('Server is running well...');
});
