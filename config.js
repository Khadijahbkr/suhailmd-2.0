const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_16_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgNjksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldtUzJxZzBUdWtZZ00wMmFDNUUvMmdwSVVWaEwzK3ptV25KQTIwUjlTOU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi0zTWNtWUhVUlFhQzVWVWpTd3VCa1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTNiMzJkODItMzI2Ny00ODEzLWI2OWMtZmIzOTFmOGM1YmY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDYsXG4gICAgICAxNDIsXG4gICAgICAxNjksXG4gICAgICAxMjEsXG4gICAgICA2MCxcbiAgICAgIDIwMSxcbiAgICAgIDk3LFxuICAgICAgMjMxLFxuICAgICAgMTkwLFxuICAgICAgMTA3LFxuICAgICAgNTYsXG4gICAgICA0LFxuICAgICAgNjksXG4gICAgICAxMzMsXG4gICAgICA3OCxcbiAgICAgIDE1NCxcbiAgICAgIDE4LFxuICAgICAgMTQ4LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMTk3LFxuICAgICAgMTg3LFxuICAgICAgNDEsXG4gICAgICA5NyxcbiAgICAgIDMsXG4gICAgICAyNDAsXG4gICAgICAyMzQsXG4gICAgICAxNjgsXG4gICAgICAxMDYsXG4gICAgICAyMjAsXG4gICAgICAyMjMsXG4gICAgICAxOTUsXG4gICAgICAxMixcbiAgICAgIDgyLFxuICAgICAgOTgsXG4gICAgICAxNzUsXG4gICAgICAxNDksXG4gICAgICAyMTEsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREJQWjgzWkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzc5ODYzOTU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYzNzg0NjkzNTQzMDI3OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lmNHlNQUhFT3VKcUxvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRG5BZXlIZGZyc1k5b1FQNjJkMlhuNjNyb0crM2FrbEdSVUpCVGtoVnVFVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0TmhVMEY3emZ0bGhPZytxWGpSTmJDd3d5WDZiSGloWlRZQjZnVk9BKytVcTZ3SFhPQ0E5cmdlbXBZR2xUelNsRlRMRmhIUHl4bDJrK0VHK2E4aWtBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5S01iSmJkdU5Sb1UvTERsTDdyUHNpNmg3eWd6V2NVSytUWlpycjRQSDZnZ1hVN1Boa244MkxJTGRUSWRLVExsRElZWWFMY2txY0VwL28vdTFDbzdCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM3OTg2Mzk1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTA0MTc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFA3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIUDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJheCtFK2hFYkx4amlYOFlheTVtakgwWUZEdXJ3SkQ5ekdnQlVvVVpocTgwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTQ0NjA5MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4NzAxMjc0OTZcIn0iCn0="  // PUT your SESSION_ID 

 
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
