const URL = "http://www.radiobrume.fr/data.php"

module.exports = async function getInfo() {
  const response = await fetch(URL)
  const html = await response.text()

  const regexp = /<td.*?>(.*?)<\/td>/g
  let arr
  while ((arr = regexp.exec(html)) !== null) {
    if (!arr[1] || arr[1].includes("On air")) continue
    console.log(arr[1])
  }
  return html
}
