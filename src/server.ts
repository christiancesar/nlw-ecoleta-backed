import 'dotenv/config'
import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3332,() => {
  console.log('🚀 Ecoleta started on port 3332!');
});