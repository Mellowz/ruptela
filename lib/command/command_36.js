'use strict';

/**
 * Module dependencies
 */
const Command = require('../command')

/**
 * This class handles payload for command 36 and 136
 */
class Command_36 extends Command {

    /**
     * Execute command
     * Process buffer in order to extract the command's payload
     *
     * @param {Iterator} bufIt
     */
    execute(bufIt) {
        //set acknowledgement
        this.ack = Buffer.from("000288015385", "hex");
    }
}

/**
 * Expose class
 */
module.exports = Command_36