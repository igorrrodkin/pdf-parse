import express from 'express'
import { parsePdf } from './parsePdf';

const port = 5002




const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.get('/parsepdf', parsePdf)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})