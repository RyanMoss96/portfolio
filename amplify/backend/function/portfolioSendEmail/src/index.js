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

  const email = ses.sendEmail(params).promise()

  return email.then(result => {
      return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: event.body,
    };
  })
};
