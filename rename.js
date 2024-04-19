const fs = require('node:fs')

const filePathOrigin = 'carpeta1'
const filePathDestiny = 'carpeta2'
//Leemos una carpeta o directorio
if (fs.existsSync(filePathOrigin)) {
  if (!fs.existsSync(filePathDestiny)) {
    fs.rename(filePathOrigin, 'carpeta2', (err, files) => {
      if (err) throw new Error(err)
      console.log('carpeta renombrada correctamente')
    })
  } else {
    console.log(`Carpeta destino ${filePathDestiny} ya existente`)
  }
} else {
  console.log(`Carpeta origen ${filePathOrigin} inexistente`)
}
