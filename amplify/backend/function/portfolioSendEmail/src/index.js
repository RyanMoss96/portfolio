var aws = require("aws-sdk");
var ses = new aws.SES({ region: "eu-west-2" });

exports.handler = async (event) => {
    const eventBody = JSON.parse(event.body);
    var params = {
        Destination: {
            ToAddresses: ["mail@ryanmoss.co.uk"],
        },
        Message: {
            Body: {
                Text: {
                    Data:
                        `A new Contact Form Submission has been received by ${eventBody.name} with the following email ${eventBody.email} and message ${eventBody.message}`
                },
            },
            Subject: { Data: `Contact Form Submission by ${eventBody.name}` },
        },
        Source: "mail@ryanmoss.co.uk",
    };

    const result = await ses.sendEmail(params).promise();

    console.log(result);

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "https://www.ryanmoss.co.uk",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(result),
    };
    return response;
};
