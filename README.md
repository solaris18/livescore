livescore
=========

jQuery plugin for live score of a match

![preview](http://oi60.tinypic.com/a0cgnk.jpg)

Demo : http://solaris18.github.io/livescore/

---

Usage :

First of all, you need to include these assets :

- [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/get-started/) css
- [`Bebas.ttf`](http://www.dafont.com/bebas.font) font
- [`jQuery`](http://jquery.com/download/) js

After that, import both `livescore.css` and `livescore.js`.

Here is simple example how to implement:

```js
$('#container-test').livescore({
  title: 'Futsal Match',
  data: [{
    players: ['XIX Family', 'Syndicate 15'],
    time: ['18/10/13', '08.30'],
    currentScore: [3, 2]
  }, ... ]
});
```

For complete example, see source on [https://github.com/solaris18/livescore/tree/gh-pages](https://github.com/solaris18/livescore/tree/gh-pages).

---

### Contribution

Feel free to help us maintain this project.

Fork -> Pull Request

---

### License

The MIT License (MIT)

Copyright (c) 2014 solaris18

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

