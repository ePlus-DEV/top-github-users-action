const git = require('../../core/git');
let commitGit = function () {
    let INSIGHT_BOT_USERNAME = process.env.INSIGHT_BOT_USERNAME || 'eplus-bot';
    let INSIGHT_BOT_EMAIL = process.env.INSIGHT_BOT_EMAIL || 'bot@eplus.dev';
    let commit = async function (message) {
        console.log(`Git Commit "${message}"`)
        try {
            await git.commit(INSIGHT_BOT_USERNAME, INSIGHT_BOT_EMAIL, message);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        commit: commit
    };
}();
module.exports = commitGit;