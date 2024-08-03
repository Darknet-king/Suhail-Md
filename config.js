const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:AnwuRbsvIkBhUThtHoDHMqTghiPfFmdA@viaduct.proxy.rlwy.net:41669/railway"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776860011";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_26_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicXNoTXBHalFuRnh4WkNkcmpZV1lvSHRZeEVPclpQQ08zdzZOa2sremYvdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUjJSdGdEOVBUdHU1R3g5QndKWGlUd1wiLFxuICBcInBob25lSWRcIjogXCIxZGM4MGEwYy1hNTg0LTQ4NjgtYTRmMi02NjQxODc4NjViNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgODcsXG4gICAgICAxNzEsXG4gICAgICAxMjksXG4gICAgICAyLFxuICAgICAgMTc3LFxuICAgICAgMTAsXG4gICAgICAyNTEsXG4gICAgICA5NCxcbiAgICAgIDE4MSxcbiAgICAgIDI0NixcbiAgICAgIDU3LFxuICAgICAgMTQzLFxuICAgICAgMzYsXG4gICAgICAyMjIsXG4gICAgICA3NSxcbiAgICAgIDAsXG4gICAgICA5NCxcbiAgICAgIDk5LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICA0MixcbiAgICAgIDI2LFxuICAgICAgOSxcbiAgICAgIDU3LFxuICAgICAgMTMxLFxuICAgICAgMTUzLFxuICAgICAgNjMsXG4gICAgICAxOTcsXG4gICAgICAyMzksXG4gICAgICAxODUsXG4gICAgICA4NixcbiAgICAgIDYsXG4gICAgICAxOTIsXG4gICAgICAxOTAsXG4gICAgICA3NCxcbiAgICAgIDY3LFxuICAgICAgMjA3LFxuICAgICAgMTk0LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdENVJYQTFLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3Njg2MDAxMTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ0NDA1ODYwMTg4MzU4OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzbStXVVErZjYydFFZWUNDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVU1SQURIKzhST0FvQnFRWGkwZlZHeHREZkNyTVBrYlkzSDlFVjkyUjYydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmcVFKbVJhZVRyY3FQWnNTemhrOWY2UFNCMWlpeWZmbi83M0tNcmtEUnAyQ2R4OUFocVRTZWhzVlI0RUgwaURCRnlSK09IL1l5Nlg5ZWMrT1Fwa1ZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEVS9wd01ONmRZRDlkMEJMVFpscEYrUjN6SWVpcWw5UHU3OTd2MHZES0NFQy8wdG0reVpabEVxWEM3NzZjU2lNMDluckI4QUlPcXNyYjQ3bzNUVlVoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3Njg2MDAxMTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NjI3ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUNRQUFCUHNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ1FBQUJQcy5qc29uIjogIntcImtleURhdGFcIjpcIlhXL252c0FPak1MYTlYTlRRQjc0YXBHNytVK1M1Z0szdmNNM1d3ajk4aXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzODA3OTk3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzNl19LFwidGltZXN0YW1wXCI6XCIxNzIyNjAxOTAxMDA2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
