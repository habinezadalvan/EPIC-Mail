[![Build Status](https://www.travis-ci.org/habinezadalvan/Epic-Mail.svg?branch=develop)](https://www.travis-ci.org/habinezadalvan/Epic-Mail)

# Epic-Mail
**SHORT DESCRIPTION OF EPIC MAIL**
Epic mail application is a platform developed to help end user to communicate with friends and people from different places across the world in an email form. 
The user will be able to login, sign up, reset password whenever he/she wants or in case passoword was forgotten. User can see all received emails, access them,view them and delete them when he is willing. He can access all sent emails and access them, user can access drafts and trash files. Again the coolest part of epic mail is that you use can compose new emails, create groups and view the list of all groups. 
Last but not the least the epic mail has an attractive UI and easy to use.

**EPIC MAIL BACKEND**
**API Endpoints**

POST/api/v1/messages	:Creates new messages.
GET	/api/v1/messages	:Fetch all available messages.
GET/api/v1/messages/messages/unread :Fetch all unread messages
DELETE/api/v1/messages/:id		Deletes a specific message with a
GET/api/v1/messages/messages/read		gets all messages with "read" status
GET/api/v1/messages/draft/messages	gets all messages with "draft" status
GET/api/v1/messages/:id	Gets a single message

**TOOLS USED**

**Language:** Javascript
**Server environment:** Node.js 
**Back-end framework:** Express
**Testing library:** Mocha
**Assertion library:** Chai 

**Front-end deployment:** Github Pages link https://habinezadalvan.github.io/Epic-Mail/UI
**Back-end deployment:** Heroku link https://christian-epicmail.herokuapp.com/
EPIC Mail UI

// Expected tools to be used 
Continuous integration: Travis CI
Test coverage: nyc (A javascript library used to generate coverage reports)
Test coverage badge: Coveralls (It shows test coverage statistics)
//

**Getting Started**
This quick guide will take you through on how you can run this project on your local machine and TEST the functionality of all endpoints.
1. Make sure you have Node.js on you machine.

To download it click https://nodejs.org/en/

2. Clone the project on your machine.

  To clone, go in your terminal or command line and do < git clone https://github.com/habinezadalvan/Epic-Mail.git>

3. Do <npm install>.
  
  This command will help you get node_modules folder that contains of dev packages that allow you run the project.
  
4. Run <npm start> to run the server.
  
    The server is set on localhost =3000 for this particular project
    So the part will be http://localhost:3000/
  
5. Make sure you have postman app on you machine.

  To download it follow the instructions on https://www.getpostman.com/
  
6. Get on postman and test all the methods using the provided api endpoints at the beggining of this guide.

  Example:
  Method: POST
  Path: http://localhost:3000/
  Endpoint: api/v1/messages
  
7. Depending on the way this project is develop, models are ampty ARRAYs created to receive input from user. This means that to get any data you should first POST something. 

  So do POST on http://localhost:3000/api/v1/messages so that you can get them whenever you want to GET anything.
  
  -The following are the data struction for POST method
  
  1. POST a message
    {
	
	"subject":"string",
	"message":"string"
  ”parentMessageId”:Integer,
	"status":"string"  // read, sent, unread/ draft
	
}
    
  2. POST sign up user
  
  {
	"email": "string",
	"firstName":"string",
	"lastName":"string",
	"password":"string",
  "confirmPassword":"string"
}

3. POST login user
 {
    "email": "string",
    "passWord":"string"
 }
  
NB: 
 1. Here is an other option running the project with heroku
    User https://christian-epicmail.herokuapp.com/  in instead of http://localhost:3000/ and add the rest of api endpoints as usual.
    
 2. It would be better to view json result in your browser when you have jsonview chrome-extention in you chrom browser.
    To install it look for JSONview on google.

**Contributor**

Christian habinezadalvan@gmail.com
