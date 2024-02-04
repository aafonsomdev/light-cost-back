import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import operations from './routes/operations';
//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(cors());

// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/operations', operations);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
