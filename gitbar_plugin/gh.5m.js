#!/usr/bin/env /usr/local/bin/node

/*
# <bitbar.title>GitBar</bitbar.title>
# <bitbar.version>v1.4</bitbar.version>
# <bitbar.author>Dan Cadden</bitbar.author>
# <bitbar.author.github>shikkic</bitbar.author.github>
# <bitbar.desc>Quick check your Github stats</bitbar.desc>
# <bitbar.image>http://www.hosted-somewhere/pluginimage</bitbar.image>
# <bitbar.dependencies>node, gh-scrape</bitbar.dependencies>
# <bitbar.abouturl>https:/github.com/shikkic</bitbar.abouturl>
*/

// Import User Setting
require('dotenv').config({path: __dirname+'/../.env'});
const userUrl = process.env.USER_URL;
const contributionGoalTracking = process.env.CONTRIBUTION_GOAL_TRACKING;
const contributionGoal = process.env.CONTRIBUTION_GOAL;
const compactUI = process.env.COMPACT_UI;
    
// Font, Color, and Emoji Settings
const redText = "| color=red size=13",
    normalText = "| size=13",
    boldText = "| color=black size =13",
    heartEmoji = String.fromCharCode(0xD83D, 0xDC9F),
    brokenHeartEmoji = String.fromCharCode(0xD83D, 0xDC94);

// Import Github Scraping Library
var gh = require('gh-scrape'),
    visibleEmoji; 

// Check to Make Sure User Set Default Configs    
if (userUrl === "http://github.com/<YOUR_GITHUB_NAME_HERE>") {
    console.log(brokenHeartEmoji, "Please Set the Default Configs", brokenHeartEmoji);
	process.exit()
}

// Scrape Github Stats for <userUrl> 
gh.scrapeContributionDataAndStats(userUrl, function(data) { 
    // Validate Request Data Exists
    if (data) {
        // Retrive Request Data
        var commitsToday = data.commitsToday,
            currentStreak = data.statsData.currentStreak,
            totalContributions = data.statsData.totalContributions;
        
        // Set Text Color Variables 
        var contributionsTodayColor = commitsToday ? normalText : redText,
            currentStreakColor = currentStreak ? normalText : redText,
            totalContributionsColor = totalContributions ? normalText : redText; 

        // Set Displayed Emoji
        var visibleEmoji = data.commitsToday ? heartEmoji : brokenHeartEmoji;

        // Log Output To Bitbar
        if (compactUI == 'true') {
            console.log(visibleEmoji + " " + commitsToday + contributionsTodayColor);
            console.log("---");
            console.log("Contributions Today: ", commitsToday, contributionsTodayColor);
        } else {
            console.log(visibleEmoji, " Contributions Today: ", commitsToday, visibleEmoji, contributionsTodayColor);
            console.log("---");
        }
        console.log("Current Streak: ", currentStreak, currentStreakColor);
        console.log("Total Contributions: ", totalContributions, totalContributionsColor);
        
		// Log Contribution Goal tracking if enabled
        if (contributionGoalTracking) {
            console.log("---");
            console.log("Contribution Goal: ", contributionGoal, normalText);
            console.log((totalContributions / contributionGoal * 100).toFixed(2) + "% complete " + boldText); 
        }
    } else {
        console.log("error " + brokenHeartEmoji, redText);
    }

});
