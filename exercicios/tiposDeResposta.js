const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b> <i>de várias</i> <code>Formas</code> <pre>Possíveis</pre> <a href="http://www.daek.com.br">Nosso Site</a>`)
    await ctx.replyWithMarkdown('Destando mensagem *Markdown*'
                                + '_de várias_ `formas` ```possíveis```'
                                + '[Google](http://www.google.com' )
    await ctx.replyWithPhoto({source: `${__dirname}/bkg-blu.jpg`})
    await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg', {Caption: 'Olha o estilo!'})
    await ctx.replyWithPhoto({url: 'http://files.cod3r.com.br/curso-bot/gato1.jpg'})
    await ctx.replyWithLocation(29.97733008, 31.13033068)
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()