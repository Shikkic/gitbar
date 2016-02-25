#gitbar

:octocat: Gitbar is a plugin for [bitbar](https://github.com/matryer/bitbar) to quickly show your open soure github contribution stats and help set contribution goals, all on your Mac OS X Menu Bar. :octocat:

![dank](http://i.imgur.com/Tra1DEW.gif)

### Prerequisites
- Must be on Mac OSX (Snow Leopard or newer (>= 10.6))
- Have [bitbar](https://github.com/matryer/bitbar) installed
- Have [Node](https://nodejs.org/en/) and [NPM](http://blog.npmjs.org/post/85484771375/how-to-install-npm) installed

### Install

First download and install [bitbar](https://github.com/matryer/bitbar)

Clone the plugin repo:
```sh
$ git clone https://github.com/Shikkic/gitbar/
```

Inside the repo folder install the dependencies:
```sh
$ npm install
```

### Configure

In the `gitbar_plugin` folder edit the `gh.5m.js` file to include **your* username. You can also uncomment `contributionGoal` and code block on line 16 to enable goal tracking for your total commits:

```js
// User Settings
const userUrl = "http://github.com/<YOUR_GITHUB_NAME_HERE>";
//const contributionGoal = "YOUR_CONTRIBUTION_GOAL_HERE"; Optional Goal

...

/* Comment Out for Optional Goal Tracking
  console.log("---");
  console.log("Contribution Goal: ", contributionGoal, normalText);
  console.log((totalContributions / contributionGoal * 100) + "% complete " + boldText); 
*/
```

### Gotchas

If you have an error resulting from your path to node. Edit the shebang at the top of `gh.5m.js` to include the correct path.

To find the correct path simply run:
```
$ which -a node
```

### Dependencies

Obiviously [bitbar](https://github.com/matryer/bitbar)

I also use the [gh-scrape](https://github.com/Shikkic/gh-scrape) to crawl github and parse selected values from public github profiles. Feel free to contribute if you'd like!

> I use this module instead of using the github api for a few reasons. I wanted to make it as easy as possible to setup and requiring users to generate and input an api-key made the barrier of entry seem high. Also this allows us to only focus on publicly avialable contributions, which was the intended purpose anyway. 

#### Suggestions, comments?

Feel free to create an issue or reach out on the :speech_balloon: [bitbar slack](https://getbitbar.herokuapp.com/) @shikkic
