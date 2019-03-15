
EPIC-MAIL

[![Build Status](https://www.travis-ci.org/habinezadalvan/Epic-Mail.svg?branch=develop)](https://www.travis-ci.org/habinezadalvan/Epic-Mail)
[![Coverage Status](https://coveralls.io/repos/github/habinezadalvan/Epic-Mail/badge.svg?branch=ch-tests-work-%23164599870)](https://coveralls.io/github/habinezadalvan/Epic-Mail?branch=ch-tests-work-%23164599870)
[![Maintainability](https://api.codeclimate.com/v1/badges/b79352a37d48aa74aed3/maintainability)](https://codeclimate.com/github/habinezadalvan/Epic-Mail/maintainability)

**Epic-Mail** is a platform that allows user to communication and interact using emails/messages.

**Epic mail features**
1. user can create an account
2. user can login
3. user can create and sent messages
4. user can view messages
5. user can view sent messages
6. user can view unread messages
7. user can view draft messages
8. user can view read messages 
9. user can create groups 


**prerequisites**
1. Node
2. Postman

 Methods | Endpoints | functionality
--------- | --------- | -------------
POST | /api/v1/messages |Creates new messages	
GET | /api/v1/messages | Fetch all available messages
GET | /api/v1/messages/unread | Fetch all unread messages
DELETE | /api/v1/messages/:id | Deletes a specific message with a
GET | /api/v1/messages/messages/read | gets all messages with "read" status
GET | /api/v1/messages/draft/messages | gets all messages with "draft" status
GET | /api/v1/messages/:id | Gets a single message
```
```
**TOOLS USED**

**front-end**

HTML

CSS

**Backend**


**Language:**

Javascript

**Server environment:** 

Node.js 

**Back-end framework:**

Express

**Testing library:**

Mocha

**Back-end framework:** 

Express

**Testing library:** 

Mocha


Chai 
```
```

**Front-end deployment:** 

Github Pages link https://habinezadalvan.github.io/Epic-Mail/UI

**Back-end deployment:** 

Heroku link https://christian-epicmail.herokuapp.com/

**Continuous integration:** 

Travis CI

**Test coverage:**

nyc (A javascript library used to generate coverage reports)

**Test coverage badge:**


Coveralls 

**Getting Started**

This quick guide will take you through on how you can run this project on your local machine 
and TEST the functionality of all endpoints.

1. Make sure you have Node.js on you machine.

To download it click https://nodejs.org/en/

2. **Clone the project on your machine.**
  
git clone https://github.com/habinezadalvan/Epic-Mail.git
  

3. Do <npm install >
  
  To get dependencies
  
4. **Run <npm start> to run the server.**
  
    The server is set on localhost =3000 for this particular project
    So the part will be http://localhost:3000/
  
5. **Make sure you have postman app on you machine.**

  To download it follow the instructions on https://www.getpostman.com/
  
6. **Get on postman and test all the methods using the provided api endpoints at the beggining of this guide.**
```
  Example:
  Method: POST
  Path: http://localhost:3000/
  Endpoint: api/v1/messages
  
  ```
  
7. **Depending on the way this project is develop, models are ampty ARRAYs created to receive input from user.
**This means that to get any data you should first POST something.**

  So do POST on http://localhost:3000/api/v1/messages so that you can get them whenever you want to GET anything.
  
  -The following are the data struction for POST method
  
  1. **POST a message**
```  
  {
  
  "subject":"string",
  
  "message":"string"
  
  ”parentMessageId”:Integer,
  
  "status":"string"  // read, sent, unread/ draft
  
}
  
  ```
  
  2. **POST sign up user**
 ``` 
  {
	"email": "string",
	
	"firstName":"string",
	
	"lastName":"string",
	
	"password":"string",
	
 	 "confirmPassword":"string" 
	 
}
```


3.**POST login user**
```
 {
    "email": "string",
    
    "passWord":"string"
    
 }
 
 ```
NB: 
 1. **Here is an other option running the project with heroku**
 
    User https://christian-epicmail.herokuapp.com/ instead of http://localhost:3000/ 
    and add the rest of api endpoints as usual.
    
 2. **It would be better to view json result in your browser when you have jsonview chrome-extention in you chrom browser**.
    To install it look for JSONview on google.

8. **To run test**
<npm test>


**Contributor**

Christian habinezadalvan@gmail.com
