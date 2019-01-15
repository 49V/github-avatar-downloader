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
    var contributors = JSON.parse(body);
    callback(contributors);
  });
}

getRepoContributors("jquery", "jquery", function(contributors, result) { 
  contributors.forEach(function(contributor) {
    console.log(contributor.avatar_url);
  });
});

console.log('Welcome to the GitHub Avatar Downloader');