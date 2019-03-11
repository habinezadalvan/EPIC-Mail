import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(router);


app.listen(process.env.PORT || 3000, () => {
  console.log('app listen on port 3000');
});

export default app;
