module.exports = function(){
  return {
    index: function(req, res) {
      res.render('index.html');
    },
    tweets: function(twitter) {
      return function(req, res) {
        twitter.search(req.query.search, function(data) {
          var cleanData = {
            tweets: []
          };
          if (data && data.statuses) {
            data.statuses.forEach(function(status) {
              cleanData.tweets.push(status.text);
            });
          }
          return res.json(cleanData);
        });
      };
    }
  };
};
