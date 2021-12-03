const env = require("../.env");
const Telegraf = require("telegraf");

const bot = new Telegraf(env.token);

bot.start((ctx) => {
  const from = ctx.update.message.from;
  console.log(`Seja bem vindo, ${from.first_name}`)
  ctx.reply(`Seja bem vindo, ${from.first_name}`);
});

bot.on('text',async (ctx, next)=>{
  await ctx.reply('Mid 1');
  next()
})

bot.on('text',(ctx,next)=>{
  ctx.reply('mid 2')
})

bot.startPolling();
