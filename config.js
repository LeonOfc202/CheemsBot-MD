//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['6287760550924','6283839980451'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['6287760550924'] //another owner number
global.premium = ['6287760550924'] //premium number
global.pengguna = 'LeonLord' //username
global.botnma = 'Cheems Bot-MD' //bot name
global.ownernma = 'Leon💎' //owner name
global.packname = 'Cheems Bot' //sticker package name
global.author = 'By LeonBotz' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'Fitur ini khusus admin!',
    botAdmin: 'Bot Harus jadi admin dulu!',
    owner: 'Fitur ini khusus Owner',
    group: 'Fitur ini khusus dalam group!',
    private: 'Fitur ini hanya bisa di gunakan di chat pribadi!',
    bot: 'This feature in only for the bot number',
    wait: '[ WAIT ] Sedang di proses...',
    endLimit: 'Limit Harian Kamu Habis,Limit akan di reset jam 12 malam ingin limit unlimited ketik .premium untuk membeli nan limit',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 10 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
