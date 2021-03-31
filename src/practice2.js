const axios = require("axios");

const urlToFetch = "https://api.pro.coinbase.com/products";
/**
 * create a function, getCurrencies that uses the above url
 * fetch and obtain the display_name, then sort by the display name and return
 * the first 5
 * the documentation for provided url is here
 * https://docs.pro.coinbase.com/#get-products
 */

// the following should work and obtain the same results
getCurrencies().then(console.log); //> [ 'AAVE/BTC', 'AAVE/EUR', 'AAVE/GBP', 'AAVE/USD', 'ADA/BTC' ]
