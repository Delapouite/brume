const request = require('request')

const URL = 'http://www.radiobrume.fr/data.php'

module.exports = function getInfo() {
  return new Promise((resolve, reject) => {
    request(URL, (err, res, html) => {
      if (err) reject(err)

      const regexp = /<td.*?>(.*?)<\/td>/g
      let arr
      while ((arr = regexp.exec(html)) !== null) {
        if (!arr[1] || arr[1].includes('On air')) continue
        console.log(arr[1])
      }
    })
  })
}
