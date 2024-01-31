const fs = require('fs-extra');
const path = require('path');
const markdownFile = require('../../helper/file/markdown_file');
let outputMarkdown = (function () {
    let setCountryName = function (country) {
        return country.replace(/\s/g, '_').toLowerCase();
    }
    let setIndexPath = function () {
        return `README.md`;
    }
    let setPublicContributionsPath = function (country) {
        let fileName = setCountryName(country)
        return `docs/public_contributions/${fileName}.md`;
    }
    let setTotalContributionsPath = function (country) {
        let fileName = setCountryName(country)
        return `docs/total_contributions/${fileName}.md`;
    }
    let setFollowersPath = function (country) {
        let fileName = setCountryName(country)
        return `docs/followers/${fileName}.md`;
    }
    let saveIndexMarkdownFile = async function (markdown) {
        let indexPath = setIndexPath();
        await markdownFile.outputMarkdownFile(indexPath, markdown);
        let docsPath = path.join('docs', 'index.md');
        await fs.copy(indexPath, docsPath);
    }
    let savePublicContributionsMarkdownFile = async function (country, markdown) {
        await markdownFile.outputMarkdownFile(setPublicContributionsPath(country), markdown);
    }
    let saveTotalContributionsMarkdownFile = async function (country, markdown) {
        await markdownFile.outputMarkdownFile(setTotalContributionsPath(country), markdown);
    }
    let saveFollowersMarkdownFile = async function (country, markdown) {
        await markdownFile.outputMarkdownFile(setFollowersPath(country), markdown);
    }
    return {
        saveIndexMarkdownFile: saveIndexMarkdownFile,
        savePublicContributionsMarkdownFile: savePublicContributionsMarkdownFile,
        saveTotalContributionsMarkdownFile: saveTotalContributionsMarkdownFile,
        saveFollowersMarkdownFile: saveFollowersMarkdownFile,
    };
})();
module.exports = outputMarkdown;