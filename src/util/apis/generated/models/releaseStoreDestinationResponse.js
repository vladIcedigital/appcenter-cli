/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ReleaseStoreDestinationResponse.
 */
class ReleaseStoreDestinationResponse {
  /**
   * Create a ReleaseStoreDestinationResponse.
   * @property {string} id Unique id for the release destination
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseStoreDestinationResponse
   *
   * @returns {object} metadata of ReleaseStoreDestinationResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseStoreDestinationResponse',
      type: {
        name: 'Composite',
        className: 'ReleaseStoreDestinationResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseStoreDestinationResponse;
