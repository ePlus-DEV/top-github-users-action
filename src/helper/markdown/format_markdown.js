let formatMarkdown = function () {
    let capitalizeTheFirstLetterOfEachWord = function (words) {
        let separateWord = words.toLowerCase().split(' ');
        for (let i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(' ');
    }
    let breakWords = function (words, numberOfWords) {
        let separateWord = words.toLowerCase().split(' ');
        let sentence = ``;
        let iterations = 1;
        for (const word of separateWord) {
           if(iterations === numberOfWords){
               iterations = numberOfWords;
               sentence  = sentence + `${capitalizeTheFirstLetterOfEachWord(word).substring(0, 20)}<br/>`;
           } else {
               iterations++;
               sentence  = sentence + `${capitalizeTheFirstLetterOfEachWord(word).substring(0, 20)} `;
           }
        }
        return sentence
    }
    let getDate = function () {
        let date = new Date();
        let time = date.toLocaleString('en-US', { timeZone: 'UTC', hour: 'numeric', minute: 'numeric', hour12: true })
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${time} UTC`
    }
    let getCompany = function (company) {
        if (company === 'undefined value') {
            return `No Company`;
        } else {
            company = company.replace(/[^@a-zA-Z0-9\s]/g, '');
            company = company.replace(/[\n\r]/g, '');
            return breakWords(company, 4);
        }
    }
    let getName = function (name) {
        if(name === 'undefined value'){
            return `No Name`;
        } else {
            name = name.replace(/[^@a-zA-Z0-9\s]/g, '');
            name = name.replace(/[\n\r]/g, '');
            name = name.replace('<>', '-');
            return name
        }
    }
    let getLocationName = function (name) {
        name = name.replace(/[^@a-zA-Z0-9\s]/g, '');
        name = name.replace(/[\n\r]/g, '');
        name = name.replace('<>', '-');
        return name
    }
    let getTwitterUsername = function (twitterUsername) {
        if(twitterUsername === 'undefined value'){
            return `No Twitter Username`;
        } else {
            return `<a target="_blank" href="https://twitter.com/${twitterUsername}">${twitterUsername}</a>`
        }
    }
    let getLocations = function (locationDataModel) {
        let locations = locationDataModel.locations;
        let placesString = ``;
        for(const location of locations){
            if(location === locations[0]) {
                placesString = placesString +  `\`${capitalizeTheFirstLetterOfEachWord(location)}\` and cities`;
            } else {
                placesString = placesString + ` \`${capitalizeTheFirstLetterOfEachWord(location)}\``
            }
        }
        placesString = placesString.replace(/[^a-zA-Z0-9\s]/g, '');
        placesString = placesString.replace('<3', '');
        placesString = placesString.replace(/[\n\r]/g, '');
        placesString = placesString.replace('<>', '-');
        return placesString
    }
    let getMinimumFollowersRequirement = function (readCacheResponseModel) {
        let users = readCacheResponseModel.users;
        users.sort((a, b) => parseFloat(b.followers) - parseFloat(a.followers));
        return users[users.length - 1].followers;
    }
    let getCountryName = function (country) {
        return country.replace(/\s/g, '_').toLowerCase();
    }
    let getNumberOfCities = function (readConfigResponseModel) {
        let numberOfCities = 0;
        for(const locationDataModel of readConfigResponseModel.locations) {
            for (const location of locationDataModel.locations) {
                if (locationDataModel.country !== location) {
                    numberOfCities++;
                }
            }
        }
        return numberOfCities;
    }
    return {
        capitalizeTheFirstLetterOfEachWord: capitalizeTheFirstLetterOfEachWord,
        breakWords: breakWords,
        getDate: getDate,
        getCompany: getCompany,
        getName: getName,
        getTwitterUsername: getTwitterUsername,
        getLocations: getLocations,
        getLocationName: getLocationName,
        getMinimumFollowersRequirement: getMinimumFollowersRequirement,
        getCountryName: getCountryName,
        getNumberOfCities: getNumberOfCities

    };
}();
module.exports = formatMarkdown;
