import { Currency, CryptoCurrency } from './types.cjs';
export declare const convert: (from: Currency, to: Currency, amount: number) => Promise<number>;
export declare const convertCrypto: (from: CryptoCurrency, to: CryptoCurrency, amount: number) => Promise<number>;
export * from './supportedCurrencies.cjs';
export * from './types.cjs';
