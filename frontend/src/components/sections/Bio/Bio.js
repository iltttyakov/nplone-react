import React from 'react';
import cls from './Bio.module.scss'

import cover from './cover.jpg'
import avatar from './avatar.jpg'
import Transfer from "../../ui/Transfer/Transfer";
import Button from "../../ui/Button/Button";
import {useTranslation} from "react-i18next";

const Bio = () => {
    const {t} = useTranslation('Bio')

    return (
        <div className={cls.section}>
            <div className={cls.coverContainer}>
                <img className={cls.cover} src={cover} alt={t('Nplone logo on the wall')}/>
            </div>


            <div className={cls.info}>

                <div className={cls.topRow}>
                    <div className={cls.avatarContainer}>
                        <img className={cls.avatar} src={avatar} alt={t('N plus one avatar')}/>
                    </div>
                    <div className={cls.controlList}>
                        <Button
                            className={[cls.control, cls.mobNone].join(' ')}
                            size={'micro'}
                            decoration={'fill'}
                            color={'blue'}
                            to={'/#get-the-app'}
                        >
                            {t('Get the App')}
                        </Button>
                        {/*<Button*/}
                        {/*    className={[cls.control, cls.share].join(' ')}*/}
                        {/*    size={'micro'}*/}
                        {/*    decoration={'fill'}*/}
                        {/*    color={'blue'}*/}
                        {/*    iconName={'share'}*/}
                        {/*    iconPosition={'left'}*/}
                        {/*    to={'/#get-the-app'}*/}
                        {/*>*/}
                        {/*    {t('Share')}*/}
                        {/*</Button>*/}
                    </div>
                </div>

                <h1 className={cls.name}>{t('N+1 Public Page')}</h1>
                <p className={cls.desc}>
                    {t('Flexible financial management and achievement of financial goals with any group of people, with the ability to make finance of the projects public and transparent.')}
                </p>
                <ul className={cls.linkList}>
                    <li className={cls.linkItem}>
                        <Transfer iconName={'place'} href={'https://goo.gl/maps/EUap27V2gQFdPpk1A'}>Germany, Eichhornstraße 3, 10785 Berlin</Transfer>
                    </li>
                    <li className={cls.linkItem}>
                        <Transfer iconName={'clip'} href={'https://nplone.com/'}>https://nplone.com/</Transfer>
                    </li>
                </ul>


                <button className={cls.follow}>{t('Follow')}</button>
            </div>

        </div>
    );
};

export default Bio;