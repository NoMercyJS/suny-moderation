const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const config = require("../config.js");


const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Komutlar Yüklendi.`);
  console.log(`(${client.user.username}) Bot Hazır`);
  client.user.setStatus("idle");
  client.user.setPresence({ activity: { name: "No Mercy ♥ Suny" }, status: "online" });
  client.channels.cache.get(config.sesknal).join()
    console.log(`Bot Aktif Oldu`);

};



