# gitbar

:octocat: A plugin for [BitBar](https://github.com/matryer/bitbar) to quickly show your open source GitHub contribution stats and help set contribution goals, all on your Mac OS X Menu Bar. :octocat:

Almost all of us have private repos we tend to work on, and it's really easy to neglect your OSS work. So, I created Gitbar to make daily public contributions a habit. Gitbar is a OSX Menu Bar utility that shows your daily GitHub stats, streaks, and contributions. You can even set contribution goals in the application.

![dank application screenshot](http://i.imgur.com/55GxUzy.gif)

### Prerequisites
- Must be on Mac OSX (Snow Leopard or newer (>= 10.6))
- Have [Node.js](https://nodejs.org/en/) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) installed

### Install

First, download and install [BitBar](https://github.com/matryer/bitbar).

Clone the plugin repo:
```sh
$ git clone https://github.com/Shikkic/gitbar/
```

Inside the repo folder, install the dependencies:
```sh
$ npm install
```

### Configure

In the root folder you'll need to modify the `.env` file with **your** GitHub username. Here you'll also be able to customize contribution goal tracking as well. Simply give the tracking value `TRUE` or `FALSE` to turn it on or off, respectively, and provide your ideal goal number to give yourself a completion percentage.

```bash
USER_URL="http://github.com/<YOUR_GITHUB_NAME_HERE>"
CONTRIBUTION_GOAL_TRACKING=TRUE
CONTRIBUTION_GOAL="1000"
```

Now, launch BitBar and select the `gitbar_plugin` folder as your Plugin Folder.

![Imgur](http://i.imgur.com/ni1YVGZ.gif)

### Gotchas

If you have an error resulting from your path to Node, edit the shebang at the top of `gh.5m.js` to include the correct path.

To find the correct path simply run:
```
$ which -a node
```

### Dependencies

Obviously [BitBar](https://github.com/matryer/bitbar).

I also use the [gh-scrape](https://github.com/Shikkic/gh-scrape) to crawl GitHub and parse selected values from public GitHub profiles. Feel free to contribute if you'd like!

I use this module instead of using the GitHub API for a few reasons. I wanted to make it as easy as possible to setup and requiring users to generate and input an API key made the barrier of entry seem high. Also, this allows us to only focus on publicly available contributions, which was the original intended purpose. 

#### Suggestions, comments?

Feel free to create an issue or reach out on the :speech_balloon: [BitBar Slack](https://getbitbar.herokuapp.com/) or Twitter [@shikkic](http://twitter.com/shikkic)!
