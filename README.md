<div align='center'>

<br>

# **exchange.js**

**exchange.js** is a Node.js currencies _(and in future cryptocurrencies)_ converter.

[![npm version](https://img.shields.io/npm/v/exchange.js.svg?style=flat-square)](https://www.npmjs.org/package/exchange.js)
[![install size](https://packagephobia.com/badge?p=exchange.js@latest)](https://packagephobia.com/result?p=exchange.js@latest)
[![GitHub](https://img.shields.io/github/license/alessandrofoglia07/exchange.js)](https://github.com/alessandrofoglia07/exchange.js/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/alessandrofoglia07/exchange.js)](https://github.com/alessandrofoglia07/exchange.js)

<br>
</div>

## **Disclaimer**

This package makes use of puppeteer to scrape the data from **www.google.com**. <br>This package is not affiliated with Google in any way and it **should not be used for commercial purposes, but only for educational purposes**.<br> The author of this package is not responsible for any damage caused by the use of this package.

## **Installation**

```bash
npm install exchange.js
```

## Loading the module

exchange.js supports both CommonJS and ESM.

### ESM / Typescript (Recommended)

```typescript
import { convert } from 'exchange.js';
```

### CommonJS

```javascript
const { convert } = require('exchange.js');
```

## **Usage**

### **convert()**

```typescript
import { convert } from 'exchange.js';

// convert(from: string (Currency type), to: string (Currency type), amount: number) => Promise<number>
convert('USD', 'EUR', 10).then((result) => {
    console.log(result); // This will log the value of 10 USD in EUR
});
```

### **convertCrypto()**

```typescript
import { convertCrypto } from 'exchange.js';

// convertCrypto(from: string (Currency type), to: string (Currency type), amount: number) => Promise<number>
convertCrypto('BTC', 'ETH', 10).then((result) => {
    console.log(result); // This will log the value of 10 BTC in ETH
});
```

### Supported currencies / cryptocurrencies

```typescript
import { supportedCurrencies, supportedCryptoCurrencies } from 'exchange.js';

console.log(supportedCurrencies);
// This will log an array of supported currencies

console.log(supportedCryptoCurrencies);
// This will log an array of supported cryptocurrencies
```

### Typescript support (TS only)

```typescript
import { Currency } from 'exchange.js';

const currency1: Currency = 'USD';
const currency2: Currency = 'EUR';

convert(currency1, currency2, 10).then((result) => {
    console.log(result); // This will log the value of 10 USD in EUR
});
```

## License

[MIT](https://github.com/alessandrofoglia07/nodejs-geolocation/blob/main/LICENSE)
