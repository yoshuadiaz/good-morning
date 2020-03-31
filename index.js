const fs = require('fs')
const oneSecond = 1000
const oneMinute = oneSecond * 60
let minutes = 0

const filesAndContents = (id, date) => [
  {
    text: `${date} Buenos días!`,
    fileName: "spanish.txt"
  },
  {
    text: `${date} Good morning!`,
    fileName: "english.txt"
  },
  {
    text: `${date} Guten morguen!`,
    fileName: "german.txt"
  },
  {
    text: `${date} Buongiorno!`,
    fileName: "italian.txt"
  },
  {
    text: `${date} Bonjour!`,
    fileName: "french.txt"
  }
][id] || { fileName: 'error.txt', text: 'Error'}

const interval = setInterval(() => {
  if (minutes === 5) {
    return clearInterval(interval)
  }
  const now = new Date()

  const { fileName, text } = filesAndContents(minutes, now.toISOString())

  fs.writeFile(
    `${minutes < 10 ? '0' : '' }${minutes + 1}_${fileName}`,
    text, err => {
      if(err) throw err;
      console.log(`${fileName} saved!`);
    }
  )
  minutes++
}, oneMinute)
