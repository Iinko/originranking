var Discord = require('discord.js')

module.exports = {

    name: 'Help', // Case Sensitive
    description: 'Help ......',

    execute(message, msg, args) {
        const user = message.mentions.users.first() || message.author;
        const helpembed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Hi there! You asked for help? We got you covered.\nJoin our support server here to talk to one of our representatives!\nhttps://discord.io/OriginRanking')
            .setColor('0x0a0a0a')
            .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
            .setTimestamp()

        message.channel.send(helpembed)



    }

}