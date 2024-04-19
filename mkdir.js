const fs = require('node:fs')

//Crea una carpeta o directorio
if (fs.existsSync('carpeta')) {
  console.log('Carpeta existente')
} else {
  fs.mkdir('carpeta', (err) => {
    if (err) throw new Error(err)
    console.log('carpeta creada.')
  })
}
