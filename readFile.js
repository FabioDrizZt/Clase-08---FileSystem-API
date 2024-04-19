const fs = require('node:fs')

// Leer archivos
fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if (err) throw err
  //Ponemos todos los datos en mayuscula
  const newData = data.toUpperCase()
  // Escribir los datos en mayuscula en el mismo archivo
  fs.writeFile('archivo.txt', newData, (err) => {
    if (err) throw err
    console.log('Archivo modificado')
  })
})
