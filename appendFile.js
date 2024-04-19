const fs = require('node:fs')

// Agregamos un texto al archivo ya existente
fs.appendFile('archivo2.txt', '\nAquí vengo yo !', (err) => {
  if (err) throw new Error(err)
  console.log('Texto agregado correctamente')
})
