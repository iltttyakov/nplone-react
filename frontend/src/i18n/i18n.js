import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';


import en from './translations/en.js'
import de from './translations/de.js'

const resources = {en, 'de_de': de}


i18n
    .use(initReactI18next)
    .init({
        resources,
        defaultNS: 'common',
        fallbackLng: 'en',
    })

i18n.on('languageChanged', function (lng) {
    const html = document.getElementsByTagName('html')[0]
    html.setAttribute('lang', lng === 'en' ? 'en' : 'de-de')
})

i18n.languages = ['en', 'de_de']

export default i18n;