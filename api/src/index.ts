import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// conectar ao mongoose
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiappfood.d3qzbbu.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        
        const app = express();
        const port = 3001;

        // entende que todas as imagens são estáticas e disponibiliza sua url - ex http://localhost:3001/uploads/1668632658688-quatro-queijos.png
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

        app.use(express.json());
        app.use(router);
        
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => console.log(err));
