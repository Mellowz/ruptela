'use strict';

/**
 * Module dependencies
 */
const Command = require('../command'),
    Payload_16 = require('../payload/command_16');

/**
 * This class handles payload for command 1 and 68
 */
class Command_16 extends Command {

    /**
     * Set payload for command 36
     *
     * @param {Payload_16} payload
     */
    constructor() {
        super(new Payload_16());
    }

    /**
     * Execute command
     * Process buffer in order to extract the command's payload
     *
     * @param {Iterator} bufIt
     */
    execute(bufIt) {
        //set acknowledgement
        this.ack = Buffer.from("00034349862D", "hex");
    }
}

/**
 * Expose class
 */
module.exports = Command_16