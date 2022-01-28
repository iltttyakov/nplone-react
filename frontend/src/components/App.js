import React, {useEffect} from 'react'
import {Route, Switch, useLocation} from "react-router-dom"
import {I18nextProvider} from "react-i18next";


import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'


import HomePage from "./pages/HomePage";
import UseCasesPage from "./pages/UseCasesPage";
import LegalPage from "./pages/LegalPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import WhatIsNPage from "./pages/WhatIsNPage";
import LimitedPublicCasesPage from "./pages/LimitedPublicCasesPage";
import PublicCasesPage from "./pages/PublicCasesPage";
import PrivateCasesPage from "./pages/PrivateCasesPage";
import NotFoundPage from "./pages/NotFoundPage";

import i18n from '../i18n/i18n'

const LOCALE_DEFAULT = 'en'


const makeRoute = route => {
    const baseRouteUrl = "/:locale(de_de|en|'')?"
    return `${baseRouteUrl}${route}`
}


function App() {
    const location = useLocation()

    useEffect(() => {
        const lang = getLocaleFromPath(location.pathname)
        i18n.changeLanguage(lang)

        const html = document.getElementsByTagName('html')[0]
        html.setAttribute('lang', lang === 'en' ? 'en' : 'de-de')
    }, [])

    const getLocaleFromPath = (pathname) => {
        let locale = LOCALE_DEFAULT
        const languages = i18n.languages

        Object.keys(languages).forEach(key => {
            const value = languages[key]
            if (pathname.includes('/' + value)) {
                locale = languages[key]
            }
        })

        return locale
    }


    return (
        <I18nextProvider i18n={i18n}>
            <Switch>
                <Route exact path={makeRoute('/')} component={HomePage}/>
                <Route exact path={makeRoute('/use-cases')} component={UseCasesPage}/>
                <Route exact path={makeRoute('/legal-and-impressum')} component={LegalPage}/>
                <Route exact path={makeRoute('/pricing')} component={PricingPage}/>
                <Route exact path={makeRoute('/blog')} component={BlogPage}/>
                <Route exact path={makeRoute('/blog/what-is-n1')} component={WhatIsNPage}/>
                <Route exact path={makeRoute('/blog/limited-public-cases')} component={LimitedPublicCasesPage}/>
                <Route exact path={makeRoute('/blog/public-cases')} component={PublicCasesPage}/>
                <Route exact path={makeRoute('/blog/private-cases')} component={PrivateCasesPage}/>
                <Route path={'/*'} component={NotFoundPage}/>
            </Switch>
        </I18nextProvider>
    )
}

export default App
