const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('Bem vindo ao Bot conversor 🤖💰');



async function robo() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized',],
  });
  const page = await browser.newPage();
  //const busca = readlineSync.question('Qual receita deseja?');
  const busca = 'bolo';

  const qualquerUrl = `https://www.tudogostoso.com.br/busca?q=${busca}`;

  await page.tracing.start({ path: `${__dirname}/trace.json` });

  await page.setDefaultNavigationTimeout(0); page.setDefaultNavigationTimeout(999999);
  await page.goto(qualquerUrl);
  

  page.on('load', () => {
    if (!!document.querySelector('.ilabspush-chrome-style-notification-btn.ilabspush-btn-close'))
      page.click('.ilabspush-chrome-style-notification-btn.ilabspush-btn-close')
  });

  //await page.pdf({ path: `${__dirname}/page.pdf` });

  const totalDeReceitas = await page.evaluate(() => {
    return document.querySelector('span.num').innerHTML.split(' ')[1];
  });

  const receitas = await page.evaluate(() => {
    const titulos = [];
    for (let i = 0; i < 15; i++) {
      titulos.push(document.querySelectorAll('div.col-7.p-0.px-2.recipe-box h4')[i].innerHTML);
    }
    return titulos;
  });
  await page.click('.card.recipe-card.recipe-card-with-hover a');
  console.log(`Total de resultados: ${totalDeReceitas}`)
  console.log('Receitas:', receitas);
  await page.tracing.stop();
  //  await browser.close();
}

robo();