var request = require('request');

function getRepoContributors (repoOwner, repoName, callback) {
  
}

getRepoContributors("jquery", "jquery", function(err, result){ 
  console.log(`Errors: ${err}`);
  console.log(`Result: ${result}`);
});

console.log('Welcome to the GitHub Avatar Downloader');