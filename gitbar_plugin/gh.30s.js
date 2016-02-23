#!/usr/bin/env /usr/local/bin/node

/*
# <bitbar.title>GitHubBar</bitbar.title>
# <bitbar.version>v1.0</bitbar.version>
# <bitbar.author>Dan Cadden</bitbar.author>
# <bitbar.author.github>shikkic</bitbar.author.github>
# <bitbar.desc>Quick check your Github stats</bitbar.desc>
# <bitbar.image>http://www.hosted-somewhere/pluginimage</bitbar.image>
# <bitbar.dependencies>node, gh-scrape</bitbar.dependencies>
# <bitbar.abouturl>https:/github.com/shikki</bitbar.abouturl>
*/

// Define Constants
const redText = "| color=red",
    greenText = "| color=green",
    userUrl = "http://www.github.com/shikkic",
    heartEmoji = String.fromCharCode(0xD83D, 0xDC9F),
    brokenHeartEmoji = String.fromCharCode(0xD83D, 0xDC94);

// Import Github Scraping Library
var gh = require('gh-scrape'),
    visibleEmoji; 

// Scrape Github Stats for <userUrl> 
gh.scrapeContributionDataAndStats("http://www.github.com/shikkic", function(data) { 

    // Validate Request Data Exists
    if (data) {
        // Retrive Request Data
        var commitsToday = data.commitsToday,
            currentStreak = data.statsData.currentStreak,
            totalContributions = data.statsData.totalContributions;
        
        // Set Text Color Variables 
        var contributionsTodayColor = commitsToday ? greenText : redText,
            currentStreakColor = currentStreak ? greenText : redText,
            totalContributionsColor = totalContributions ? greenText : redText; 

        // Set Displayed Emoji
        var visibleEmoji = data.commitsToday ? heartEmoji : brokenHeartEmoji;

        // Log Output To Bitbar
        console.log(visibleEmoji, "Contributions Today: ", commitsToday, visibleEmoji, contributionsTodayColor);
        console.log("---");
        console.log("Current Streak: ", currentStreak, currentStreakColor);
        console.log("Total Contributions: ", totalContributions, totalContributionsColor);
    } else {
        console.log(brokenHeartEmoji + "error" + brokenHeartEmoji);
    }

});
