const express = require('express');
const routerAPI = require('./routes/index.js');

const cors = require('cors');

const whitelist = ['http://localhost:3000/', 'http://localhost:3001'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
const port = 3400;


app.use(cors(options));
app.use(express.json());

app.get('/', (req, res) =>
    res.send('Hello World!')
);

routerAPI(app);


app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
