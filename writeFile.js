const fs = require('node:fs')

fs.writeFile('archivo.txt', 'Hola mundo !', (err) => {
  if (err) throw new Error(err)
  console.log('Archivo creado')
})
