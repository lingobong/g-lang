function GLP(){
     const language = {
         data: null,
         languages: { default: require('../../languages/default') },
         selectedLanguage: 'default',
     }
 
     const setLanguage = function ( lang, ignoreException = false ) {
         let newLangData = language.languages[lang]
         if ( !!newLangData ) {
             if ( getLanguage() != lang ) {
                 for ( const fn of languageChangeListeners ) {
                     fn( lang, getLanguage() )
                 }
             }
 
             language.selectedLanguage = lang
             language.data = language.languages[lang]
         }else if ( !ignoreException ) {
             throw new Error('['+lang+'] is not exists language')
         }
         return this
     }
     
     const getLanguage = function ( ) {
         return language.selectedLanguage
     }
 
     const setLanguages = function ( _languages={} ) {
         language.languages = { ...language.languages, ..._languages }
         return this
     }
 
     // onChangeLanguage
     let languageChangeListeners = [  ]
     const onChangeLanguage = function ( fn ) {
         const remove = () => {
             languageChangeListeners = languageChangeListeners.filter( f => f != fn )
         }
 
         languageChangeListeners.push( fn )
 
         return { remove }
     }
 
     return {
         language,
         setLanguage,
         getLanguage,
         setLanguages,
         onChangeLanguage,
     }
}
 
function GL(_languages){
     const {
         language,
         setLanguage,
         getLanguage,
         setLanguages,
         onChangeLanguage,
     } = GLP()
     
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
 
     GLanguage.prototype.setLanguage = function ( lang, ignoreException = false ) {
         return setLanguage.apply(this,[ lang, ignoreException ])
     }
     
     GLanguage.prototype.getLanguage = function ( ) {
         return getLanguage.apply(this)
     }
     
     GLanguage.prototype.setLanguages = function ( _languages={} ) {
         return setLanguages.apply(this,[ _languages ])
     }
     
     GLanguage.prototype.onChangeLanguage = function ( fn = ( nextLanguage, prevLanguage ) => {  } ) {
         return onChangeLanguage.apply(this, [ fn ])
     }
 
     return new GLanguage(_languages)
}
 
module.exports = GL()