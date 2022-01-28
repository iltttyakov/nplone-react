import React, {useEffect, useState} from 'react'
import {useTranslation} from "react-i18next";

import cls from './Header.module.scss'

import Logo from "../../ui/Logo/Logo"
import MainMenu from "../MainMenu/MainMenu"
import Lang from "../../ui/Lang/Lang"
import Button from "../../ui/Button/Button"
import Container from "../../wrappers/Container/Container"
import Burger from "../../ui/Burger/Burger";
import LangSwitcher from "../../ui/LangSwitcher/LangSwitcher";


const Header = ({className = '', blog = false}) => {
    const {t} = useTranslation('Header')
    const [langSwitcherOpen, setLangSwitcherOpen] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const clsArr = [cls.section, className]
    if (blog) clsArr.push(cls.blog)

    const clsMenu = [cls.menu]
    if (menuIsOpen) clsMenu.push(cls.open)


    return (
        <div className={clsArr.join(' ')}>
            <Container className={cls.container}>
                <div className={cls.logo}>
                    <Logo/>
                </div>

                <div className={clsMenu.join(' ')}>
                    <MainMenu/>

                    <div className={cls.lang}>
                        <Lang
                            isOpen={langSwitcherOpen}
                            onClick={() => setLangSwitcherOpen(!langSwitcherOpen)}
                        />
                        <div className={cls.langSwitcher}>
                            <LangSwitcher
                                isOpen={langSwitcherOpen}
                                closeFunc={() => setLangSwitcherOpen(false)}
                            />
                        </div>
                    </div>
                </div>

                <div className={cls.button}>
                    <Button to={'/#get-the-app'}>{t('Get the App')}</Button>
                </div>

                <div className={cls.burger}>
                    <Burger
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                        isOpen={menuIsOpen}
                    />
                </div>

            </Container>

        </div>
    )
}

export default Header