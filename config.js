

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
  "identifier": "INZEWORLD.COM (DE)",
  "password": "saher.inzeworld.com",
  "host": "lava.inzeworld.com",
  "port": 3128,
  "secure": false
    },
    {
  "identifier": "Koi Node V4",
  "password": "prplmoe.me",
  "host": "lavav4.prplmoe.me",
  "port": 1118,
  "secure": false
    }
  ]
}
