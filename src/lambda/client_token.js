var braintree = require("braintree")
var gateway = braintree.connect({
    accessToken: process.env.BRAINTREE_TOKEN
});

export function handler(event, context, callback) {
    return gateway.clientToken.generate({}).then(result => {
        const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: result.clientToken
        }
        callback(null, response)
    });
}