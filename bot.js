// Packages

var Discord = require('discord.js')
var rbxbot = require('noblox.js')
var bot = new Discord.Client();
var request = require('request-promise')
const fs = require('fs');
var config = require('./config.json')




bot.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'))

for (const file of commandfiles) {
    const command = require(`./Commands/${file}`);
    bot.commands.set(command.name, command);
}


bot.on('message', (message) => {
    // Variables

    var msg = message.content.toLowerCase()
    var prefix = ':' // Prefix is changable
    var args = message.content.split(/ +/)

    if (message.author.bot) return; // message.author is a bot, and itll be ignored
    if (message.channel.type === 'dm') return; // Ignores dm's to prevent errors from bot




    // Commands (DO NOT EDIT!!!)

    if (msg.startsWith(prefix + 'userinfo')) {
        bot.commands.get('UserInfo').execute(message, msg);
    }

    if (msg.startsWith(prefix + 'cmds')) {
        bot.commands.get('Cmds').execute(message, msg, args);
    }

    if (msg.startsWith(prefix + 'credits')) {
        bot.commands.get('Credits').execute(message, msg, args);
    }

    if (msg.startsWith(prefix + 'help')) {
        bot.commands.get('Help').execute(message, msg, args);
    }

    if (msg.startsWith(prefix + 'suggest')) {
        bot.commands.get('Suggest').execute(message, msg, args);
    }

    if (msg.startsWith(prefix + 'setrank')) {

        if (message.member.roles.cache.has('740021079254237245')) { // RoleID goes here
            bot.commands.get('SetRank').execute(message, msg, args, config);
        }

        else message.reply('You do not have the `Rank Commander` role to enter this command!')
    }

    if (msg.startsWith(prefix + 'fire')) {

        if (message.member.roles.cache.has('740021079254237245')) { // RoleID goes here
            bot.commands.get('Fire').execute(message, msg, args, config);
        }

        else message.reply('You do not have the `Rank Commander` role to enter this command!')
    }



});









bot.on('ready', async () => {
//Bot Status
    console.log("The bot is currently running!")
    bot.user.setActivity("Made by Nyetkolai#0005", { type: "WATCHING" })
    await rbxbot.setCookie(config.Cookie)
        .then(() => console.log('The bot has logged into roblox!'))
        .catch((err) => console.log(err.message))

        .then(async (success) => { // Required if the group's shout is private
            console.log('Logged in.');

            let onShout = rbxbot.onShout(config.GroupID);

            onShout.on('data', async function (post) {

                function GetAvatarURL(user) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?format=Png&isCircular=false&size=352x352&userIds=${user}`)
                            .then(res => res.json)
                            .then(json => {
                                resolve(json.data[0].imageUrl)
                            })
                            .catch(reject);
                    });
                }

                let avatarurl = await (GetAvatarURL(post.poster.userId))
                const shoutchannel = await bot.guilds.cache.get('730519564407799920').setChannelPositions.cache.get('741003894515302400')
                const embed = new Discord.MessageEmbed()
                    .setTitle('Southview Group Shout')
                    .setURL('https://www.roblox.com/groups/7127146/Southview-Correctional-Facility#!/about')
                    .setDescription(post.body)
                    .setAuthor(post.poster.username, avatarurl)
                shoutchannel.send(embed)
                console.log(`${post.poster.username} posted ${post.body}`)
            });

            /*onShout.on('error', function (err){
                //console.log(err.message);
            });*/

                    })

                    .catch((err) => console.error(err.stack));

                    });

//#region Bot login
bot.login(config.Token)
//#endregion