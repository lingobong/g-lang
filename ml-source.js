function ML(_languages){
    let language = {
        data: null,
        languages: { default: require('../../languages/default') },
        selectedLanguage: 'default',
    }

    function MultiLanguage (_languages={}, lang = 'default' ) {
        this.setLanguages(_languages);
        this.setLanguage(lang)
        this.lang = language.languages.default

        for (let key in language.languages.default) {
            Object.assign(this.lang,{
                get [key](){
                    return language.data[key] || language.languages.default[key]
                }
            })
        }
    }

    MultiLanguage.prototype.setLanguage = function ( lang ) {
        let newLangData = language.languages[lang]
        if ( !!newLangData ) {
            language.selectedLanguage = lang
            language.data = language.languages[lang]
        }else{
            throw new Error('['+lang+'] is not exists language')
        }
    }
    
    MultiLanguage.prototype.getLanguage = function ( lang ) {
        return language.selectedLanguage;
    }

    MultiLanguage.prototype.setLanguages = function ( _languages={} ) {
        language.languages = { ...language.languages, ..._languages }
    }

    return new MultiLanguage(_languages)
}

module.exports = ML