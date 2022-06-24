const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '7ee0f90790cd42bab52ad6892c8c6d88',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


// app.use(express.static(path.join(__dirname, "../public")));


app.get('/', (req, res) => {
    
    rollbar.info("This is superrrrrr broken");
    res.sendFile(path.join(__dirname, '/index.html'));
})


const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`running on ${port}`);
});