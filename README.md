# Twitter-Histogram
This app is created to calculate tweets per hour in a day of a Twitter user.

There will be 3 HTTP endpoints that can be access by users:
#### 1) HTTP endpoint 1: http://localhost:3000/
If you point your web browser to `http://localhost:3000/`, you should see the text of `Try /hello/:name`.

#### 2) HTTP endpoint 2: http://localhost:3000/hello/:name
If you point your web browser to `http://localhost:3000/hello/:name`, where `:name` is an input by the user that can consists character of a-z, A-Z, 0-9 and _ (underscore), you should see the text of `Hello :name`.

#### 3) HTTP endpoint 3: http://localhost:3000/histogram/:twitterid
If you point your web browser to `http://localhost:3000/histogram/:twitterid`, where `:twitterid` is an input by the user that can consists character of a-z, A-Z, 0-9 and _ (underscore), you should see a JSON response of number of tweets per hour the `:twitterid` posted within 24 hours. 

## Getting Started
#### 1) Download the file 
Download the entire folder which can be found at https://github.com/robinkjong/Twitter-Histogram. All the required NPMs have been pre-installed for your convinence.

#### 2) Getting Twitter Credentials
To get credentials for this app from Twitter, navigate to [Twitter’s apps page](https://apps.twitter.com/). On this page, click the button near the top right corner that says `Create New App`.

On the create an application page, fill in the necessary information and agree with the terms and conditions. When Twitter is done registering this new app, navigate to the `Keys and Access Tokens` tab. From this page, there are 4 important details, the Consumer Key, Consumer Secret, Access Token and Access Token Secret. To get the Access Token and Access Token Secret, navigate down to the page and click the button `Create my access token`. 

#### 3) Setting Up Environmental Variable File
Environmental variables are a set of values that are specific to the environment that they are running in. In this app, the Consumer Key, Consumer Secret, Access Token and Access Token Secret will be environmental variables in our app.

Create `api.env` in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE as shown below. Double or single quotes are not needed around the values.

```
consumer_key=<Insert Consumer Key HERE>
consumer_secret=<Insert Consumer Secret>
access_token_key=<Insert Access Token>
access_token_secret=<Insert Access Token Secret>
```
#### 4) Run 'app.js'
In Terminal (on macOS) or Command Prompt (on Windows), navigate the directory to the root directory of your project. Then, run the app with the `node` command by entering `node app.js`.

After running this command, if the credentials are correct, there should a line of code stating `Server is now running...`, and you are good to go.

## Acknowledgement
* Test designed by BigCommerce.

## Author
* Robin Ong - robinkjong@hotmail.com
