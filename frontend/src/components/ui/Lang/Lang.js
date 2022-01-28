import React from 'react';
import cls from './Lang.module.scss'
import Icons from "../Icons/Icons";
import {useTranslation} from "react-i18next";

const Lang = ({onClick, isOpen = false}) => {
    const {i18n} = useTranslation()
    const clsArr = [cls.box]
    if (isOpen) clsArr.push(cls.open)

    return (
        <button className={clsArr.join(' ')} onClick={onClick} id={'lang-switcher-button'}>
            <span className={cls.label}>
                {
                    i18n.language === 'en'
                        ? 'English'
                        : 'Deutsch'
                }
            </span>
            <Icons className={cls.icon} size={24} name={'arrow-bottom'}/>
        </button>
    );
};

export default Lang;