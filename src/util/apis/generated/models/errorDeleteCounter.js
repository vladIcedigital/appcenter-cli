/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorDeleteCounter.
 */
class ErrorDeleteCounter {
  /**
   * Create a ErrorDeleteCounter.
   * @member {string} [appId]
   * @member {string} [errorGroupId]
   * @member {string} [errorId]
   * @member {number} [errorsDeleted]
   * @member {number} [attachmentsDeleted]
   * @member {number} [blobsSucceeded]
   * @member {number} [blobsFailed]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorDeleteCounter
   *
   * @returns {object} metadata of ErrorDeleteCounter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorDeleteCounter',
      type: {
        name: 'Composite',
        className: 'ErrorDeleteCounter',
        modelProperties: {
          appId: {
            required: false,
            serializedName: 'appId',
            type: {
              name: 'String'
            }
          },
          errorGroupId: {
            required: false,
            serializedName: 'errorGroupId',
            type: {
              name: 'String'
            }
          },
          errorId: {
            required: false,
            serializedName: 'errorId',
            type: {
              name: 'String'
            }
          },
          errorsDeleted: {
            required: false,
            serializedName: 'errorsDeleted',
            type: {
              name: 'Number'
            }
          },
          attachmentsDeleted: {
            required: false,
            serializedName: 'attachmentsDeleted',
            type: {
              name: 'Number'
            }
          },
          blobsSucceeded: {
            required: false,
            serializedName: 'blobsSucceeded',
            type: {
              name: 'Number'
            }
          },
          blobsFailed: {
            required: false,
            serializedName: 'blobsFailed',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorDeleteCounter;