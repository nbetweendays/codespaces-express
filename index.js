const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to TheVi page.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
