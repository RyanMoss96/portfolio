// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require("aws-sdk");
var ses = new aws.SES({ region: "eu-west-2" });
exports.handler = async function (event) {
  var params = {
    Destination: {
      ToAddresses: ["mail@ryanmoss.co.uk"],
    },
    Message: {
      Body: {
        Text: { Data: "Test" },
      },

      Subject: { Data: "Test Email" },
    },
    Source: "mail@ryanmoss.co.uk",
  };
 
  return ses.sendEmail(params).promise()
};
