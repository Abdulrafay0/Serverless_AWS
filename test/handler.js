'use strict';

module.exports.hello = async event => {
  let responsebody=''
  let statusCode= 0
  try {
    statusCode=200,
    responsebody= JSON.stringify('My first integration with serverless and AWS ')

  } catch (error) {
    responsebody='unable to catch data'
    statusCode = 403
  }
  const response = {
    headers: {
      "myheaders": "test"
    },
    statusCode:statusCode,
    body:responsebody
  }
  
  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
