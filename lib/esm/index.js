var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { launch } from 'puppeteer';
import { load } from 'cheerio';
import { supportedCurrencies, supportedCryptoCurrencies } from './supportedCurrencies.js';
export const convert = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://www.google.com/search?q=${from}+to+${to}+&hl=en`;
    if (!supportedCurrencies.includes(from))
        throw new Error(`Currency ${from} is not supported.`);
    if (!supportedCurrencies.includes(to))
        throw new Error(`Currency ${to} is not supported.`);
    try {
        // to bypass the bot detection from google
        const browser = yield launch({ headless: 'new' });
        const page = yield browser.newPage();
        yield page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36');
        yield page.goto(url);
        yield new Promise(resolve => setTimeout(resolve, 1000));
        const content = yield page.content();
        const $ = load(content);
        yield browser.close();
        const result = parseFloat($('.SwHCTb').data('value'));
        return result * amount;
    }
    catch (err) {
        throw new Error(err);
    }
});
export const convertCrypto = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://www.google.com/search?q=${from}+to+${to}+&hl=en`;
    if (!supportedCryptoCurrencies.includes(from))
        throw new Error(`Currency ${from} is not supported.`);
    if (!supportedCryptoCurrencies.includes(to))
        throw new Error(`Currency ${to} is not supported.`);
    try {
        // to bypass the bot detection from google
        const browser = yield launch({ headless: 'new' });
        const page = yield browser.newPage();
        yield page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36');
        yield page.goto(url);
        yield new Promise(resolve => setTimeout(resolve, 1000));
        const content = yield page.content();
        const $ = load(content);
        yield browser.close();
        const result = parseFloat($('.pclqee').text());
        return result * amount;
    }
    catch (err) {
        throw new Error(err);
    }
});
export * from './supportedCurrencies.js';
export * from './types.js';
