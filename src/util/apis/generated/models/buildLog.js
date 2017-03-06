/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the BuildLog class.
 * @constructor
 * @member {array} [value]
 * 
 */
function BuildLog() {
}

/**
 * Defines the metadata of BuildLog
 *
 * @returns {object} metadata of BuildLog
 *
 */
BuildLog.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BuildLog',
    type: {
      name: 'Composite',
      className: 'BuildLog',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = BuildLog;