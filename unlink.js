const fs = require('node:fs')

fs.unlink('archivo2.txt', (err) => {
  if (err) throw new Error(err)
  console.log('Archivo borrado.')
})
