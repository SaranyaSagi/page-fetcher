const fs = require('fs')
const request = require('request');

//take 2 command lineargs
let args = process.argv.slice(2);

//url - http://www.example.edu/
//let localFilePath = ./index.html
let url = args[0]
let localFilePath = args[1]

//should download resource at url to local path on your machine ???
//after request is complete you need to take(GET) data you recieve...
//...write it to a file in local so index.html???

request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepae.
  if (!error) { //if not error
  let contentLen = response.headers['content-length']
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log(`Downloaded and saved ${contentLen} bytes to ${localFilePath}`)
    }
    })
  } else {
    console.log("invalid URL")
    process.exit();
  }
});

//Resources
//https://nodejs.dev/learn/writing-files-with-nodejs

//Tips
//Install and use request library - done
//Use node's file sytem (fs) module to write the file - done
//use the callback based approach we have been learning so far - done

// DO not use pipe function.
//Do not use sync functions like writefilesync.

//Output
//Downloaded and saved 3261 bytes to ./index.html

//How to get file size - used content-length 
//Look into Node's documentation
//there's a way to get stats about a file thats on your file system(index.html)
//However you may not need to do that if...
//...you think about the fact that 1 character = 1 byte. 



