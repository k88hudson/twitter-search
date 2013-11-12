module.exports = function(){
  return {
    index: function(req, res) {
      res.render('index.html');
    },
    tweets: function(twitter) {
      return function(req, res) {
        twitter.search(req.query.search, { count: 100},  function(data) {
          var cleanData = [];

          if (data && data.statuses) {
            data.statuses.forEach(function(status) {
              var tweet = {};
              tweet.text = status.text;
              tweet.created_at = status.created_at;
              tweet.favorite_count = status.favorite_count;
              tweet.retweet_count = status.retweet_count;
              tweet.followers_count = status.user.followers_count;
              tweet.friends_count = status.user.friends_count;
              tweet.listed_count = status.user.listed_count;
              tweet.statuses_count = status.user.statuses_count;
              tweet.screen_name = status.user.screen_name;
              cleanData.push(tweet);
            });
          }
          return res.json(cleanData);
        });
      };
    }
  };
};
