const fs = require('node:fs')
const path = require('node:path')

const directorio = 'carpeta2'
if (fs.existsSync(directorio)) {
  fs.readdirSync(directorio).forEach((file) => {
    fs.unlinkSync(path.join(directorio, file))
  })

  fs.rmdir(directorio, (err) => {
    if (err) throw new Error(err)
    console.log('Directorio borrado.')
  })
}
