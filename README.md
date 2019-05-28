# Netlify Under Construction Starter

Simple Under Construction website starter with user subscription form that can be deployed on [Netlify](https://www.netlify.com/).

## Why?

Simple *coming soon* or *under construction* websites can be freely hosted on a number of static website hosting providers but user subscription forms usually include calls to either email marketing services APIs, private databases, etc., which may include sensitive data such as API keys.

With serverless lambda functions we can benefit from running sensitive backend code on a static website provider such as Netlify. Check out more details [here](https://www.netlify.com/docs/functions/).

## Getting Started

Fork the project into your own repository. Note that Netlify supports drag & drop deployments from your local hard drive but serverless Lambda Functions won't work without linking to a repository.

#### Prerequisites

Create a Mailchimp account or use your existing one and get your [API Key](https://mailchimp.com/help/about-api-keys/) and [List ID](https://mailchimp.com/help/find-audience-id/) from your dashboard. This steps should be similar for any other mailing service you want to integrate. Make sure to check out their own documentation.

#### Local Development

To run the starter project on your machine, clone the repository on your local hard drive and create a new .env file in the root of the project with the following content:

```properties
LAMBDA_ENDPOINT=http://localhost:9000/subscribe_mailchimp    # or the name of your own lambda function file
API_KEY=XXXXXXXXXXX                                          # your Mailchimp API KEY
LIST_ID=XXXXXXXXX                                            # your Mailchimp List ID
```

Run `npm install` to install dependencies and `npm run dev` to start the webpack dev server and build and host the lambda functions. Access the page at http://localhost:8080/.

More details about building and running lambda functions [here](https://www.netlify.com/docs/functions/#tools-for-building-javascript-functions).

#### Installation

Create a new [Netlify](https://www.netlify.com/) account if you don't have one.

From your Netlify dashboard, connect your account with the project repository and add the following environmental variables: 
* Your Mailchimp `API_KEY` and `LIST_ID`
* A `LAMBDA_ENDPOINT` with the value of `.netlify/functions/subscribe_mailchimp`

Follow the Netlify documentation to add a custom domain name and SSL certificate before promoting your website.

Feel free to change the layout and/or email marketing service provider!

## Thanks

Big thanks to [bradtraversy](https://github.com/bradtraversy)'s excelent serverless lambda functions [video](https://www.youtube.com/watch?v=drJwMlD9Mjo) and [alexmacarthur](https://github.com/alexmacarthur)'s netlify lambda functions [example](https://github.com/alexmacarthur/netlify-lambda-function-example).

Image courtesy of [Pexels.com](https://www.pexels.com/photo/white-and-red-car-on-black-concrete-narrow-road-in-between-high-rise-buildings-photograph-129830/).

## Contributing

Feedaback, bug reports, pull requests are always welcome!

## License

MIT