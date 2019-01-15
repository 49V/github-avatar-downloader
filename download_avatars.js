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
    var repos = JSON.parse(body);
    
    repos.forEach(function(repo) {
      console.log(repo.avatar_url);
    });
  });
}

getRepoContributors("jquery", "jquery", function(error, result){ 
  console.log(result);
});

console.log('Welcome to the GitHub Avatar Downloader');