const {chromium} = require ('playwright');

(async ()=> {


    const browser = await chromium.launch({headless:false,slowMo: 400} );
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    
    // use once to only use the listener once
    // accept dialog
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');


    // enter text and accept dialog
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('my text is this');
    });
    await page.click('#promtButton');
    
    
    
    
    
    await browser.close();
})();
