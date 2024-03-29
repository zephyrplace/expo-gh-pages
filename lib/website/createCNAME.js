import path from 'path'
import fs from 'fs'

export default function createCNAME () {
  const packageJson = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'UTF-8'))
  let { homepage } = packageJson
  if (homepage.charAt(homepage.length - 1) === '/') {
    homepage = homepage.slice(0, -1)
  }
  if (homepage.indexOf('//') !== -1) {
    homepage = homepage.split('//')[1]
  }

  fs.writeFileSync('./dist/CNAME', homepage)
}

