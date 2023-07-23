"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCrypto = exports.convert = void 0;
const puppeteer_1 = require("puppeteer");
const cheerio_1 = require("cheerio");
const supportedCurrencies_js_1 = require("./supportedCurrencies.cjs");
const convert = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://www.google.com/search?q=${from}+to+${to}+&hl=en`;
    if (!supportedCurrencies_js_1.supportedCurrencies.includes(from))
        throw new Error(`Currency ${from} is not supported.`);
    if (!supportedCurrencies_js_1.supportedCurrencies.includes(to))
        throw new Error(`Currency ${to} is not supported.`);
    try {
        // to bypass the bot detection from google
        const browser = yield (0, puppeteer_1.launch)({ headless: 'new' });
        const page = yield browser.newPage();
        yield page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36');
        yield page.goto(url);
        yield new Promise(resolve => setTimeout(resolve, 1000));
        const content = yield page.content();
        const $ = (0, cheerio_1.load)(content);
        yield browser.close();
        const result = parseFloat($('.SwHCTb').data('value'));
        return result * amount;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.convert = convert;
const convertCrypto = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://www.google.com/search?q=${from}+to+${to}+&hl=en`;
    if (!supportedCurrencies_js_1.supportedCryptoCurrencies.includes(from))
        throw new Error(`Currency ${from} is not supported.`);
    if (!supportedCurrencies_js_1.supportedCryptoCurrencies.includes(to))
        throw new Error(`Currency ${to} is not supported.`);
    try {
        // to bypass the bot detection from google
        const browser = yield (0, puppeteer_1.launch)({ headless: 'new' });
        const page = yield browser.newPage();
        yield page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36');
        yield page.goto(url);
        yield new Promise(resolve => setTimeout(resolve, 1000));
        const content = yield page.content();
        const $ = (0, cheerio_1.load)(content);
        yield browser.close();
        const result = parseFloat($('.pclqee').text());
        return result * amount;
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.convertCrypto = convertCrypto;
__exportStar(require("./supportedCurrencies.cjs"), exports);
__exportStar(require("./types.cjs"), exports);
