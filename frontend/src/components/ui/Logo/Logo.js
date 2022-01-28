import React from 'react'
import cls from './Logo.module.scss'
import LangLink from "../LangLink/LangLink";

import logo from './logo.svg'

const Logo = () => {
    return (
        <div className={cls.box}>
            <img className={cls.image} src={logo} alt={'Logotype'} width={77} height={32}/>
            <LangLink to={'/'} className={cls.link}/>
        </div>
    )
}

export default Logo