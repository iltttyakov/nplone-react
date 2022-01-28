import React from 'react';
import i18n from 'i18next';
import {useTranslation} from "react-i18next";
import LangNavLink from "../../ui/LangNavLink/LangLink";

import cls from './MainMenu.module.scss'


const MainMenu = () => {
    const {t} = useTranslation('MainMenu')


    const links = [
        {label: t('Home'), to: '/'},
        {label: t('Use cases'), to: '/use-cases'},
        {label: t('Pricing'), to: '/pricing'},
        {label: t('Blog'), to: '/blog'},
        // {label: t('FAQ'), to: ''},
    ]

    return (
        <ul className={cls.list}>
            {
                links.map(
                    (item, index) => {
                        return <li key={index} className={cls.item}>
                            <LangNavLink to={item['to']} className={cls.link}>
                                {item['label']}
                            </LangNavLink>
                        </li>
                    }
                )
            }
        </ul>
    );
};

export default MainMenu;