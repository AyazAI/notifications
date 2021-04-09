/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
var axios = require("axios");
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/notification', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/notification/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/notification', function async(req, res) {
  // Add your code here
  const query = req.query;
  console.log(query);
  const firstName = query.firstName;
  const lastName = query.lastName;
  const phone = query.phone;
  
  const name = `${firstName} ${lastName}`;
  
  const config = {
      params: {
        api_key: "923319065280-7c56c36f-952c-4828-87a2-a67f59eb6c9e",
        sender: "Invitation from EzzyApp",
        mobile: phone,
        message: `Salam! ${name}. You have been invited to join EzzyApp. Download our app at https://play.google.com`
      }
    }

    try {
      
      await axios.get("https://sendpk.com/api/sms.php", config).then(response => {
      const data = response.data;
       
      res.json({
          success: "Your request for invitation was successful",
          msg: data,
        });
      })
       
    } catch (e) {
        console.log("Error is ", e);
        res.json({
          error: "Error while fulfulling your request",
          msg: e
        })
    } 
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/notification/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/notification', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/notification/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/notification', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/notification/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
