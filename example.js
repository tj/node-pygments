
var highlight = require('./');

highlight('if (foo) {}', 'js', function(err, html){
  if (err) throw err;
  console.log(html);
});
