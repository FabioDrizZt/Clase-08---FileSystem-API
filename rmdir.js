const fs = require('node:fs')

fs.rmdir('carpeta3', (err) => {
  if (err) throw new Error(err)
  console.log('Directorio borrado.')
})
