var Discord = require('discord.js')

module.exports = {

    name: 'Cmds', // Case Sensitive
    description: 'Cmds ......',

    execute(message, msg, args) {
        const user = message.mentions.users.first() || message.author;
        const commandsembed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .setDescription('Displaying the following commands:')
            .setColor('0x0a0a0a')
            .addField('__Userinfo__', 'Lists information about a certain user.' , true)
            .addField('__Suggest__', 'Makes a suggestion. (Warning: The command may have issues working.)' , true)
            .addField('__Setrank__', 'Ranks the following player to a certain rank. (Example: :setrank [PLAYER] [RANKID]' , true)
            .addField('__Fire__', 'Ranks the player to the lowest rank in group besides guest.' , true)
            .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
            .setTimestamp()

        message.channel.send(commandsembed)



    }

}