const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["243995499574@s.whatsapp.net"]
global.nomerOwner = "243995499574"
global.nomorOwner = ['243995499574']
global.namaDeveloper = "𝐊𝐞𝐫𝐦" //jangn diubh bng
global.namaOwner = "𝐂𝐚𝐩𝐩𝐮𝐜𝐜𝐢𝐧𝐨"
global.namaBot = "𝐊𝐞𝐫𝐦 𝐁𝐮𝐠 𝐕𝟔"
global.versionBot = "𝟏𝟐.𝟎.𝟎"
global.packname = "𝐊𝐞𝐫𝐦 𝐁𝐮𝐠 𝐕𝟔"
global.author = "𝐊𝐞𝐫𝐦"
global.thumb = fs.readFileSync("./AndraZyy.png")
global.ThM = 'https://j.top4top.io/p_32794kvhw1.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
