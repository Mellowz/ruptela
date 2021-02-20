'use strict';

/**
 * Module dependencies
 */
const Base = require('./lib/base');
const Crc = require('./lib/crc');
const endOfLine = require('os').EOL;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

try {
    readline.question(`Please input data in hex format? ${endOfLine}`, (bufferStr) => {
        readline.close();
        console.log(`recevied   ${bufferStr}`);
        let buf = Buffer.from(bufferStr, 'hex');
        console.log(Crc.calculate(buf.slice(2)));
    })


} catch (error) {
    //Return Error object
    return { error: error };
}