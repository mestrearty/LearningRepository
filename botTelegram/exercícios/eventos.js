const env = require("../.env");
const Telegraf = require("telegraf");

const bot = new Telegraf(env.token);

bot.start((ctx, netx) => {
  const from = ctx.update.message.from;
  ctx.reply(`Seja bem vindo, ${from.first_name}: ${from}`);
  next();
});

bot.on("text", async (context, next) => {
  const msg = context.update.message.text.toLowerCase();
  if (msg == "oi") {
    await context.reply(`Papagaio: ${msg}`);
  }
  next();
});

bot.on("location", async (context, next) => {
  const location = context.update.message.location;
  await context.reply(`Você está em: 
  Lat: ${location.latitude} 
  Lon:${location.longitude}`);
  next();
});

bot.on("contact", (ctx) => {
  const contact = ctx.update.message.contact;
  console.log(contact);
  ctx.reply(
    `Vou me lembrar do(a) ${contact.first_name} (${contact.phone_number})`
  );
});

bot.command("oi", (ctx) => {
  ctx.reply("olás");
});

bot.on('voice',ctx=>{
  const voice = ctx.update.message.voice;
  console.log(voice);
  ctx.reply(`Audio recebido. Duração ${voice.duration} segundos`)
})

bot.on('photo', ctx=>{
  const photo = ctx.update.message.photo;
  console.log(photo);
  photo.forEach((ph,i)=>{
     ctx.reply(`Photo ${i} tem resolução de ${ph.width}x${ph.height}`)
  })
})

bot.on('sticker', ctx=>{
  const stiker = ctx.update.message.sticker;
  console.log(stiker);
   ctx.reply(`Estou vendo que você enviou o ${stiker.emoji} do conjunto ${stiker.set_name}`)
})

bot.launch()
