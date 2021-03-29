var aws = require("aws-sdk");
var ses = new aws.SES({ region: "eu-west-2" });

exports.handler = async (event) => {
    var params = {
        Destination: {
            ToAddresses: ["mail@ryanmoss.co.uk"],
        },
        Message: {
            Body: {
                Text: { Data: 
                    `A new Contact Form Submission has been received by ${event.name} with the following email ${event.email} and message ${event.message}` },
            },

            Subject: { Data: `Contact Form Submission by ${event.name}` },
        },
        Source: "mail@ryanmoss.co.uk",
    };

    const result = await ses.sendEmail(params).promise()

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: result,
    };
    return response;
};
