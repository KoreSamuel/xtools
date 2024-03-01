#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const figlet = require('figlet');
const { Command } = require('commander');
const version = require('../package.json').version;
const program = new Command();
const QRCode = require('qrcode-terminal');
console.log(figlet.textSync("Hello Xtools"));
program
    .version(version)
    .description("A CLI tools for daily usage")
    .option("-qr, --qrcode <value>", "Create a file")
    .parse(process.argv);
const options = program.opts();
const generateQR = (text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield QRCode.generate(text, { small: true }, (code) => console.log(code));
    }
    catch (err) {
        console.error(err);
    }
});
if (options.qrcode) {
    console.log(options.qrcode);
    generateQR(options.qrcode);
}
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map