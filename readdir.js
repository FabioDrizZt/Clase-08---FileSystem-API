const fs = require('node:fs')

const filePath = '../'
//Leemos una carpeta o directorio
if (fs.existsSync(filePath)) {
  fs.readdir(filePath, (err, files) => {
    if (err) throw new Error(err)
    console.log('carpeta leida, contenido:')
    console.table(files)
  })
} else {
  console.log('Carpeta inexistente')
}
