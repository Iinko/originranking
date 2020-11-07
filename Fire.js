var Discord = require('discord.js')
var rbxbot = require(`noblox.js`)
var config = require(`../config.json`)

module.exports = {

    name: 'Fire', //Case Sensitive
    description: ' ......',

    async execute(message, msg, args) {

        const robloxname = args[1]
        const robloxid = await rbxbot.getIdFromUsername(robloxname)
            .then(async (robloxid) => { //Rank

                const rank = 1 // This ranks the player to the lowest group rank besides guest.

                await rbxbot.setRank({ group: config.GroupID, target: robloxid, rank: rank })
                    .then(async () => {
                        const rankname = await rbxbot.getRankNameInGroup(config.GroupID, robloxid)
                        const embed = new Discord.MessageEmbed()
                            .setTitle('Successfully Ranked!')
                            .setColor('0x00ff04')
                            .addField('__Username:__', `${robloxname}`)
                            .addField('__New Rank:__', `${rankname}`)
                            .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
                            .setTimestamp()

                        message.channel.send(embed)

                    })
                    .catch((err) => {
                        const embed = new Discord.MessageEmbed()
                            .setTitle('Error!')
                            .setColor('0xff0000')
                            .addField(`**__${robloxname}__** could not be ranked!`)
                            .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
                            .setTimestamp()

                        message.channel.send(embed)
                        console.log(err)
                    })

            })

            .catch((err) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Error!')
                    .setColor('0xff0000')
                    .addField(`The username you have entered could not be found!`)
                    .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
                    .setTimestamp()

                message.channel.send(embed)
                console.log(err)

            })





    }

}