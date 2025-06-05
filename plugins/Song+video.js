const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)
cmd({
    pattern: "song",
    desc: "download songs ",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 
let desc = `
YOURBIT SONG DOWNLOADEDER 🔥

tittle: ${data.tittle}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}
made by irfan
`
await conn.sendmessage(from,{image:{url:data.thumbnail}, caption:desc},{qouted:mek});
//download audio 
let down = await fg.yta(url)
let downloadurl = down.dl_url
  
 //send audio message 
await conn.sendmessage(from,{audio:{url:downloadurl},mimetype:"audio/mpag" },{qouted:mek})


  
}catch(e){
console.log(e)
reply('${e}')
}
})
