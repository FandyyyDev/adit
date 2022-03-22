const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const Dhani = new WAConnection()
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')

require('./Dhani.js')
nocache('./Dhani.js', module => console.log(`${module} telah di update !!`))

const starts = async (Dhani = new WAConnection()) => {
    Dhani.logger.level = 'warn'
    Dhani.version = [2, 2142, 12]
    console.log(banner.string)
    Dhani.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Qrnya Kak Waktu Cuma 20 Detik !!'))
    })

    fs.existsSync('./session.json') && Dhani.loadAuthInfo('./session.json')
    Dhani.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    Dhani.on('open', () => {
        success('2', 'Done Sudah Terhubung')
    })
    await Dhani.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Dhani.base64EncodedAuthInfo(), null, '\t'))

    Dhani.on('chat-update', async (message) => {
        require('./Dhani.js')(Dhani, message)
    })


function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Sekarang Sedang Di Awasi Oleh DhaniGans !!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
