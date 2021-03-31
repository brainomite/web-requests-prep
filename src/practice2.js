const axios = require("axios");

const urlToFetch = "https://api.pro.coinbase.com/products";
/**
 * create a function, getCurrencies that uses the above url
 * fetch and obtain the display_name, base_currency, status
 * return one object per currency
 * documentation for provided url is here
 * https://docs.pro.coinbase.com/#get-products
 */

// the following should work and obtain the same results
getCurrencies().then(console.log); //> [ 'AAVE/BTC', 'AAVE/EUR', 'AAVE/GBP', 'AAVE/USD', 'ADA/BTC' ]
