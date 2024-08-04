//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFVcE1xK3QyOVJDNGtQVDNvWUFlZEN1WGJKYXd1dHBwU0pLbnBrYjMzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTZOVGdDK2ttNnlJYk1OSnZaNXQ4OWZtZ1B3bmttWnFCaUhsOVd0M0RRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQnhtdlBMQy9nTnhFRHJ3TytjOC94amFZM0Q2WFR3d1ZTa0I3WGxpTWswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdVp3OTJaRGJ1bGFaUk0ycDlVYjhtbzFmUS9LejVIbEdRWjBFZzhYS3lvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CTlAvVU90dUNRdXdHV3dpK0tnK240SE9uaVJlS2dWcy9WUG1qQVc0V0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdxdTNSK1VhWTJST09Pa2VUQnJJNkdGTnNVZUJsQ0lsRktyQUN3Ylo4SDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNVOXBBWkRPd3FXV0F0MmdLU1V2MUxrS1EwYzJDQXlsWDFFQzJYaHVrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1FCT2lUWVZmSHYrOHhtd3NqQXZRM0s1bXUxK04xb1N0OVNNZWJuUU9HND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRieE5WMzJFWjJhejNmSTVSU2NIQ1VHNXU4S2VERlNXMGdSTXlCOVo1N1N0UlR6SzFaWlNES1JYQUpidDlraUtiODZ5TWhPUVRQRjFNUytUdExmY2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJLcUthckNaZGlvZ2p5K2RQRzdLMDFZaGRpb05DZHlQWForMGJ4VGFwbitJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU1MDI0ODI3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTVFMDhGN0UxMTg1NEE0RDgwRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzQ4MzYzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1MUhqUXlzQlRXT1JtVklMWW5Ec2hRIiwicGhvbmVJZCI6IjZkNDEwMzFiLWJkYzEtNDMzMS1iOGYxLTY4NGRlODc0NThiZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaRnpXaG1mRnJjdUhvRjRuWjk4ZExrT3RtTTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkFFZUEvejRoalViQzE1R1AwU0YvamhZSVpJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVQR0REOTk1IiwibWUiOnsiaWQiOiIyMzM1NTAyNDgyNzg6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+FuPCfhb3wn4Wy8J+GgfCfhbTwn4Wz8J+FuPCfhbHvuI/wn4W78J+FtCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnlRcWhFUXZKdTh0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibzQ5SUJGMFFiZkJMSklWY0V1YVJUYnJUTUFCLzdPbzZ2bmwwZGFTTTlGdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ2NoLzFlR3RWOUJxakNoWDd1Uk9QcmM5V2NRd2FDUjR0aHdIaVdrcjU3RE5TbUJPREJRUWZNaUtHU29aMzlKQ2piR3NSNS93ZEpkOGNrRDM3NDZkanc9PSIsImRldmljZVNpZ25hdHVyZSI6Im40RStzYmdnQm9xdjNxU0k0Z1EyUU96cURteDI5Yk1jRzd6d1RsenRkZUl0dTJVNlVTdUpFRGV4a0tPUGp4UC9qM050MitJNzROaUJpSjlrcHF6TmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTUwMjQ4Mjc4OjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFPUFNBUmRFRzN3U3lTRlhCTG1rVTI2MHpBQWYrenFPcjU1ZEhXa2pQUmMifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc0ODM2MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLWDkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Incredible",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
