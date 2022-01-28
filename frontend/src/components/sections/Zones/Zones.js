import React, {useState} from 'react';
import cls from './Zones.module.scss'
import Container from "../../wrappers/Container/Container";
import {useTranslation} from "react-i18next";
import {isWebpSupported} from "react-image-webp/dist/utils";

import arrow1 from './arrows/arrow-1.svg'
import arrow2 from './arrows/arrow-2.svg'
import arrow3 from './arrows/arrow-3.svg'
import arrow4 from './arrows/arrow-4.svg'
import arrow5 from './arrows/arrow-5.svg'

const arrowsDesktop = [arrow1, arrow2, arrow3, arrow4, arrow5,]

const arrow1Mob = ''
const arrow2Mob = ''
import arrow3Mob from './arrows/arrow-3-mob.svg'
import arrow4Mob from './arrows/arrow-4-mob.svg'
import arrow5Mob from './arrows/arrow-5-mob.svg'

const arrowsMob = [arrow1Mob, arrow2Mob, arrow3Mob, arrow4Mob, arrow5Mob,]


import gradientDesktop from './zones-gradient.jpg'
import gradientDesktopWebP from './zones-gradient.webp'
import gradientMob from './zones-gradient-mob.jpg'
import gradientMobWebP from './zones-gradient-mob.webp'

const gradient = window.innerWidth >= 1064
    ? isWebpSupported()
        ? gradientDesktopWebP
        : gradientDesktop
    : isWebpSupported()
        ? gradientMobWebP
        : gradientMob


const Zones = () => {
    const {t} = useTranslation('Zones')
    const [arrows, setArrows] = useState(window.innerWidth >= 768 ? arrowsDesktop : arrowsMob)

    window.onresize = function (event) {
        setArrows(window.innerWidth >= 1064 ? arrowsDesktop : arrowsMob)
    }

    return (
        <section className={cls.section} style={{backgroundImage: `url(${gradient})`}}>

            <Container className={cls.container}>

                <h2 className={cls.title}>
                    {t('Three Zones')}
                </h2>
                <p className={cls.subtitle}>
                    {t('- to organise entire financial environment workflow')}
                </p>

                <div className={cls.row}>
                    <div className={[cls.column, cls.blue].join(' ')}>
                        <div className={[cls.item, cls.item1].join(' ')}>
                            <div className={cls.itemArrow} style={{backgroundImage: `url(${arrows[0]})`}}/>
                            <p className={cls.text}
                               dangerouslySetInnerHTML={
                                   {__html: t('<b>Your</b> Finance Zone<br/> with All your bank accounts', {interpolation: {escapeValue: false}})}
                               }
                            />
                        </div>
                        <div className={[cls.item, cls.item2].join(' ')}>
                            <div className={cls.itemArrow} style={{backgroundImage: `url(${arrows[1]})`}}/>
                            <p className={cls.text}
                               dangerouslySetInnerHTML={
                                   {__html: t('<b>Michael’s</b> Finance Zone<br/>with Private bank account', {interpolation: {escapeValue: false}})}
                               }
                            />
                        </div>
                        <div className={[cls.item, cls.item3].join(' ')}>
                            <div className={cls.itemArrow} style={{backgroundImage: `url(${arrows[2]})`}}/>
                            <p className={cls.text}
                               dangerouslySetInnerHTML={
                                   {__html: t('<b>Maria’s</b> Finance Zone<br/>with Business bank account', {interpolation: {escapeValue: false}})}
                               }
                            />
                        </div>
                    </div>
                    <div className={[cls.column, cls.green].join(' ')}>
                        <div className={[cls.item, cls.item4].join(' ')}>
                            <div className={cls.itemArrow} style={{backgroundImage: `url(${arrows[3]})`}}/>
                            <p className={cls.text}
                               dangerouslySetInnerHTML={
                                   {__html: t('Shared Zone', {interpolation: {escapeValue: false}})}
                               }
                            />
                        </div>
                    </div>
                    <div className={[cls.column, cls.purple].join(' ')}>
                        <div className={[cls.item, cls.item5].join(' ')}>
                            <div className={cls.itemArrow} style={{backgroundImage: `url(${arrows[4]})`}}/>
                            <p className={cls.text}
                               dangerouslySetInnerHTML={
                                   {__html: t('Public Zone', {interpolation: {escapeValue: false}})}
                               }
                            />
                        </div>
                    </div>
                </div>

            </Container>

        </section>
    );
};

export default Zones;