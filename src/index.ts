import express, { Application } from 'express';
import routes from './routes'

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})