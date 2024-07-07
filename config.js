
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
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

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkd6M2w3bzd6LzB2T2VIRU5uR20vQTRueGV3VFYyYmtNVGxONjJKMEdIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEFIKzhXZi80d0wwd2doMTd0Qjhnclp4S3NxaWlwdnBvWURzTWZjK0dRUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRXRoY1Fsa0VpQkN5UTN3UGEzZUFhVUtWUlpLUUtnZS9WWmsrZVpLWm5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLMS9EUElKRUxFcXlJWnZrTUFwdkJPV3BXdGhjbDNYRmdGQ28xa3dsa2dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIWTBvUXB1d09aMnNYNjdjN01NajJZL1EzcUd1citQZmZaWS9qYk5NbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx6L3RKUG1GajJYalZPbUQ3aVJneE43YUE5Snd6a1FIcnRiUHdjTDFVRkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0piTHNFTVpCbWI1NUtzeFZaQzRJVWdiT2FGd3ZiMERObmZKSEhCMGIzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2FvUmhrK3JGZFBFQytnN1JjZ0lENzdIV01BTndRRE5HTnFwdHVETmp6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxQbW12M1RCY3VVM3I4eUJuUzFZdGhuOTBsRy9nYWJWa2l4WlFwa0plT25hcVRybVA5Y1RDQUdLSXQyM2ZLeVI0TUdOVkdUWmdqS3F4NmNMRHBxUGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJpdGNyZnR2cU5heTl2SXd2TUZsb280QjVPV3dqcHlEUjVtZ0tOVFBRcFFvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMjQ4NDgyN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4RDQyMTM4MzMzRTIyRjA1QTJFQ0IxODExQjQwRDlEOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzY2MjYwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHYU1WZ0ZPZlM3Mll4NjNFM3YweVBRIiwicGhvbmVJZCI6ImIwMmY3YmM1LWYxYTgtNGViNC1iMDRjLWRlNmJkN2M3YTcxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxVkVJdk1qL04rYXdtcitDalc0YjNMY0NLZW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWhFWFEyVzkyRG1xQmU5UVlMSjRKSWZrZmRBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZRSDMxUkhaIiwibWUiOnsiaWQiOiI5MjMzMDI0ODQ4Mjc6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLinaXvuI4gICAgICDinqogICAg8J2XlfCdkJHwnZCO2qnwnZCE8J2QjSDhtKXvuI7vuI7gvIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xhdHV0TUdFS3pwcXJRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1BTjRaSy9keWEweEIrNTVUN1cyMGNYcnZ2aFJXWHdWVFdWRU10bDNhUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZLdHYxMldWNjFwZHhsZHVwTjZRdXFuUXpYaHU0NjJwNDEzNkplUU44N2FuTDhMRjJiUDM4OUxObjhoNkRBamFsVE5NdlNIVmFRdDgyZ0xYc0hkL0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDTGVjN2MxY0p6M09HbnZmQnVrb2w4WlVTMEZkU1V5VkNOelM4MWx4MWRHSjZ2MnF6Ylg4Y2w4U002MGp4M01yWDRDbE50RzRPMDVESm9nZnhOaW5pZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwMjQ4NDgyNzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRBRGVHU3YzY210TVFmdWVVKzF0dEhGNjc3NFVWbDhGVTFsUkRMWmQya1YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNjYyNTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTms4In0= //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
