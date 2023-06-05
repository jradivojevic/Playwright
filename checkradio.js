const {chromium, firefox} = require ('playwright');

(async ()=> {


    //onst browser = await chromium.launch({headless:false,slowMo: 100} );
    const browser = await firefox.launch({headless:false,slowMo: 100} );

    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
     //check the second checkboox
    const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    checks[1].check();
    checks[0].uncheck();

    //select radio button 
    const radios = await page.$$('#main div :nth-child(1) input[type="radio"]');
    await radios[1].check();

    
    
    
    
    //closing browser
    await browser.close();
})();

