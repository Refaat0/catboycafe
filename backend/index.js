/**
 * 
 */
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "../frontend/public")))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname , '../frontend/index.html'))
});

app.get('/software', (request, response) => {
    response.sendFile(path.join(__dirname , '../frontend/software.html'))
});

app.get('/hardware', (request, response) => {
    response.sendFile(path.join(__dirname , '../frontend/hardware.html'))
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
