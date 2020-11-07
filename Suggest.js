var Discord = require('discord.js')
const suggestiontickets = new Map();
module.exports = {

    name: 'Suggest', // Case Sensitive
    description: 'Suggest ......',

    async execute(message, msg, args) {

        if (suggestiontickets.has(message.author)) return message.member.send("You can't create a suggestion!");
        
        const filter = (m) => m.author.id === message.author.id
        suggestiontickets.set(message.author, message)

        let msg1 = await message.reply('What do you want the title to be on your suggestion?\nIf you do not want to create a suggestion, type `Cancel` in the chat to cancel your suggestion.')
        let response1 = await (message.channel.awaitMessages(filter, { max : 1 }))
            .then(async (response1) => {
                msg1.delete()
                response1.first().delete()

            if(response1.first().content.toLowerCase() === 'cancel'){
                message.member.send('Your suggestion has been cancelled.')
                suggestiontickets.delete(message.author)
                return;
            }

                let msg2 = await message.reply('What should the description be on your suggestion?\nIf you do not want to create a suggestion, type `Cancel` in the chat to cancel your suggestion.')
                let response2 = await (message.channel.awaitMessages(filter, { max : 1 }))
                    .then(async (response2) => {
                        msg2.delete()
                        response2.first().delete()

                        
            if(response2.first().content.toLowerCase() === 'cancel'){
                message.member.send('Your suggestion has been cancelled.')
                suggestiontickets.delete(message.author)
                return;
            }

                        const suggestionembed = new Discord.MessageEmbed()
                            .setTitle(`${message.author.tag}'s Suggestion`)
                            .setColor('0x0a0a0a')
                            .addField('Suggestion Title', response1)
                            .addField('Suggestion Description', response2)
                            .setFooter('Origin Ranking Services; Scripted by Nyetkolai#0005')
                            .setTimestamp()


                        let msg3 = await message.reply('Are you sure you want to make your suggestion open to the public?\n**__Enter your response with:__**\n`Yes - Suggestion will be submitted.`\n`No - Suggestion will not be submitted.`')
                        let response3 = await (message.channel.awaitMessages(filter, { max : 1 }))
                            .then(async (response3) => {

                            if(response3.first().content.toLowerCase() === 'no'){
                                message.member.send('Your suggestion has been cancelled.')
                                suggestiontickets.delete(message.author)
                                return;
                            }
                            if(response3.first().content.toLowerCase() === 'yes')
                                msg3.delete()
                                response3.first().delete()
                                var suggestionchannel = await message.channel.guild.channel.get('768632996949262346')
                                let suggestion = await suggestionchannel.send(suggestionembed)
                                suggestion.react('✅')
                                suggestion.react('❌')

                                setTimeout(() => {
                                    suggestiontickets.delete(message.author)
                                }, 5000); // Value is in miliseconds
                                return;
                            {
                            // If response is not yes
                                message.member.send('Your suggestion has been cancelled.')
                                suggestiontickets.delete(message.author)
                                msg3.delete()
                                response3.first().delete()                                
                            }
                            })
                            .catch((err) => console.log(err))

                    })
                    .catch((err) => console.log(err))

            })
            .catch((err) => console.log(err))
    }

}