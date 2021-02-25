const Discord = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {
let isim = args.slice(0).join(' ');
 
if(![(config.booster)].some(role => message.member.roles.cache.get(role))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için sunucumuza takviye yapmalısın.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

if(!isim) return message.channel.send(new Discord.MessageEmbed().setTimestamp().setColor('RANDOM').setDescription(`Bir İsim Belirtmelisin.`))
 
 
message.guild.members.cache.get(message.author.id).setNickname(`${message.author.username.includes((config.tag)) ? (config.tag) : (config.tag2)} ${isim}`)
return message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> Kullanıcı adın ${isim} olarak değistirildi.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['boosterisim'],
    permLevel: 0
}
 
exports.help = {
    name: 'booster',
    description: '.',
    usage: 'me'
}