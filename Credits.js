var Discord = require('discord.js')

module.exports = {

    name: 'Credits', // Case Sensitive
    description: 'Credits ......',

    execute(message, msg, args) {
        const user = message.mentions.users.first() || message.author;
        const creditsembed = new Discord.MessageEmbed()
            .setTitle('Credits')
            .setDescription('Thanks to the following people who created Origin:')
            .setColor('0x0a0a0a')
            .addField('__Linko_Aviation__', 'Founder of Origin, Bot Creator & Scripter' , true)
            .addField('__The Community__', 'Without Origin, how would you find any other services without Origin? I would like to say thanks to the community for supporting the bot!' , true)
            .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
            .setTimestamp()

        message.channel.send(creditsembed)



    }

}