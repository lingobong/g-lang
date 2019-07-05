function GL(_languages){
    const {
        language,
        setLanguage,
        getLanguage,
        setLanguages,
    } = require('./gl-source-property')()
    
    function GLanguage (_languages={}, lang = 'default' ) {
        this.setLanguages(_languages)
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
        return setLanguage.apply(this,[ lang ])
    }
    
    GLanguage.prototype.getLanguage = function ( ) {
        return getLanguage.apply(this)
    }

    GLanguage.prototype.setLanguages = function ( _languages={} ) {
        return setLanguages.apply(this,[ _languages ])
    }

    return new GLanguage(_languages)
}

module.exports = GL