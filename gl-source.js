function GL(_languages){
    let language = {
        data: null,
        languages: { default: require('../../languages/default') },
        selectedLanguage: 'default',
    }

    function GLanguage (_languages={}, lang = 'default' ) {
        this.setLanguages(_languages);
        this.setLanguage(lang)
        this.lang = { ... language.languages.default }

        for (const key in language.languages.default) {
            Object.defineProperty(this.lang, key, {
                get(){
                    return language.data[key] || language.languages.default[key]
                }
            })
        }
    }

    GLanguage.prototype.setLanguage = function ( lang ) {
        let newLangData = language.languages[lang]
        if ( !!newLangData ) {
            language.selectedLanguage = lang
            language.data = language.languages[lang]
        }else{
            throw new Error('['+lang+'] is not exists language')
        }
    }
    
    GLanguage.prototype.getLanguage = function ( lang ) {
        return language.selectedLanguage;
    }

    GLanguage.prototype.setLanguages = function ( _languages={} ) {
        language.languages = { ...language.languages, ..._languages }
    }

    return new GLanguage(_languages)
}

module.exports = GL