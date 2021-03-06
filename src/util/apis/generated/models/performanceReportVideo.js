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
 * Class representing a PerformanceReportVideo.
 */
class PerformanceReportVideo {
  /**
   * Create a PerformanceReportVideo.
   * @property {object} videoMetadata
   * @property {array} [videoMetadata.events]
   * @property {string} videoUrl
   */
  constructor() {
  }

  /**
   * Defines the metadata of PerformanceReportVideo
   *
   * @returns {object} metadata of PerformanceReportVideo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PerformanceReport_video',
      type: {
        name: 'Composite',
        className: 'PerformanceReportVideo',
        modelProperties: {
          videoMetadata: {
            required: true,
            serializedName: 'video_metadata',
            type: {
              name: 'Composite',
              className: 'PerformanceReportVideoVideoMetadata'
            }
          },
          videoUrl: {
            required: true,
            serializedName: 'video_url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PerformanceReportVideo;
