#!/usr/bin/env node

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

const generateQR = async (text: string) => {
  try {
    await QRCode.generate(text, { small: true });
  } catch (err) {
    console.error(err)
  }
}
if (options.qrcode) {
  console.log(options.qrcode);
  generateQR(options.qrcode)
}
if (!process.argv.slice(2).length) {
  program.outputHelp();
}