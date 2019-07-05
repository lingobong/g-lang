function GL(){
    const language = {
        data: null,
        languages: { default: require('../../languages/default') },
        selectedLanguage: 'default',
    }

    const setLanguage = function ( lang ) {
        let newLangData = language.languages[lang]
        if ( !!newLangData ) {
            language.selectedLanguage = lang
            language.data = language.languages[lang]
        }else{
            throw new Error('['+lang+'] is not exists language')
        }
    }
    
    const getLanguage = function ( ) {
        return language.selectedLanguage;
    }

    const setLanguages = function ( _languages={} ) {
        language.languages = { ...language.languages, ..._languages }
    }

    return {
        language,
        setLanguage,
        getLanguage,
        setLanguages,
    }
}

module.exports = GL