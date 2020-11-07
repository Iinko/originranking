var Discord = require('discord.js')

module.exports = {

    name: 'UserInfo', // Case Sensitive
    description: 'UserInfo ......',

    execute(message, msg) {
        const user = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .setDescription('Displaying user:')
            .setColor('0x0a0a0a')
            .addField('Username', user.username)
            .addField('Account Created', user.createdAt.toLocaleDateString())
            .setThumbnail(user.displayAvatarURL())
            .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
            .setTimestamp()

        message.channel.send(embed)



    }

}