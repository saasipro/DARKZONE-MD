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
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 
let desc = `
YOURBIT SONG DOWNLOADEDER 🔥

tittle: ${data.title}
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
  
 //send audio + document message 
await conn.sendmessage(from,{audio:{url:downloadurl},mimetype:"audio/mpag" },{qouted:mek})
await conn.sendmessage(from,{document:{url:downloadurl},mimetype:"audio/mpag,filename:data.title + ".mp3". caption:"MADE BY IRFAN"},{qouted:mek})
    

  
}catch(e){
console.log(e)
reply('${e}')
}
})



//=========== video-dl + document ================ 

cmd({
    pattern: "video",
    desc: "download videos ",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await ytv(q)
const data = search.videos[0];
const url = data.url 
let desc = `
YOURBIT VIDEO DOWNLOADEDER 🔥

tittle: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}
made by irfan
`
await conn.sendmessage(from,{image:{url:data.thumbnail}, caption:desc},{qouted:mek});
//download video 
let down = await fg.yta(url)
let downloadurl = down.dl_url
  
 //send video message 
await conn.sendmessage(from,{video:{url:downloadurl},mimetype:"video/mp4" },{qouted:mek})
await conn.sendmessage(from,{document:{url:downloadurl},mimetype:"video/mp4,filename:data.title + ".mp4", caption:"made by IRFAN"},{qouted:mek})
    

  
}catch(e){
console.log(e)
reply('${e}')
}
})
