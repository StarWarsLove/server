const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Tu es a la racine')
})

app.listen(3248, () => console.log('J\'écoute sur le port 3248'))