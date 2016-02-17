#!/usr/bin/env /usr/local/bin/node

/*
bitbar metadata
# <bitbar.title>GitHubBar</bitbar.title>
# <bitbar.version>v1.0</bitbar.version>
# <bitbar.author>Daniel Cadden</bitbar.author>
# <bitbar.author.github>shikkic</bitbar.author.github>
# <bitbar.desc>Quick check your Github stats</bitbar.desc>
# <bitbar.image>http://www.hosted-somewhere/pluginimage</bitbar.image>
# <bitbar.dependencies>node, gh-scrape</bitbar.dependencies>
# <bitbar.abouturl>https:/github.com/shikki</bitbar.abouturl>
*/

var gh = require('gh-scrape'),
    userUrl = "http://www.github.com/<YOUR USERNAME HERE>",
    heartEmoji = String.fromCharCode(0xD83D, 0xDC9F),
    brokenHeartEmoji = String.fromCharCode(0xD83D, 0xDC94),
    visibleEmoji; 

gh.scrapeContributionDataAndStats("http://www.github.com/shikkic", function(data) {
    if (data) {
        var commitsToday = data.commitsToday,
            currentStreak = data.statsData.currentStreak,
            totalContributions = data.statsData.totalContributions,
            visibleEmoji = data.commitsToday ? heartEmoji : brokenHeartEmoji;

        console.log(visibleEmoji, "Contributions Today: ", commitsToday, visibleEmoji);
        console.log("---");
        console.log("Current Streak: ", currentStreak + " days");
        console.log("Total Contributions: ", totalContributions);
    } else {
        console.log(brokenHeartEmoji + "error");
    }
});
