const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const simple = require('./lib/simple.js')

const prem = JSON.parse(fs.readFileSync('./database/premium.json'))

//══════════[ Setting ]══════════//

dhakey = setting.dhakey
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
const fakeimage = fs.readFileSync ('./media/logo.jpg')
const thumb = fs.readFileSync ('./media/thumb.jpg')

//══════════[ WAKTU ]══════════//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'    
    
        const isPremium = prem.includes(sender)
		const isOwner = ownerNumber.includes(sender)

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'Proses kak',
eror: 'Maaf terjadi kesalahan !!',
success: 'Sukses️',
error: {
stick: 'Itu bukan sticker kak !!',
Iv: 'Link invalid !!'
},
only: {
prem: 'Fitur khusus member premium !!',
group: 'Fitur khusus grup !!',
owner: 'Fitur khusus owner !!',
admin: 'Fitur khusus admin !!',
Badmin: 'Silakan jadikan bot admin dulu !!'
}
}

const getPremiumExpired = (sender) => {

let position = null
Object.keys(prem).forEach((i) => {
if (prem[i].id === sender) {
position = i
}
})
if (position !== null) {
return prem[position].expired
}
} 
		
const expiredCheck = () => {
setInterval(() => {
let position = null
Object.keys(prem).forEach((i) => {
if (Date.now() >= prem[i].expired) {
position = i
}
})
if (position !== null) {
console.log(`Premium expired: ${prem[position].id}`)
prem.splice(position, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
}
}, 1000)
}
		
const getAllPremiumUser = () => {
const array = []
Object.keys(prem).forEach((i) => {
array.push(prem[i].id)
})
return array
}

//══════════[ Fake ]══════════//

const reply = (teks) => {
Dhani.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Dhani.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: fgi, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return Dhani.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/thumb.jpg')})}
const fakeitem = (teks) => { Dhani.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Dll ]══════════//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
     	
if (!isCmd && from.endsWith('@s.whatsapp.net')) {
Dhani.anonymous = Dhani.anonymous ? Dhani.anonymous : {}
let room = Object.values(Dhani.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(body)) return
if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
let other = [room.a,
room.b].find(user => user !== sender)
if (type === "conversation") {
Dhani.sendMessage(other, mek.message.conversation, text);
} else {
}
}
}
    
switch (command) {

//══════════[ FITUR FITURNYA UY ]══════════//

case 'menu':
case 'help':
menu = `Hi ${pushname} ${ucapanWaktu}

\`\`\`❏「 WAKTU INDONESIA 」\`\`\`
*TANGGAL* : ${tanggal}
*WIB* : ${time}
*WITA* : ${timeMak}
*WIT* : ${timeJay}


*「 DOWNLOADER MENU 」*
${prefix}tiktoknowm *link*

*「 ANONYMOUS MENU 」*
${prefix}start
${prefix}next
${prefix}stop

*「 OWNER MENU 」*
${prefix}bc *teks*
${prefix}addprem *628xx*
${prefix}dellprem *628xx*
${prefix}listprem`
fakeitem(menu)
break

case 'bc': 
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('textnya mana')
anu = await Dhani.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, image, {caption: `[ *${botname} BROADCAST* ]\n\n${body.slice(4)}`})
}
reply(_.jid)
reply('Sukses Broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *${botname} BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Sukses broadcast')
}			
break
case 'addprem':  
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
adprem = `${args[0].replace('@','')}@s.whatsapp.net`
prem.push(adprem)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
Dhani.sendMessage(from, 'Sukses menambahkan user premium', text, {quoted: mek})
break
case 'dellprem':
case 'delprem':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
delp = body.slice(10)
prem.splice(`${delp}@s.whatsapp.net`, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
Dhani.sendMessage(from, `Sukses menghapus user premium https://wa.me/${delp}`, text, {quoted: mek})
break
case 'listprem':
case 'premlist':
teks = '*List Premium:*\n\n'
for (let DhaniGans of prem) {
teks += `- ${DhaniGans}\n`
}
teks += `\n*Total : ${prem.length}*`
Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
break

case 'next': case 'leave': case "stop": {
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.only.prem)
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
Dhani.anonymous = Dhani.anonymous ? Dhani.anonymous : {}
let room = Object.values(Dhani.anonymous).find(room => room.check(sender))
if (!room) {
await Dhani.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${Dhani.user.name}`, 'Cari Partner', prefix + 'start')
return false
}
reply('_You stopped matchmaking_')
let other = room.other(sender)
if (other) await Dhani.sendButton(other, '_Partner meninggalkan chat_', `${Dhani.user.name}`, 'Cari Partner', prefix + 'start')
delete Dhani.anonymous[room.id]
if (command === 'leave' || command === "stop") break
}

case 'mulai': case 'start': case "anonymous": case "mutual": {
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.only.prem)
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
Dhani.anonymous = Dhani.anonymous ? Dhani.anonymous : {}
if (Object.values(Dhani.anonymous).find(room => room.check(sender))) {
await Dhani.sendButton(from, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', `${Dhani.user.name}`, 'Keluar', `${prefix}leave`)
return false
}
let room = Object.values(Dhani.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
if (room) {
await Dhani.sendButton(room.a, '_Partner was found_', `${Dhani.user.name}`, 'Next', prefix + 'next')
room.b = sender
room.state = 'CHATTING'
await Dhani.sendButton(room.b, '_Partner was found_', `${Dhani.user.name}`, 'Next', prefix + 'next')
} else {
let id = + new Date
Dhani.anonymous[id] = {
id,
a: sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a,
this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await Dhani.sendButton(from, 'ᴡᴀɪᴛɪɴɢ ᴀ ᴘᴀʀᴛɴᴇʀ', `𝙳𝙴𝙵𝙵𝙱𝙾𝚃𝚉`, 'Keluar', prefix + 'leave')
}
break
}

case 'tiktoknowm':
case 'tiktok':
case 'ttnowm':
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(mess.only.prem)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tt1 = await getBuffer(anu.result.nowatermark)
Dhani.sendMessage(from, tt1, video, {quoted: mek, caption : 'Done bro'})
break

default:
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
