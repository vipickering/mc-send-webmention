// Send to Telegraph code here
const config = require(appRootDirectory + '/app/config.js');

exports.send = function send(feedItem) {
    const telegraph = config.telegraph;
    const github = config.github;

    //POST webmention to telegraph, then update the temp value for the date.
    axios.post(telegraph.url, {
        headers : {
            'User-Agent' : 'MC-Webmention'
        },
        form : {
            token : telegraph.token,
            source : webmentions[item].source,
            target : webmentions[item].target
        }
    })
        .then(updateWm())
        .catch(updateErr());
};