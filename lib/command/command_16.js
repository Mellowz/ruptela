'use strict';

/**
 * Module dependencies
 */
const Command = require('../command')

/**
 * This class handles payload for command 1 and 68
 */
class Command_16 extends Command {

    // /**
    //  * Set payload for command 1 and 68
    //  *
    //  * @param {Payload_1_68} payload
    //  */
    // constructor(payload) {
    //     //check if payload is truly a payload for command 1 and 68
    //     if (!(payload instanceof Payload_1_68)) {
    //         throw new Error("Command_1_68 payload must be an instance of Payload_1_68");
    //     }
    //     super(payload);
    // }

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