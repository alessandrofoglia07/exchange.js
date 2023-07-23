import { Currency, CryptoCurrency } from './types.js';
export declare const convert: (from: Currency, to: Currency, amount: number) => Promise<number>;
export declare const convertCrypto: (from: CryptoCurrency, to: CryptoCurrency, amount: number) => Promise<number>;
export * from './supportedCurrencies.js';
export * from './types.js';
