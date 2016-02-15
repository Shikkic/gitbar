#!/usr/bin/env /usr/local/bin/node

# <bitbar.title>GitHubBar</bitbar.title>
# <bitbar.version>v1.0</bitbar.version>
# <bitbar.author>Daniel Cadden</bitbar.author>
# <bitbar.author.github>shikkic</bitbar.author.github>
# <bitbar.desc>Quick check your Github stats</bitbar.desc>
# <bitbar.image>http://www.hosted-somewhere/pluginimage</bitbar.image>
# <bitbar.dependencies>node, gh-scrape</bitbar.dependencies>
# <bitbar.abouturl>https:/github.com/shikki</bitbar.abouturl>

var gh = require('gh-scrape'),
    userUrl = "http://www.github.com/shikkic",
    heartEmoji = String.fromCharCode(0xD83D, 0xDC9F); 

gh.scrapeContributionDataAndStats("http://www.github.com/shikkic", function(data) {
    if (data) {
        console.log(heartEmoji, "Contributions Today: ", data.commitsToday, heartEmoji);
        console.log("---");
        console.log("Current Streak: ", data.statsData.currentStreak);
        console.log("Total Contributions: ", data.statsData.totalContributions);
    } else {
        console.log(emjoi + "error");
    }
});
