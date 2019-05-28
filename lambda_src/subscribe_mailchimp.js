require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');

exports.handler = function (event, context, callback) {

    const send = body => {
        const result = {
            statusCode: 200,
            body: JSON.stringify(body)
        };
        
        if(process.env.NODE_ENV === "development") {
            result.headers ={
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type"
            };
        }

        callback(null, result);
    }

    // Do anything only if this is a POST request
    if (event.httpMethod !== 'POST' || !event.body) {
        send({ message: 'The request must be of type POST!' });

        return;
    };

    // Parse the body contents into an object
    const data = JSON.parse(event.body);

    // Check to see if we got the email
    if (!data.email) {
        console.error('Email address is missing.');
        send({ message: 'Missing email address!' });

        return;
    }

    // Load the url, api kei and list id from netlify environment variables
    const { API_KEY, LIST_ID } = process.env;
    const dataCenter = API_KEY.substring(API_KEY.lastIndexOf('-') + 1);
    const md5Email = crypto.createHash('md5').update(data.email).digest("hex");

    const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${md5Email}`;

    axios.put(url,
        {
            email_address: data.email,
            status_if_new: 'subscribed'
        },
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,
            }
        }
    )
        .then(res => send({ message: 'Successfully subscribed!' }))
        .catch(error => {
            console.log(error);
            send({ message: 'Failed to subscribe user!' })
        });
}