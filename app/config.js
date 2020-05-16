/*eslint no-process-env: "off"*/
const config = {};

config.github = {
    'postUrl' : process.env.GITHUB_HOST + '/repos/' + process.env.GITHUB_NAME + '/' + process.env.GITHUB_REPO + '/contents',
    'key' : process.env.GITHUB_KEY,
    'repo' : process.env.GITHUB_REPO,
    'name' : process.env.GITHUB_NAME,
    'user' : process.env.GITHUB_USER,
    'email' : process.env.GITHUB_USER_EMAIL,
    'host' : process.env.GITHUB_HOST,
    'branch' : process.env.GITHUB_BRANCH
};

config.api = {
    'port' : process.env.API_PORT
};

config.webmention = {
    'feed' : process.env.WEBMENTION_FEED,
    'interval' : process.env.INTERVAL_DURATION,
    'lastSentPath' : process.env.WEBMENTION_LAST_PATH
};

config.telegraph = {
    'token' : process.env.TELEGRAPH_TOKEN,
    'url' : process.env.TELEGRAPH_URL
};

module.exports = config;
