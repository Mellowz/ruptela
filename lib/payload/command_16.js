'use strict';

/**
 * Module dependencies
 */
const Segment = require('../segment');

/**
 * This class sets payload for command 16
 */
class Command_16 extends Segment {

    /**
     * Set payload
     */
    constructor() {
        super();

        //this.fields.record = new RecordExtended();
    }
}

/**
 * Expose class
 */
module.exports = Command_16;