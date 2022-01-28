import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";


import checkboxBg from './checkbox.svg'
import checkboxActiveBg from './checkbox-active.svg'


const LangSwitcher = ({isOpen, closeFunc}) => {
    const location = useLocation()
    const {i18n} = useTranslation()
    const languages = i18n.languages

    const clsArr = [cls.container]
    if (isOpen) clsArr.push(cls.open)


    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    const getCheckboxBg = (lang) => {
        if (i18n.language === lang) {
            return checkboxActiveBg
        }
        return checkboxBg
    }

    const renderSwitchLink = (language) => {
        let pathname = location.pathname

        Object.keys(languages).forEach(key => {
            const value = languages[key]
            if (pathname.includes('/' + value)) {
                pathname = pathname.replace(`/${value}`, '')
            }
        })

        return language === 'en' ? `${pathname}` : `/${language}${pathname}`
    }

    useEffect(() => {
        const switcher = document.getElementById('lang-switcher');
        const button = document.getElementById('lang-switcher-button');
        document.addEventListener('click', function (event) {
            let isClickInside = switcher.contains(event.target)
            isClickInside = isClickInside || button.contains(event.target)
            if (!isClickInside) {
                closeFunc()
            }
        })
    }, [])

    return (
        <div className={clsArr.join(' ')} id={'lang-switcher'}>
            <ul className={cls.list}>

                <li className={cls.item}>
                    <Link
                        className={cls.label}
                        onClick={() => changeLanguage('en')}
                        to={renderSwitchLink('en')}
                    >
                        English
                        <span className={cls.labelIcon} style={{backgroundImage: `url(${getCheckboxBg('en')})`}}/>
                    </Link>
                </li>

                <li className={cls.item}>
                    <Link
                        className={cls.label}
                        onClick={() => changeLanguage('de_de')}
                        to={renderSwitchLink('de_de')}
                    >
                        Deutsch
                        <span className={cls.labelIcon} style={{backgroundImage: `url(${getCheckboxBg('de_de')})`}}/>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default LangSwitcher;