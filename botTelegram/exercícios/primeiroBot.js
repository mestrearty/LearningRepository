const env = require("../.env");
const Telegraf = require("telegraf");

const bot = new Telegraf(env.token);

bot.start((ctx) => {
  const from = ctx.update.message.from;
  ctx.reply(`Seja bem vindo, ${from.first_name}: ${from}`);
});

bot.on('text',(ctx, next)=>{
  ctx.reply('Mid 1');
  next()
})

bot.on('text',(ctx,next)=>{
  ctx.reply('mid 2')
  next()
})

bot.startPolling();
