const env = require("../.env");
const Telegraf = require("telegraf");
const bot = new Telegraf(env.token);
const moment = require("moment");

bot.start(async (ctx, next) => {
  const from = ctx.update.message.from;

  next();
});

bot.hears("pizza", (ctx) => ctx.reply("Quero"));

bot.hears(['salada','carne'], (ctx) => ctx.reply("Passo pra lulu."));

bot.hears(/burguer/i, ctx=>ctx.reply('Quero!'))

bot.hears([/saladas/i,/brocolis/i], (ctx) => ctx.reply("Passo pra lulu."));

bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx=>{
  moment.locale('pt-BR');
  const data = moment(ctx.match[1],'DD/MM/YYYY');
  ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`);
});


bot.launch();
