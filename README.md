# G-Lang
+ You need to create a `./languages` folder in the same path as `./node_modules.`
+ You must create a `default.js` file in `./languages`.
    + `g-lang` supports autocompletion in vs code.
+ Click [Download Example ZIP] below to see the structure
---
+ `./node_modules.`와 같은 경로에 `./languages` 폴더를 생성해야합니다.
+ `./languages` 폴더에는 반드시 `default.js`(기본 언어) 파일을 생성해야합니다.
+ 아래의 [Download Example ZIP]을 클릭하여 구조를 확인하세요.

# install
```
npm install g-lang
```

# example : [Download Example ZIP](https://github.com/lendland/g-lang/raw/master/g-lang-example.zip)
```js
const { lang, getLanguage, setLanguage, setLanguages, onChangeLanguage } = require('g-lang');

setLanguages({
    en: require('./languages/default'),
    kor: require('./languages/kor')
})

onChangeLanguage(function (nextLang, prevLang) {
    console.log('lang changed !!', `${nextLang} => ${prevLang}`)
})
// .remove() // This code will remove the event listener above.(위 이벤트 리스너를 제거하는 코드입니다.)

// Download the 'Download Example ZIP' above and see the folder and JS file structure.
setLanguage('kor')
console.log(getLanguage(), lang.channel.name_label)
console.log(getLanguage(), lang.video.title)

setLanguage('en')
console.log(getLanguage(), lang.channel.name_label)
console.log(getLanguage(), lang.video.title)
```

## on global object
#### usage
```js
import { lang, createObject } from 'g-lang'
const langs = createObject( function () {
    return {
        title: lang.title,
    }
})
console.log(langs.title)
```
