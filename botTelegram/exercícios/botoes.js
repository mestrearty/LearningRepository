const env = require("../.env");
const Telegraf = require("telegraf");
const bot = new Telegraf(env.token);
const Markup = require("telegraf/markup");

const tecladoCarne = Markup.keyboard([
  ["Porco", "Vaca", "Carneiro"],
  ["Galinha", "Eu como é ovo"],
  ["Peixe", "Frutos do mar"],
  ["Eu sou vegetariano"],
])
  .resize()
  .extra();

bot.start(async (ctx) => {
  const from = ctx.update.message.from;
  await ctx.reply(`Seja bem vindo, ${from.first_name}: ${from}`);
  await ctx.reply(
    `Qual bebida você prefere?`,
    Markup.keyboard(["Coca", "Pepsi"]).resize().oneTime().extra()
  );
});

bot.hears(["Coca", "Pepsi"], async (ctx) => {
  await ctx.reply(`Nossa! Eu também gosto de`);
  await ctx.reply("Qual a sua carne favorita?", tecladoCarne)
});

bot.hears( ["Porco", "Vaca", "Carneiro"],async(ctx)=>{
  ctx.reply('A minha tbm.')
})

bot.hears( ["Eu sou vegetariano"],async(ctx)=>{
  ctx.reply('Ser evoluido.')
})

bot.startPolling();
