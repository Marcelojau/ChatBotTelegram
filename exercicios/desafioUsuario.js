const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    if (ctx.update.message.from.id === 414838887 ){
        console.log(ctx.update.message.from.id)
        ctx.reply('Ao seu dispor, metre!')
    }else{
        console.log(ctx.update.message.from.id)
        ctx.reply("Sinto muito, só falo com meu mestre")
    }
})

bot.startPolling()