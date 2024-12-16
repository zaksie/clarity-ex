import express from 'express';
import {employeeRouter} from "./routes/employees.route";
const app = express();
const port = 3000;
import bodyParser from 'body-parser'
import {swaggerDocs} from "./swagger";
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('OK');
});

app.use('/api/v1/employees', employeeRouter)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
swaggerDocs(app, port)