import React from 'react';
import cls from './Advantage.module.scss'
import Tick from "../../ui/Tick/Tick";
import {useTranslation} from "react-i18next";


const Advantage = () => {
    const {t} = useTranslation('Advantage', { useSuspense: false });

    const blueTick = <Tick color={'blue'}/>
    const greenTick = <Tick color={'green'}/>

    return (
        <div className={cls.box}>

            <div className={cls.column}>
                <h3
                    className={cls.title}
                    dangerouslySetInnerHTML={
                        {__html: t('N+1 ‘s <br/>Shared Accounts Help', {interpolation: {escapeValue: false}})}
                    }
                />
                <ul className={[cls.list, cls.blue].join(' ')}>
                    <li className={cls.item}>
                        {blueTick}
                        <span className={cls.text}>{t('Organize & manage financial assets with other members')}</span>
                    </li>
                    <li className={cls.item}>
                        {blueTick}
                        <span className={cls.text}>{t('Automate repetitive daily tasks')}</span>
                    </li>
                    <li className={cls.item}>
                        {blueTick}
                        <span className={cls.text}>{t('Speed up tasks up to 100x times')}</span>
                    </li>
                </ul>
            </div>

            <div className={cls.column}>
                <h3
                    className={cls.title}
                    dangerouslySetInnerHTML={
                        {__html: t('N+1 <br/>Enables', {interpolation: {escapeValue: false}})}
                    }
                />
                <ul className={[cls.list, cls.green].join(' ')}>
                    <li className={cls.item}>
                        {greenTick}
                        <span className={cls.text}>
                            {t('Conduct public or nonpublic financial actions')}
                        </span>
                    </li>
                    <li className={cls.item}>
                        {greenTick}
                        <span className={cls.text}>
                            {t('Split expenses, lead deals, auctions, tenders, purchases')}
                        </span>
                    </li>
                    <li className={cls.item}>
                        {greenTick}
                        <span className={cls.text}>
                            {t('Organize transparent financial flow of projects for general public')}
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Advantage;