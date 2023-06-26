const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.all('/', (req, res) => {
    res.send('App is live now')
})
app.listen(process.env.PORT || 3000)
