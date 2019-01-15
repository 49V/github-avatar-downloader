var request = require('request');
var secrets = require('./secrets');

(function getRepoContributors (callback = grabContributors) {
  var repoOwner = process.argv[2];
  var repoName = process.argv[3];

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

  return;
})();

function downloadImageByUrl(url, fileName) {
  var fs = require('fs');
  var directory = './avatars'
  
  var filePath = `${directory}/${fileName}`;
  console.log(filePath);

  if(!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  request.get(url)
    .on('error', function(err) {
      throw err;
    })
    .on('response', function(response) {
      if(response.statusCode !== 200){
        console.log('Response Status Code: ', response.statusCode);
      }
      })
    .pipe(fs.createWriteStream(filePath));
}

function grabContributors (contributors, result) { 
  
  contributors.forEach( function({login, avatar_url}) {
    var fileName = `${login}.png`;
    downloadImageByUrl(avatar_url, fileName);
  });

  return;

}