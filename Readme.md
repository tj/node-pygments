
# pygments

  python pygmentize(1)

## Installation

    $ npm install visionmedia/node-pygments

## Example

  Language specified:

```js
var highlight = require('pygments');

highlight(str, 'js', function(err, html){

})
```

  Guessing:

```js
var highlight = require('pygments');

highlight(str, function(err, html){

})
```

## License

  MIT
