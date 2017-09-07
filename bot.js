console.log("The bot is starting");

setInterval(function(){ 
    var Twit = require('twit');
    
    var T = new Twit({
        consumer_key: 'EpNcb7FPBbZpUBzC7RwBB6MmG',
        consumer_secret: 'AP0Pmwi911jH4Zxives7s2Ccj9VQHiNLg8Uf6PMZCW9BCVWEKU',
        access_token: '905516450949079041-MDC5TBd5RFgZvVH7FXusBSL2QFQOVIa',
        access_token_secret: '02YP10oRLDERX9elshwZP0xBteBYAKK3rpGxgL9lit2EU',
    });
    
    var number = Math.round(Math.random() * 10000);
    
    var tweet = {
        status: "Random Number: " + number
    };
    
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!")
        } else {
            console.log("It worked!");
        }
    }    
}, 5000);

