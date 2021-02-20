'use strict';

/**
 * Module dependencies
 */
const Command = require('../command'),
      Payload_36 = require('../payload/command_36');

/**
 * This class handles payload for command 36 and 136
 */
class Command_36 extends Command {


    /**
     * Set payload for command 36
     *
     * @param {Payload_36} payload
     */
    constructor() {
        super(new Payload_36());
    }
    /**
     * Execute command
     * Process buffer in order to extract the command's payload
     *
     * @param {Iterator} bufIt
     */
    execute(bufIt) {
        //get command payload fields
        const payloadFields = this.payload.fields;

        //get end of buffer
        const bufEnd = bufIt.end - 2;

        //read records left flag
        this.data.sub_command_id = bufIt.readNext(payloadFields.sub_command_id);

        if (this.data.sub_command_id !== 0 && this.data.sub_command_id !== 1) {
            throw new Error("Payload: Records left flag is not valid");
        }

        //timestamps
        this.data.timestamp = bufIt.readNext(payloadFields.timestamp);
        if (this.data.timestamp < 1) {
            throw new Error("Payload: timestamp are not found");
        }

        //Driver Register
        this.data.driver_reg_status = bufIt.readNext(payloadFields.driver_reg_status);
        if (this.data.sub_command_id !== 0 && this.data.sub_command_id !== 1) {
            throw new Error("Payload: Driver Register invalid ");
        }

        //Card Status
        this.data.card_status = bufIt.readNext(payloadFields.card_status);
        if (this.data.card_status !== 0 && this.data.card_status !== 1) {
            throw new Error("Payload: card status invalid ");
        }

        //Track identifier
        this.data.track_identifier = bufIt.readNext(payloadFields.track_identifier);
        if (this.data.track_identifier < 1) {
            throw new Error("Payload: Track identifier  invalid ");
        }

        //Track 1 length
        this.data.track1_len = bufIt.readNext(payloadFields.track1_len);
        if (this.data.track1_len < 1) {
            throw new Error("Payload: Track1 are not found");
        }
        //Track 1
        this.data.track1_data = bufIt.readNext(this.data.track1_len).toString();

        //Track 2 length
        this.data.track2_len = bufIt.readNext(payloadFields.track2_len);
        if (this.data.track2_len < 1) {
            throw new Error("Payload: Track2 are not found");
        }
        //Track 1
        this.data.track2_data = bufIt.readNext(this.data.track2_len).toString();


        //Track 3 length
        this.data.track3_len = bufIt.readNext(payloadFields.track3_len);
        if (this.data.track3_len < 1) {
            throw new Error("Payload: Track2 are not found");
        }
        //Track 1
        this.data.track3_data = bufIt.readNext(this.data.track3_len).toString();
        console.log(this.data);
        //set acknowledgement
        this.ack = Buffer.from("000288015385", "hex");
    }
}

/**
 * Expose class
 */
module.exports = Command_36