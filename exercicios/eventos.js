const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${name}!`)
})

bot.on('text', ctx =>
    ctx.reply(`Text '${ctx.update.message.text}' Recebido `))

bot.on('location', ctx => {
    const location = ctx.update.message.location
    console.log(location)
    ctx.reply(`Sua localização de envio  lat: ${location.latitude}, long: ${location.longitude}!`)
})

bot.on('contact', ctx => {
    const contact = ctx.update.message.contact
    console.log(contact)
    ctx.reply(`Vou lembrar do ${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice',  ctx => {
    const voice = ctx.update.message.voice
    console.log(voice)
    ctx.reply(`Audio recebido, ele possui ${voice.duration} segundos`)
})

bot.on('photo', ctx =>{
    const  photo = ctx.update.message.photo
    console.log(photo)
    photo.forEach((ph, i) => {
        ctx.reply(`Photo ${i} tem resolução de ${ph.width} X ${ph.height}`)
    })
})

bot.on('sticker', ctx => {
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    ctx.reply(`Estou vendo que você enviou o ${sticker.emoji} do conjunto ${sticker.set_name}`)

})
bot.startPolling()