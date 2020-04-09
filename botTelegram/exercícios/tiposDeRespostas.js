const env = require("../.env");
const Telegraf = require("telegraf");

const bot = new Telegraf(env.token);

bot.start(async (ctx, next) => {
  const from = ctx.update.message.from;
  await ctx.reply(`Seja bem vindo, ${from.first_name}😁`);
  await ctx.replyWithHTML(
    `Destacando mensagem <b>HTML</b> <i>de várias</i> <code>formas</code> <pre>possíveis</pre><a href="http://www.google.com">Google</a>`
  );

  await ctx.replyWithMarkdown('Destacando mensagem *Markdown* _de várias_ `formas` ```possíveis``` [Google] (http://www.google.com)')
  
  await ctx.replyWithPhoto({source:`${__dirname}/img/gato.jpg`})
  await ctx.replyWithPhoto('https://www.ahnegao.com.br/wp-content/uploads/2018/11/4-20.jpg',{caption: "olha o gato"})
  await ctx.replyWithLocation(-21.771396, -43.356331);
  await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
  next();
});

bot.launch();
