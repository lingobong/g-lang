# G-Lang
+ You need to create a `./languages` folder in the same path as `./node_modules.`
+ You must create a `default.js` file in `./languages`.

# install
```
npm install g-lang
```

# example : [Download Example ZIP](https://github.com/lendland/g-lang/raw/master/g-lang-example.zip)
```js
const { lang, getLanguage, setLanguage, setLanguages } = require('g-lang');

setLanguages({
    en: require('./languages/default'),
    kor: require('./languages/kor')
})

// Download the 'Download Example ZIP' above and see the folder and JS file structure.
setLanguage('kor')
console.log(getLanguage(), lang.channel.name_label)
console.log(getLanguage(), lang.video.title)

setLanguage('en')
console.log(getLanguage(), lang.channel.name_label)
console.log(getLanguage(), lang.video.title)
```
