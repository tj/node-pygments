
/**
 * Module dependencies.
 */

var spawn = require('child_process').spawn
  , debug = require('debug')('pygments');

/**
 * Highlight the given code `str` as `lang`
 * and invoke `fn(err, html)`.
 *
 * @param {String} str
 * @param {String} lang
 * @param {Function} fn
 * @api public
 */

module.exports = function(str, lang, fn){
  var buf = '';
  debug('highlight %s', lang);
  var proc = spawn('pygmentize', ['-l', lang, '-f', 'html', '-O', 'encoding=utf8,linenos=true']);
  proc.stdout.setEncoding('utf8');
  proc.stdout.on('data', function(s){ buf += s });
  proc.on('exit', function(){ fn(null, buf) });
  proc.stdin.write(str);
  proc.stdin.end();
};
