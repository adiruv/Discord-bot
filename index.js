const Discord= require('discord.js');
const bot = new Discord.Client();

const token='Njc1NjY4NDgwNDE0MTg3NTYy.Xj6f_g.wxMqL3Nft51Sdf-zpkyY6FoH8a4'; 

const PREFIX='!';



 
bot.on('guildMemberAdd',member =>{

    const channel = member.guild.channels.find(channel => channel.name ==="s");
    if(!channel) return;
    channel.send(`Agye maut ka nanga naach dekhne tumbhi ,${member}, gandu`)
})








bot.on('message', message=>{
    let args=message.content.substring(PREFIX.length).split(" ");

switch(args[0]){
    case 'randi':
        message.channel.send('sasti rand at your service', {
            files: ["https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/01/pm-modi-1580196009.jpg"]
    })

    case 'hi':
        message.reply('WHAT YOU WANT')
        break;
    case 'fuck':
        message.reply("ye kotha ni ha")
        break;
   
        
}



})
bot.login(token);
bot.on('ready', () => {

    console.log('This bot online');
})
