var OANDAAdapter = require('oanda-adapter');
var ACCESS_TOKEN = ''
var ACCOUNT_ID = 1234567
var client = new OANDAAdapter({
    // 'live', 'practice' or 'sandbox'
    environment: 'practice',
    // Generate your API access in the 'Manage API Access' section of 'My Account' on OANDA's website
    accessToken: ACCESS_TOKEN,
});

client.subscribePrice(ACCOUNT_ID, "EUR_USD", function (tick) {
    console.log(tick)
}, this);
