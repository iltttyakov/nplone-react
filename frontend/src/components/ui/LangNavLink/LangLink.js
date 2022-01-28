import React from 'react';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const LangNavLink = ({children, to, className = ''}) => {
    const {i18n} = useTranslation()

    const toWithLang = i18n.language === 'en' ? to : `/${i18n.language}${to}`

    return (
        <NavLink to={toWithLang} className={className}>
            {children}
        </NavLink>
    );
};

export default LangNavLink;