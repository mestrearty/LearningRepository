const env = require("../.env");
const Telegraf = require("telegraf");

const bot = new Telegraf(env.token);

bot.start((ctx) => {
  const from = ctx.update.message.from;
  ctx.reply(`Seja bem vindo, ${from.first_name}: ${from}`);
});

bot.on('text', async(context, next)=>{
  const from = context.update.message.from;
  if (from.id == "448899718") {
    await context.reply("Faaala mestre");
  }else{
    await contex.reply("Sinto muito, mas eu só falo com meu mestre");
  }
})


bot.startPolling();
