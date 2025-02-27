//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "243830461680";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNqMmM3MW5EYmtsblBSaVJ4Zk5rUXN5VzBJenRsbDZBMVA4T0ZKYmRVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHhjT2M4UDhOWndMYVdEMlYxSmVzV2lvK1R0YnFuVHlKNDcxSVFWbE53RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQU00TXY5cFYwSHJWejNIVE05eExqWFBRMkdQM08yTzJYVmZxbnppSzE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzKytDd3doc2Mva25RMC9HbkJnSTh1UmQxaFlZbjd3U3VtU0RRaFUwUndrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBdWU5dHhOZW9WNk9FU2pKVk1ITGRGVG02SWFqK2Z5dm9Oamh4RzBYbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBHbllzbFhxQ1Vld1EzUDZ1U1pKMXNjWUVqU1pBelplL3l3ekpBKzhZQjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVZRC8zV01ZZm1wSlEwS2pTNHl2QVNyZnVSMmlFMXpQMXhqMDI2N09uYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakRFb21qbVZtSEh6UHRUZnNDb0M4VUx5MzNHL0VzWWZ1andCYXJuMTZGaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing4Vi9PVTJVT1dhOUxyWlZNamhoUkV2OUpSSXpSM2I0NWdEZ0dTdURkY2wxc2xBajEwL2ltVjVyd01yZU9SckV4SHVBMy9PWnZZK3ZZRUxKRUtuMUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6InlqL25yTG1GYllvcWxuVm5yMlV1emF2OTMzWTdGdEV5dkJ4dTA1N1EzQWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImR1eWV3LWZOUkZXWWUxeGNteHN6ZWciLCJwaG9uZUlkIjoiMGQxZTJiYjYtZjNlNS00NDc0LWJlYTYtOGI3ZWU3ZDVlN2RiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImluSUw2QU5pYW5CZ09TR1Q0bmVBMTJSVHo5Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHNzNkbEJEbVVoYndvamJsV2REQUFzdWJnZ009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNFlXVllHRjQiLCJtZSI6eyJpZCI6IjI0MzgzMDQ2MTY4MDo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1FTlRPUiBBS0FHIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT3Y5dWtERUpUVWdiNEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFajM1UEJsSEQyN1FUZHRyNDVCazhkSW91K3dCc081cVJFV05COVlWa3pzPSIsImFjY291bnRTaWduYXR1cmUiOiJ3bmF1aDlyWkJqaG1KUm9TQWtPWTVxQ09zVzgvSXJCNzV0YWVhZ3MrTkJiYjBsVDVaWjdIZ3JnL0dZNWJFOCtuL0RJMGdWY0QyVnQvcXlHekxMTjJDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ3hOcVlmUHZNUEdKWE9hK1RJaWd3YWNOcWRjYjVjTzFhVTBzSXJWN1ZETEs5Z0RhcllzZFNSZDg5cUZkT3krd1JjbGJ2aUtFS3BCVWNhWUlJWnlWQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM4MzA0NjE2ODA6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSSTkrVHdaUnc5dTBFM2JhK09RWlBIU0tMdnNBYkR1YWtSRmpRZldGWk03In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwNjYzMzMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpjRiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
