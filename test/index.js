
var highlight = require('..');
var fs = require('fs');

function fixture(path) {
  path = 'test/fixtures/' + path;
  return fs.readFileSync(path, 'utf8');
}

describe('highlight(str, lang, fn)', function(){
  it('should highlight', function(done){
    var str = fixture('javascript.js');
    highlight(str, 'js', function(err, html){
      if (err) return done(err);
      html.should.include('<table class="highlighttable"');
      html.should.include('<div class="lineno');
      html.should.include('<span class="k">if</span>');
      done();
    });
  })
})
