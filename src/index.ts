import { launch } from 'puppeteer';
import { load } from 'cheerio';
import { Currency, CryptoCurrency } from './types.js';
import { supportedCurrencies, supportedCryptoCurrencies } from './supportedCurrencies.js';

export const convert = async (from: Currency, to: Currency, amount: number) => {
    const url = `https://www.google.com/search?q=${from}+to+${to}+&hl=en`;

    if (!supportedCurrencies.includes(from)) throw new Error(`Currency ${from} is not supported.`);
    if (!supportedCurrencies.includes(to)) throw new Error(`Currency ${to} is not supported.`);

    try {
        // to bypass the bot detection from google
        const browser = await launch({ headless: 'new' });
        const page = await browser.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36');

        await page.goto(url);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const content = await page.content();

        const $ = load(content);

        await browser.close();

        const result = parseFloat($('.SwHCTb').data('value') as string);
        return result * amount;

    } catch (err: any) {
        throw new Error(err);
    }
};

export const convertCrypto = async (from: CryptoCurrency, to: CryptoCurrency, amount: number) => {
    const url = `https://www.google.com/search?q=${from}+to+${to}+&hl=en`;

    if (!supportedCryptoCurrencies.includes(from)) throw new Error(`Currency ${from} is not supported.`);
    if (!supportedCryptoCurrencies.includes(to)) throw new Error(`Currency ${to} is not supported.`);

    try {
        // to bypass the bot detection from google
        const browser = await launch({ headless: 'new' });
        const page = await browser.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36');

        await page.goto(url);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const content = await page.content();

        const $ = load(content);

        await browser.close();

        const result = parseFloat($('.pclqee').text() as string);
        return result * amount;
    } catch (err: any) {
        throw new Error(err);
    }
};

export * from './supportedCurrencies.js';
export * from './types.js';