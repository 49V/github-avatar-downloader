var request = require('request');
var secrets = require('./secrets');

function getRepoContributors (repoOwner, repoName, callback) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,

    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${secrets.GITHUB_TOKEN}`
    }
  }
  request (options, function (error, response, body) {
    callback(error, body);
  });
}

getRepoContributors("jquery", "jquery", function(error, result){ 
  console.log(`Errors: ${error}`);
  console.log(`Result: ${result}`);
});

console.log('Welcome to the GitHub Avatar Downloader');