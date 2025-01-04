import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
// Set the 'public' folder as static
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    res.sendFile('/index.html');
});

app.use(express.static('./public'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

