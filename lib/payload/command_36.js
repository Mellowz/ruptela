'use strict';

/**
 * Module dependencies
 */
const RecordExtended = require('../record_extended');
const Segment = require('../segment');

/**
 * This class sets payload for command 68
 */
class Command_36 extends Segment {

    /**
     * Set payload
     */
    constructor() {
        super();

        /**
         * Set payload fields
         */
        this.fields = {
            //Flag can be 0 (no records left in flash) or 1.
            sub_command_id: 1,
            //Unix timestamp in seconds
            timestamp: 4,
            //Driver registration status
            driver_reg_status: 1,
            //Card Status
            card_status: 1,
            //Track identifier
            track_identifier: 1,
            //Track 1 length
            track1_len: 2,
            //Track 1 data depend on track1_len
            track1_data: null,
            //Track 2 length
            track2_len: 2,
            //Track 2 data depend on track1_len
            track2_data: null,
            //Track 3 length
            track3_len: 2,
            //Track 3 data depend on track1_len
            track3_data: null,
        };

        //this.fields.record = new RecordExtended();
    }
}

/**
 * Expose class
 */
module.exports = Command_36;