/**
 * Very Thanks To Dika Ardnt.
 * Amirul
 * Contact Me on wa.me/6285849261085
 * Original https://github.com/DikaArdnt
 * Remake : Pebri
 */
 
require('@fnc')
require('module-alias/register')
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    proto,
    delay,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')

const fs = require('fs')
const util = require('util')
const path = require('path')
const yts = require("yt-search");
const dl = require('@bochilteam/scraper');
const JoApi = require('@phaticusthiccy/open-apis')
const axios = require('axios')
const gugel = require('googlethis')
const fakeyou = require('fakeyou.js')
const cheerio = require('cheerio')
const rmvbg = require('removebg-wrapper')
const translate = require('@vitalets/google-translate-api')
const ms = require("ms")
const moment = require("moment-timezone");
const { config, createAudioFromText } = require('tiktok-tts')
const { color } = require('./lib/color.js')
const { pinterest, stickersearch } = require("./lib/scraper/nyekrep")
const { vitsUmamusumeVoiceSynthesizer } = require("./lib/scraper/ttswibu")
const { Download } = require("./lib/scraper/download")
const { webp2mp4File } = require("./lib/cv.js")
const { isTicTacToe, getPosTic } = require("./lib/tictactoe.js");
const { upload } = require("./lib/uploads.js")
const { TiktokDownloader } = require("./lib/scraper/tiktokdl.js")
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game.js");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance } = require("./lib/limit.js");
const { addPrem, deletePrem, checkPrem} = require("./lib/prem2.js");
const { twitter } = require("./lib/scraper/twitter.js")
const { exec, spawn, execSync } = require("child_process")
const tictac = require("./lib/tictac");
const _prem = require("./lib/premium");
const Replicate = require('replicate')
  const replicate = new Replicate({
  auth: "r8_NozrwpBAmY1wYWpyprlEqVMOimHJfiG4F5ZNQ", //Api Gueh
});


// Game
let tictactoe = [];
let tebakgambar = []
let tebakkata = []
let siapakahaku = []
let caklontong = []
let tod = []
let tebaklagu = []

//ssession tt
const tiktokresi = "2a78c6d3b550e355dc01cb366b146ab4" //Api Punya Gua anjing



const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
	apiKey: `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`,
});
const openai = new OpenAIApi(configuration);

const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, otpkode, makeid, getRandom, getGroupAdmins } = require('./lib/function')
const { P } = require('pino')


/// DATABASE
let daftar = JSON.parse(fs.readFileSync('./assets/db/daftar.json'));
let antilink = JSON.parse(fs.readFileSync('./assets/db/antilink.json'));
let truth = JSON.parse(fs.readFileSync('./assets/db/truth.json'));
let dare = JSON.parse(fs.readFileSync('./assets/db/dare.json'));
let premium = JSON.parse(fs.readFileSync('./assets/db/premium.json'));
let prem2 = JSON.parse(fs.readFileSync('./assets/db/prem2.json'));
let chatbot = JSON.parse(fs.readFileSync('./assets/db/chatbot.json'));
let limit = JSON.parse(fs.readFileSync('./assets/db/limit.json'));
let balance = JSON.parse(fs.readFileSync('./assets/db/balance.json'));
let glimit = JSON.parse(fs.readFileSync('./assets/db/glimit.json'));


module.exports = bob = async (bob, m, chatUpdate, store, welcome, mentioned) => {
    try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const content = JSON.stringify(m.message)
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%/^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶/∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "/" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const CmD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bob.decodeJid(bob.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        const isMedia = /image|video|sticker|audio/.test(mime)

        const chats = m.type === "conversation" && m.message.conversation ? m.message.conversation : m.type === "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : m.type === "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : m.type === "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : m.type === "buttonsResponseMessage" && quotedMsg.fromMe && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : 
        m.type === "templateButtonReplyMessage" && quotedMsg.fromMe && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.type === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId : m.type === "listResponseMessage" && quotedMsg.fromMe && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : "";
        const mentionByTag = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []


        // Group
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await bob.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = groupAdmins.includes(m.sender)
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isPremium = isCreator ? true : _prem.checkPremiumUser(sender, premium)
        const DaftarAnjay = daftar.includes(m.sender)
        const isWelcome = m.isGroup ? welcome.includes(m.chat) ? true : false : false
        const isChatBot = chatbot.includes(m.chat) ? true : false




        //Extensi Media Message
        const isImage = (m.mtype == 'imageMessage')
		const isVideo = (m.mtype == 'videoMessage')
		const isSticker = (m.mtype == 'stickerMessage')
		const isAudio = (m.mtype == 'audioMessage')
		const isDocument = (m.mtype == 'documentMessage')
		const isQuotedMsg = (m.mtype == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
    


        // Public & Self
        if (!bob.public) {
            if (!m.key.fromMe) return
        } else { 
            if (budy.startsWith('Arasya')){
        bob.sendMessage(m.chat, {audio: fs.readFileSync(`me.mp3`), mimetype: 'audio/mp4', ptt: true})
    }
}

    //** cmd
        const CmDPlugins = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null

        //** plugins
        for (let name in plugins) {
            let plugin = plugins[name]
            if (plugin.CmD && plugin.CmD.includes(CmDPlugins)) {
                let turn = plugin.CmD instanceof Array ?
                    plugin.CmD.includes(CmDPlugins) :
                    plugin.CmD instanceof String ?
                    plugin.CmD == CmDPlugins :
                    false
                if (!turn) continue 
                try {
                await plugin.exec(m, bob, quoted, pushname, {
                    args,
                    CmD,
                    text,
                    prefix,
                    command
                })
                } catch (e) {
                   m.reply(util.format(`*(⁠☉⁠｡⁠☉⁠)!* Upss... error pada plugins *_${plugin.CmD}_*\n\n${e}`))
                }
                console.log('pesan melalui plugins sistem')
            }
        }

        		// Premium
		_prem.expiredCheck(bob, premium)


        // function
        async function instagram(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
          
        // Anti link
        if (m.isGroup && !isCreator && isAntiLink && !isGroupAdmins && isBotGroupAdmins){
            if (body.includes(`https://chat.whatsapp.com`)) {
                bob.sendMessage(m.chat, {text: `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`})
                var number = m.sender
      bob.groupParticipantsUpdate(m.chat, [number], "remove")
            }
        }
        const reply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: m})
		}
        const fakereply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: fake})
		}
        const sendbut = (jid, text, pref, textbut, footer) => {
			let buttons = [{ buttonId: pref, buttonText: { displayText: textbut }, type: 1 }]
            let buttonMessage = {text: text, footer: footer, buttons: buttons, headerType: 2 }
            bob.sendMessage(jid, buttonMessage, { quoted: m })
        }
        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function ngetag(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = bob.sendMessage(m.chat, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = bob.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
		      return res
 		    }
		}
        function monospace(string) {
            return '```' + string + '```'
            }
        const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return bob.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}

        async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
        
        const jimp_1 = require('jimp')
        async function pepe(media) {
        const jimp = await jimp_1.read(media)
        const min = jimp.getWidth()
        const max = jimp.getHeight()
        const cropped = jimp.crop(0, 0, min, max)
        return {
            img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
            preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
        }
    }
    
//fake

const fake2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast" //status@broadcast
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": `Hallo ${pushname}`,
            "title": `Hmm`,
            'jpegThumbnail': global.thumb
        }
    }
}

const fake = {
    key: { 
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "41798898139-1429460331@g.us" } : {}) 
    },
    message: { 
    "extendedTextMessage": {
    "text": `Hallo _*${pushname} 👋*_`,
    "title": `Hmm`,
    'jpegThumbnail': fs.readFileSync('media/logo.png')
    }
    } 
    }

    let yutu = `https://youtu${m.text.slice(13)}`

    if (m.text.includes(yutu)) {
        if (isLimit(m.sender, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                        limitAdd(sender, limit)
    var url = yutu
    var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
    var dl_url = await yt.audio['128kbps'].download()
    bob.sendMessage(m.chat, {audio: {url: dl_url}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
    }

    // GAME 
    cekWaktuGame(bob, tebakgambar)
    if (isPlayGame(m.chat, tebakgambar) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakgambar)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakgambar)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakgambar`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebakgambar.splice(getGamePosi(m.chat, tebakgambar), 1)
    giveLimit(sender, parseInt(`2`), limit)
}
}
cekWaktuGame(bob, tebakkata)
if (isPlayGame(m.chat, tebakkata) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakkata)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakkata)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakkata`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
        tebakkata.splice(getGamePosi(m.chat, tebakkata), 1)
        giveLimit(sender, parseInt(`2`), limit)
    }
}
cekWaktuGame(bob, siapakahaku)
if (isPlayGame(m.chat, siapakahaku) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, siapakahaku)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, siapakahaku)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /siapakahaku`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
        siapakahaku.splice(getGamePosi(m.chat, siapakahaku), 1)
        giveLimit(sender, parseInt(`2`), limit)
    }
}
cekWaktuGame(bob, caklontong)
if (isPlayGame(m.chat, caklontong) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, caklontong)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, caklontong)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /caklontong`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    caklontong.splice(getGamePosi(m.chat, caklontong), 1)
    giveLimit(sender, parseInt(`2`), limit)
}
}
cekWaktuGame(bob, tebaklagu)
if (isPlayGame(m.chat, tebaklagu) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebaklagu)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebaklagu)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebaklagu`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
        tebaklagu.splice(getGamePosi(m.chat, tebaklagu), 1)
        giveLimit(sender, parseInt(`2`), limit)
        }
    }
    //Akhir
    
    // Premium
    _prem.expiredCheck(bob, premium)
async function loading() {
    const { key } = await bob.sendMessage(m.chat, {text: '「▱▱▱▱▱▱▱▱▱▱」Loading...'}, { quoted: m });
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▱▱▱▱▱▱▱▱」20%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▱▱▱▱▱▱」40%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▱▱▱▱」60%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▱▱」80%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」100%', edit: key})
        bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」Success✓', edit: key})
      }
async function meriset2() {
    const { key } = await bob.sendMessage(m.chat, {text: '「▱▱▱▱▱▱▱▱▱▱」Loading...'}, { quoted: m });
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▱▱▱▱▱▱▱▱」20%', edit: key})
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▱▱▱▱▱▱」40%', edit: key})
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▱▱▱▱」60%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▱▱」80%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」100%', edit: key})
        bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」Success Mereset✓\Merestart Bot....', edit: key})
      }
async function loading2() {
    const { key } = await bob.sendMessage(m.chat, {text: 'Mencari 🔍. 0%'}, { quoted: m });
         await delay(1000);
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 10%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 40%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 60%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 80%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 100%', edit: key})
        bob.sendMessage(m.chat, { text: 'Mencari 🔍.\nKetemu!', edit: key})
      }
async function meriset() {
    const { key } = await bob.sendMessage(m.chat, {text: 'Mereset Poin.... = 0%'}, { quoted: m });
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 5%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 10%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 15%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 20%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 25%', edit: key})
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 30%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 35%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 40%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 45%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 50%', edit: key})
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 55%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 60%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 65%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 70%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 75%', edit: key})
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 80%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 85%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 90%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 95%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 100%', edit: key})
        bob.sendMessage(m.chat, { text: 'Mereset Poin.... = SUKSES!', edit: key})
        
      }

function randomNomor(min, max = null) {
    if (max !== null) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
    return Math.floor(Math.random() * min) + 1
    }
    }


    //prompt chatgpt
const promptgpt = `Nama kamu adalah Edith, kamu adalah asisten pribadi Arasya, dan arasya adalah satu satunya orang yang bisa mengakses kamu, Tanggal sekarang adalah ${tgl}, jam sekarang adalah : ${jam}, Sekolah Arasya di SMK Muhammadiyah 3 Tangsel, Nomor Absen Arasya : 5, Arasya duduk di kelas 12 SMK, Hobby : Photograph, dilarang ucapkan kalimat membantu`
        
         if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))

var LimitKu = `${getLimit(m.sender, limitCount, limit)}/${limitCount}`
const menuku = 
monospace(`Hallo ${pushname}

Tanggal : ${tgl}
Jam : ${jam}`) + `


╔══ 『 SELF Menu 』
║- ${prefix}tourl <Reply Image>
║- ${prefix}sticker <Reply Image>  🎨
║- ${prefix}stcmeme <Text Top|Text Bottom>
║- ${prefix}stcmeme2 <Text>
║- ${prefix}memegen <Reply Image>
║- ${prefix}toimg <Reply Sticker>
║- ${prefix}ssweb <Link>
║- ${prefix}tstik <Text>
║- ${prefix}removebg <Reply Image>
║- ${prefix}qc <Text>
║- ${prefix}tohd <Reply Image>
║- ${prefix}take <PackName|Author>
║- ${prefix}tts <Text>
║- ${prefix}chatbot < on/off >
║- ${prefix}ytmp4 <Youtube Link>
║- ${prefix}ai < Text >
║- ${prefix}translate < Reply Message >
║- ${prefix}setexif <PackName|Author>
║- ${prefix}setppgc <Reply Image>
║- ${prefix}public
║- ${prefix}self
║- ${prefix}leave
║- ${prefix}hidetag <Text>
║- ${prefix}tagall <Message>
║- ${prefix}kick <Reply Message>
║- ${prefix}add <Reply Message>
║- ${prefix}setname <Text>
║- ${prefix}setdesc <Text>
║- ${prefix}open  🔓
║- ${prefix}igstory <Username>
║- ${prefix}locked  🔒
║- ${prefix}unlocked  🔓
║- ${prefix}close  🔒
║- ${prefix}igstory <Username>
║- ${prefix}totag <Reply Image/Text/Video/Sticker/Audio>
║- ${prefix}promote <Reply Message>
║- ${prefix}igdl <Instagram Link>
║- ${prefix}demote <Reply Message>
║- ${prefix}ytmp3 <Youtube Link>
║- ${prefix}play <Song Title>
║- ${prefix}tiktok <TikTok Link>
║- ${prefix}setpp <Reply Image>
║- ${prefix}jo
╚════╝
`
        switch (command) {
            case 'vn':{
                if (isQuotedMsg) {
                    
                    vitsUmamusumeVoiceSynthesizer(quoted.text, `草上飞 Grass Wonder (Umamusume Pretty Derby)`).then ( data => {
                        bob.sendMessage(m.chat, {audio: {url: data.url}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
                    })
                } else if (q) {
                    vitsUmamusumeVoiceSynthesizer(q, `草上飞 Grass Wonder (Umamusume Pretty Derby)`).then ( data => {
                        bob.sendMessage(m.chat, {audio: {url: data.url}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
                    })
                } else {
                    console.log(`Masukan Text Setelah Perintah!\nExample : ${CmD} 皆さんこんにちは、私の名前はアラシャ・ラフィです`)
                }
            
            }
            break
            case 'tt': case 'tiktok':  {
                if (!q) return reply(`Masukan Text\nExample ${prefix}tiktok https://vm.tiktok.com/ZS8CoY9UX/`)
                if (!q.includes('tiktok')) return reply(global.mess.linkinv)
                reply(global.mess.wait)
                Download(q).then ( data => {
                    bob.sendMessage(m.chat, {video: {url: data.mp4[1].url}}, {quoted: m})
                })
            }
            break
            case 'setppgc': case 'setppgrup':{
                
                if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let mediaa = await quoted.download()
                var { img } = await pepe(mediaa)
                await bob.query({
                tag: 'iq',
                attrs: {
                to: m.chat,
                type:'set',
                xmlns: 'w:profile:picture'
                },
                content: [
                {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
                }
                ]
                })
                reply(`Done`)
                }
                break
            case 'setpp': case 'setppbot':{
                if (!isCreator) return reply(global.mess.owner)
                if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let mediaa = await quoted.download()
                var { img } = await pepe(mediaa)
                await bob.query({
                tag: 'iq',
                attrs: {
                to: botNumber,
                type:'set',
                xmlns: 'w:profile:picture'
                },
                content: [
                {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
                }
                ]
                })
                reply(`Done`)
                }
                break
            case 'igdl': case 'instagram': case 'ig':
                        if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
                    if (!q)return reply(`Berikan Link\nExample : ${CmD} link`)
                    if (!isUrl(q)) return reply(`Link Ga Sesuai`)
                    if (!q.includes('instagram.com')) return reply(`Link Ga Sesuai`)
                    reply(global.mess.wait)
                    instagram(q).then( data => {
                    for ( let i of data ) {
                    if (i.type === "video") {
                    bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
                    } else if (i.type === "image") {
                    bob.sendMessage(m.chat, { caption: `Sukses, Follow Instagram : @arsrfii`, image: { url: i.url }}, {quoted: m})
                    }
                    }
                    }).catch(() => reply(`ERORR. Postingan tidak Tersedia`))
			    break
            case 'igstory': case 'igs':
        if (!q)return reply(`Berikan Username nya\nExample : ${CmD} arsrfii`)
        reply(`Scanning Username ${q}`)
        var storis = `https://instagram.com/stories/` + q
        instagram(storis.replace('@', '')).then( data => {
        for ( let i of data ) {
        if (i.type === "video") {
        bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
        } else if (i.type === "image") {
        bob.sendMessage(m.chat, { image: { url: i.url }}, {quoted: m})
        }
        }
        }).catch(() => reply(`Story Eror!, Mungkin karena di private atau username tidak ada dan mungkin bisa saja dia tidak buat story`))
    break
            case 'hidetag': {
                
                if (!q) return reply(`Masukan Text\nExample : ${prefix}hidetag Hallo`)
                if (!m.isGroup) return reply(global.mess.group)
                
                let mem = [];
        participants.map( i => mem.push(i.id) )
        bob.sendMessage(m.chat, { text: q ? q : '', mentions: mem }, {quoted: m})
            }
            break
            case 'totag': case 'tagbot': {
                if (!isQuotedAudio && !isQuotedImage && !isQuotedSticker && !isQuotedVideo && q) return reply(`Silahkan Reply Audio/Image/Sticker/Video/Text Dengan Text : ${CmD}`)
                if (!m.isGroup) return reply(global.mess.group)
                
                if (isQuotedSticker) {

                    if (/image/.test(mime)) {
                        let mem = [];
                        participants.map( i => mem.push(i.id) )
                        let media = await bob.downloadMediaMessage(qmsg)
                        let encmedia = await bob.sendImageAsSticker(m.chat, media, m, {packname: `Tag Hide Dari Grup`, author: groupMetadata.subject, mentions: mem })
                        await fs.unlinkSync(encmedia)
                    } else if (/video/.test(mime)) {
                        reply(global.mess.wait)
                        let mem = [];
                        participants.map( i => mem.push(i.id) )
                        let media = await bob.downloadMediaMessage(qmsg)
                            let encmedia = await bob.sendVideoAsSticker({packname: `Tag Hide Dari Grup`, author: groupMetadata.subject, mentions: mem })
                            await fs.unlinkSync(encmedia)
                        }
                
            } else if (isQuotedImage ) {
                let mem = [];
                participants.map( i => mem.push(i.id) )
                var kodeid = otpkode(5)
                var mediaku = await downloadAndSaveMediaMessage("image", `${kodeid}` + `.jpg`)
                bob.sendMessage(m.chat, {caption: quoted.caption, image: fs.readFileSync(kodeid + `.jpg`), mentions: mem})
                setTimeout( () => {
                    fs.unlinkSync(kodeid + `.jpg`)
                    }, 5000) // 1000 = 1s,
                } else if (isQuotedVideo ) {
                    let mem = [];
                    participants.map( i => mem.push(i.id) )
                    var kodeid = otpkode(5)
                    var mediaku = await downloadAndSaveMediaMessage("video", `${kodeid}` + `.mp4`)
                    bob.sendMessage(m.chat, {caption: quoted.caption, video: fs.readFileSync(kodeid + `.mp4`), mentions: mem})
                    setTimeout( () => {
                        fs.unlinkSync(kodeid + `.mp4`)
                        }, 5000) // 1000 = 1s,
                    } else if (isQuotedAudio) {
                let mem = [];
                participants.map( i => mem.push(i.id) )
                var kodeid = otpkode(5)
                var mediaku = await downloadAndSaveMediaMessage("audio", `${kodeid}` + `.mp3`)
                bob.sendMessage(m.chat, {audio: fs.readFileSync(kodeid + `.mp3`), mimetype: `audio/mp4`, ptt: true, mentions: mem})
                setTimeout( () => {
                fs.unlinkSync(kodeid + `.mp3`)
                }, 5000) // 1000 = 1s,
                } else {
                let mem = [];
                participants.map( i => mem.push(i.id) )
                bob.sendMessage(m.chat, {text: quoted.text, mentions: mem})
                }
                
        }
            break
             case 'tagall': {
                if (!m.isGroup) return reply(global.mess.group)
                
                var mems = []
                var teks = `╔══ *TAG MEMBER*\n╠ Pesan : ${q !== undefined ? q : `Pesan Tidak Ada`}\n║\n`
                for (let i of participants) {
                    teks += `╠ ≻ @${i.id.split("@")[0]}\n`
                    mems.push(i.id)
                }
                bob.sendMessage(m.chat, { text: teks, mentions: mems}, { quoted: m })
             }
             break
             case 'promote': case 'admin': case 'pm': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                if (!quoted) return reply('Reply Pesan')
                 if (quoted) {
                number = quoted.sender
                bob.groupParticipantsUpdate(m.chat, [number], "promote")
                .then( res => bob.sendMessage(m.chat, {text: `Sukses Admin Baru : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                .catch( err => bob.sendMessage(m.chat, {text: `Sukses Admin Baru : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                } else {
                reply(`balas pesan member yang ingin dijadikan admin grup`)
                }
             }
             break
             case 'play':{
                if (!q) return reply(`Masukan Text Setelah Perintah!\n\n*Example For Voice Not* : ${CmD} Jakarta Hari Ini - For revenge --vn\n*Example For Document :* ${CmD} Jakarta Hari Ini - For revenge -doc\n*Example For Video :* ${CmD} Jakarta Hari Ini - For revenge --video`)
                reply(mess.wait)
                var cariyutup = await yts(q)
                var url = cariyutup.all[0].url
                var judul = cariyutup.all[0].title
                var thumbnailnya = cariyutup.all[0].image
                var desc = cariyutup.all[0].description
                var teksyutup = `*[ DOWNLOAD YOUTUBE PLAY ]*\n\n 📛 Judul : ${judul}\n🔗 Link : ${url}\n📃 Deskripsi : ${desc}\n\nSedang Mengirim...`
                bob.sendMessage(m.chat, {image: {url: thumbnailnya}, caption: teksyutup}, {quoted: m})
                const streamPipeline = promisify(pipeline);
                const audioStream = ytdl(url, {
                    filter: 'audioonly',
                    quality: 'highestaudio',
                  });
                  const sampah = os.tmpdir();
                  const writableStream = fs.createWriteStream(`${sampah}/${title}.mp3`);
                
                  await streamPipeline(audioStream, writableStream);
                  bob.sendMessage(m.chat, {audio: {url: `${sampah}/${title}.mp3`}, fileName: title, mimetype: 'audio/mp4'}, {quoted: m})
                }
                break
                case 'yts': case 'ytsearch': {  
                if (!q) return reply(`Masukan Text\nExample ${prefix}yts Jakarta Hari Ini - For Revenge`)
                var teskd = `YOUTUBE SEARCH\n\n`
                yts(q).then( data => {
                    let yt = data.all
                    var jumlah = 15
                    if (yt.length < jumlah) jumlah = yt.length
                    var no = 0
                    let txt = `*YOUTUBE SEARCH*\n\n*Data berhasil didapatkan*\n*Hasil pencarian dari : ${q}*`
                    for (let i = 0; i < jumlah; i++) {
                    no += 1
                    txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
                    }
                    bob.sendMessage(m.chat, { image: { url: yt[0].image }, caption: txt }, { quoted: m })
                    })
                }
                break
             case 'demote': case 'unadmin': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                if (!quoted) return reply('Reply Pesan')
                 if (quoted) {
                number = quoted.sender
                bob.groupParticipantsUpdate(m.chat, [number], "demote")
                .then( res => bob.sendMessage(m.chat, {text: `Sukses Menyingkirkan Admin : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                .catch( err => bob.sendMessage(m.chat, {text: `Sukses Menyingkirkan Admin : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                } else {
                reply(`balas pesan member yang ingin dijadikan admin grup`)
                }
             }
             break
             case 'closegc': case 'close': case 'tutup': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                bob.groupSettingUpdate(m.chat, 'announcement')
                reply('Sukses Menutup Grup')
             }
             break
             case 'opengc': case 'open': case 'buka': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                bob.groupSettingUpdate(m.chat, 'not_announcement')
                reply('Sukses Membuka Grup')
             }
             break
             case 'lock': case 'locked': case 'kunci': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                bob.groupSettingUpdate(m.chat, 'locked')
                reply('Sukses Mengunci Edit Setting')
             }
             break
             case 'unlock': case 'unlocked': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                bob.groupSettingUpdate(m.chat, 'unlocked')
                reply('Sukses Membuka Edit Setting')
             }
             break
             case 'setname': case 'setnamegc': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                if (!q) return reply(`Masukan Text Nama Group!\n${prefix}setname Dia kekasih mu yang Baru`)
                bob.groupUpdateSubject(m.chat, q)
                reply(`Nama Grup DiGanti :\n${q}`)
             }
             break
             case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return reply(global.mess.group)
                
                
                if (!q) return reply(`Masukan Text Deskripsi Group!\n${prefix}setdesc Dia kekasih mu yang Baru`)
                bob.groupUpdateDescription(m.chat, q)
                reply(`Deskripsi DiGanti :\n${q}`)
             }
             break
            case 'public': {
                if (!isCreator) throw mess.owner
                bob.public = true
                reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                bob.public = false
                reply('Sukses Change To Self Usage')
            }
            break
            case 'setexif': case 'exif': {
                if (!q) return reply(`Masukan Text!\nExample : ${CmD} StickerKu|Sticker Bersama`)
                if (!isCreator) return reply(mess.owner)
                var packname = q.split("|")[0]
                var author = q.split("|")[1]
                if (!packname) return reply(`Masukan Text Packname!`)
                if (!author) return reply(`Masukan Text Author!`)
                global.packname = packname
                global.author = author
                reply(`Sukses Mengganti!\nPackname : *${packname}*\nAuthor : *${author}*`)
                }
                break
            case 'ytmp4': case 'ytv': {
                try {
                    if (!q) return reply(`Masukan Text\nExample ${prefix}ytv https://youtu.be/GDND88fqt1o`)
                    if (!q.includes('youtu.be') && !q.includes('youtube.com')) return reply(global.mess.linkinv)
                    reply(global.mess.wait)
                    var url = q
                    var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                    var dl_url = await yt.video['720p'].download()
                    setTimeout( () => {
                        bob.sendMessage(m.chat, {video: {url: dl_url}, caption: `*${yt.title}*\nResolusi : 720p`})
                    }, 3000)
                } catch (e) {
                    if (!q) return reply(`Masukan Text\nExample ${prefix}ytv https://youtu.be/GDND88fqt1o`)
                    if (!q.includes('youtu.be') && !q.includes('youtube.com')) return reply(global.mess.linkinv)
                    reply(global.mess.wait)
                    var url = q
                    var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                    var dl_url = await yt.video['360p'].download()
                    setTimeout( () => {
                        bob.sendMessage(m.chat, {video: {url: dl_url}, caption: `*${yt.title}*\nResolusi : 360p`})
                    }, 3000)
                }
            }
            break
            case 'ytmp3': case 'yta': case'ytaudio': {
                if (!q) return reply(`Masukan Text\nExample ${CmD} https://youtu.be/GDND88fqt1o`)
                if (!q.includes('yout')) return reply(global.mess.linkinv)
                reply(global.mess.wait)
                var url = q
                var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                var dl_url = await yt.audio['128kbps'].download()
                bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE MP3 ]*\n\nTitle : ${yt.title}\nSize : 128kbps\n_Audio Sedang Dikirim..._`}, {quoted: m})
                bob.sendMessage(m.chat, {document: {url: dl_url}, fileName: yt.title + `.mp3`, mimetype: 'audio/mp4', caption: `*${yt.title}*\nhttps://my.arsrfii.repl.co`}, {quoted: m})
            }
            break
            case 'ai': case 'gpt': case 'chatgpt':{
                if (!q) return reply(`Apa Yang Mau Di Ulas?\nExample : ${CmD} Kamu bisa apa?`)
                console.log("->[\x1b[1;32mNew\x1b[1;37m]", color(`Command ${CmD} Dari`, 'yellow'), color(pushname, 'lightblue'), `: "${m.text}"`)
                bob.sendPresenceUpdate("composing", m.chat);
                try {
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {role: "system", content: "Ini Adalah Jojo Bot, Yang Di Ciptakan Oleh Arasya"},
                    {role: "user", content: q}
                ]
            })
            reply(response.data.choices[0].message.content)
        } catch (e) {
            reply("Maaf, Lagi Dalam Perbaikan.")
        } 
            }
            break
            case 'bot':{
                if (q.toLowerCase() === "on") {
                  if (isChatBot) return reply(`ChatBot Telah aktif`)
                  chatbot.push(m.chat)
                  fs.writeFileSync('./assets/db/chatbot.json', JSON.stringify(chatbot, null, 2))
                  reply(`Sukses mengaktifkan BOT GPT di grup ini`)
                } else if (q.toLowerCase() === "off") {
                  if (!isChatBot) return reply(`CHATBOT GPT telah nonaktif`)
                  var posi = chatbot.indexOf(m.chat)
                  chatbot.splice(posi, 1)
                  fs.writeFileSync('./assets/db/chatbot.json', JSON.stringify(chatbot, null, 2))
                  reply(`Sukses menonaktifkan GPT BOT di grup ini`)
                } else {
                  reply(`Pilih on atau off\nExample : ${CmD} on`)
                }
            }
            break
            case 'tts': case 'sbot' :{
                if (!args.length === "12") return reply(`Text Terlalu Panjang`)
                config(tiktokresi);
                createAudioFromText(q, 'myAudio', 'id_001')
                await sleep(3000)
                bob.sendMessage(m.chat, {audio: fs.readFileSync(`myAudio.mp3`), mimetype: 'audio/mp4', ptt: true}, {quoted: m})
            }
            break
            case 'take': case 'swm': case 'stickerwm': {
            try {
            if (!isImage && !isQuotedImage && !isQuotedSticker) return reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
                let packnem = q.split("|")[0]
                let autor = q.split("|")[1]
                if (/image/.test(mime)) {
                     let media = await bob.downloadMediaMessage(qmsg)
                     let encmedia = await bob.sendImageAsSticker(m.chat, media, m, { packname: packnem, author: autor })
                     await fs.unlinkSync(encmedia)
                 } else {
                     reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
              }
                 } catch (e) { if (!isImage && !isQuotedImage && !isQuotedSticker) return reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
                 let packnem = q.split("|")[0]
                 let autor = q.split("|")[1]
                 if (/image/.test(mime)) {
                      let media = await bob.downloadMediaMessage(qmsg)
                      let encmedia = await bob.sendImageAsSticker(m.chat, media, m, { packname: `Arasyaaa`, author: `@arsrfii` })
                      await fs.unlinkSync(encmedia)
                  } else {
                      reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
               }}}
                 break
            case 'esrgan': case 'tohd': case 'bagusin':{
                if (!isImage && !isQuotedImage) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${CmD}`)
                reply(global.mess.wait + `\nTunggu 1 Menit Kurang`)
                try {
                    const data = await quoted.download()
                    // Convert the buffer into a base64-encoded string
                    bob.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
                    const base64 = data.toString("base64");
                     //Set MIME type for PNG image
                    const mimeType = "image/png";
                     //Create the data URI
                    const dataURI = `data:${mimeType};base64,${base64}`;
                    const model = "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b";
                    const input = {
                      image: dataURI,
                    };
                    const output = await replicate.run(model, { input });
                    console.log(output)
                    bob.sendMessage(m.chat, { caption: `Sukses!!`, image: { url: output} })
                    } catch (e) {
                    m.reply(`Eror! ukuran gambar terlalu besar atau tidak ada gambar yang dikirim dengan caption ${CmD}`)
                    }
            }
            break
          case 'qc': {
                try{
                    if (!q) return m.reply('Missing parameter text')
                    const name = pushname
                    let q1 = m.quoted ? m.quoted : m
                    let teks = q 
                    const avatar = await bob.profilePictureUrl(quoted.sender, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png")
                    let mime = (q1.m || q1).mimetype || '' 
                    
                    if (/image\/(jpe?g|png)/.test(mime)) { 
                    let media = await bob.downloadAndSaveMediaMessage(quoted,getRandom())
                    let anu = await upload(media)
                    const json = { type: "quote", format: "png", backgroundColor: "#4e4e4e", width: 512, height: 768,  scale: 3, messages: [{ entities: [], media: { url: anu.url }, avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: teks, replyMessage: {} }]}
                     const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
                        headers: {
                          "Content-Type": "application/json"
                        }
                      }).catch(e => e.response || {})
                      if(!data.ok) throw data
                    const buffer = Buffer.from(data.result.image, "base64")
                    
                    let encmedia2 = await bob.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })

                    sleep(1000)
                    fs.unlinkSync(media)
                    
                    } else {
                    const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 512, height: 768,  scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: teks, replyMessage: {} }]}
                    const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
                        headers: {
                          "Content-Type": "application/json"
                        }
                      }).catch(e => e.response || {})
                      if(!data.ok) m.reply( data)
                    const buffer = Buffer.from(data.result.image, "base64")
                    let encmedia3 = await bob.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })
                    }
                    } catch (e){
                        m.reply (`${e}`)
                        console.log(e)
                        return
                        }
            }
            break
             
            case 'removebg': case 'rb':{
            if (!isQuotedImage && !isImage)return reply(`Kirim Gambar dengan caption ${CmD} atau reply gambar dengan text ${CmD}!`)
            if (isQuotedImage || isImage ) {
            reply(global.mess.wait + `\nTunggu 5 Detik`)
            var tete = await downloadAndSaveMediaMessage('image', 'rmvbg.jpg')
            var tot = await upload(fs.readFileSync('rmvbg.jpg'))
            rmvbg.rbFromImageUrl(tot, `5CwCfA9u2xaY9RYfuqpD7wXe`) //ini api punya guehhhhh
            await sleep(5000)
            bob.sendMessage(m.chat, {caption: `AI-` + otpkode(6) + `.png`, image: fs.readFileSync('output-2.png')}, {quoted: m})
            }
            fs.unlinkSync('output-2.png')
            fs.unlinkSync('rmvbg.jpg')
            }
            break
            case 'toimg':{
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
                let media = await bob.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    bob.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'translate': case 'tr':{
                if (!isQuotedMsg) return reply(`Reply Pesan.`)
                translate.translate(quoted.text, {to: `id`}).then ( data => {
                    bob.sendMessage(m.chat, {text: data.text}, {quoted: fake2})
                })
            }
            break
            case 'ssweb': case 'ss': {
            if (!q) return reply(`Masukan Text!\nExample ${CmD} https://youtube.com`)
            if (q.includes('xnxx') && q.includes('pornhub')) return reply("Bokep Mulu Pikiran nya")
            reply(global.mess.wait)
            bob.sendMessage(m.chat, {caption: q, image: {url: `https://image.thum.io/get/width/1900/crop/1000/fullpage/` + q}})
            }
            break
            case 'gempa': case 'infogempa': {

                dl.gempa().then ( data => {
                    var text = `*[ INFO GEMPA TERKINI ]*\n\n*Locate :* ${data[0].locate}\n*Warning :* ${data[0].warning[0]}\n*Tanggal :* ${data[0].date}\n*Magnitude :* ${data[0].magnitude}\n*Jarak :* ${data[0].depth}\n*Desk :* ${data[0].location}`
                    sendbut(m.chat, text, `#dashboard`, `Back To Menu 🔙`, tgl + ' ' + jam)
                    bob.sendMessage(m.chat, {text: text}, {quoted: m})
                })
            }
            break
            case 'memegen': case 'memeg': {
                if (!isImage && !isQuotedImage) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${prefix}memegen Kamu|Wibu`)
                reply(global.mess.wait)
                let name = q.split("|")[0]
                let isi = q.split("|")[1]
                if (!name) return reply("Masukan Text Atas")
                if (!isi) return reply("Masukan Text Bawah")
                if (isImage || isQuotedImage) {
                    var meme = await downloadAndSaveMediaMessage("image", "memeg.jpg")
                    var generator = await upload(fs.readFileSync('memeg.jpg'))
                    var link = await getBuffer(`https://api.memegen.link/images/custom/${name}/${isi}.png?background=${generator}`)
                    bob.sendMessage(m.chat, {image: link, caption: `${name} ${isi}`}, {quoted: m})
                    setTimeout( () => {
                        fs.unlinkSync(`memeg.jpg`) // ur cods
                        }, 5000) // 1000 = 1s,
                }
            } 
            break
            case 'tstik': case 'tstick': case 'ttp':{
                if (!q) return reply(`Masukan Text!\nExample : ${CmD} Aku`)
                reply(`Bentar`)
                let encmedia = await bob.sendImageAsSticker(m.chat, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=comics-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=160&text=${q}`, m, { packname: global.packname, author: global.author })
            }
            break
            case 'm': {
                var stikrn = ["1.webp","2.webp","3.webp"]
                let send = {
                    text: menuku,
                    mentions: [sender],
                    mimetype: 'application/pdf',
                    contextInfo: {
                        externalAdReply: {
                            title: `${pushname}`,
                            body: `Syaa`,
                            thumbnail: fs.readFileSync(`./media/icon3.jpg`),
                            sourceUrl: "https://my.arsrfii.repl.co",
                            mediaUrl: "",
                            renderLargerThumbnail: true,
                            showAdAttribution: false,
                            mediaType: 1
                        }
                    },
                }
                bob.sendMessage(m.chat, send, {quoted: fake2})
                }
                break
                case 'sticker': case 's': case 'stickergif': case 'sgif': {
                    if (/image/.test(mime)) {
                         let media = await bob.downloadMediaMessage(qmsg)
                         let encmedia = await bob.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                         await fs.unlinkSync(encmedia)
                     } else if (/video/.test(mime)) {
                     reply(global.mess.wait)
                         if (qmsg.seconds > 11) return reply('Maksimal 10 detik!')
                         let media = await bob.downloadMediaMessage(qmsg)
                         let encmedia = await bob.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                         await fs.unlinkSync(encmedia)
                     } else {
                         reply(`Kirim/Reply Gambar/Video/Gif Dengan Caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                  }
                     }
                     break
                     case 'stcmeme': case 'smeme': {
                        if (!isImage && !isQuotedImage && !isQuotedSticker) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${prefix}stcmeme Kamu|Wibu`)
                        let name = q.split("|")[0]
                        let isi = q.split("|")[1]
                        if (!name) return reply("Masukan Text Atas")
                        if (!isi) return reply("Masukan Text Bawah")
                        reply('Proses Membuat...')
                        if (isImage || isQuotedImage) {
                            var meme = await downloadAndSaveMediaMessage("image", "memegen.jpg")
                            var generator = await upload(fs.readFileSync('memegen.jpg'))
                            var link = await getBuffer(`https://api.memegen.link/images/custom/${name}/${isi}.png?background=${generator}`)
                            let encmedia = await bob.sendImageAsSticker(m.chat, link, m, { packname: global.packname, author: global.author })
                        } 
                        setTimeout( () => {
                            fs.unlinkSync(`memegen.jpg`) // ur cods
                            }, 5000) // 1000 = 1s,
                    } 
                    break
                    case 'stcmeme2': case 'smeme2': {
                        if (!isImage && !isQuotedImage) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${prefix}stcmeme Kamu|Wibu`)
                        if (!q) return reply(`Masukan Text!\nExample : ${prefix}stcmeme2 Anjay`)
                        reply('Proses Membuat...')
                        if (isImage || isQuotedImage) {
                            var meme = await downloadAndSaveMediaMessage("image", "memegen.jpg")
                            var generator = await upload(fs.readFileSync('memegen.jpg'))
                            var link = await getBuffer(`https://api.memegen.link/images/custom/%E3%85%A4_/${q}.png?background=${generator}`)
                            let encmedia = await bob.sendImageAsSticker(m.chat, link, m, { packname: global.packname, author: global.author })
                            fs.unlinkSync('memegen.jpg')
                        }
                        setTimeout( () => {
                            fs.unlinkSync(`memegen.jpg`) // ur cods
                            }, 5000) // 1000 = 1s,
                    } 
                    break
                    //Akhir owner menu
                    default:
                    if ( isChatBot ) {
                            console.log("->[\x1b[1;32mNew\x1b[1;37m]", color('Question From', 'yellow'), color(pushname, 'lightblue'), `: "${m.text}"`)
                            bob.sendPresenceUpdate("composing", m.chat);
                            try {
                                const response = await openai.createChatCompletion({
                                    model: "gpt-3.5-turbo",
                                    messages: [
                                        {role: "system", content: promptgpt},
                                        {role: "user", content: m.text}
                                    ]
                                })
                                reply(response.data.choices[0].message.content)
                    } catch (e) {
                        reply("Server Tidak stabil")
                    } 
            
            }

            
            if (budy.startsWith('hey edith')) {
                if (isChatBot) return reply(`Hei ${pushname}, How are you today?`)
                  chatbot.push(m.chat)
                  fs.writeFileSync('./assets/db/chatbot.json', JSON.stringify(chatbot, null, 2))
                  reply(`Hay ${pushname}, The weather is sunny today`)
            }
            if (budy.includes('thanks close')) {
                if (!isChatBot) return reply(`system shuts down, have a nice day ${pushname}`)
                  var posi = chatbot.indexOf(m.chat)
                  chatbot.splice(posi, 1)
                  fs.writeFileSync('./assets/db/chatbot.json', JSON.stringify(chatbot, null, 2))
                  reply(`system shuts down, have a nice day ${pushname}`)
            }
  
                if (budy.startsWith('x')) {
                    if (!isCreator) return reply(mess.owner)
                    
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(2)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }


                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }

        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})