import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";

import cls from './Usp.module.scss'

import Container from "../../wrappers/Container/Container";
import Button from "../../ui/Button/Button";
import Wide from "../Wide/Wide";
import Advantage from "../Advantage/Advantage";
import Image from 'react-image-webp';


import picture from './usp-picture.png'
import pictureMob from './usp-picture-mob.png'
import pictureWebP from './usp-picture.webp'
import pictureMobWebP from './usp-picture-mob.webp'
import seo from "../../../helpers/seo";

let pictureUrl = picture
let pictureWebPUrl = pictureWebP

if (window.innerWidth < 768) {
    let pictureUrl = pictureMob
    let pictureWebPUrl = pictureMobWebP
}

const Usp = ({children}) => {
    const {t, i18n} = useTranslation('Usp')
    useEffect(() => {
        seo({
            description: t('page description'),
            hrefLangEn: 'https://nplone.com',
            hrefLangDe: 'https://nplone.com/de_de',
        })
    }, [i18n.language])


    const clsArr = [cls.section]
    // if (i18n.language !== 'en') clsArr.push(cls.de)

    return (
        <section className={clsArr.join(' ')}>

            {children}

            <Container className={cls.container}>
                <div className={cls.top}>

                    <div className={cls.topLeft}>

                        <h1 className={cls.title}
                            dangerouslySetInnerHTML={
                                {__html: t('title', {interpolation: {escapeValue: false}})}
                            }
                        />

                        <p className={cls.subtitle}>
                            {t('subtitle')}
                        </p>

                        <div className={cls.button}>
                            <Button size={'big'} iconName={'arrow-right'} to={'/#get-the-app'}>
                                {t('Get the App')}
                            </Button>
                        </div>

                        <div className={cls.wide}>
                            <Wide/>
                        </div>

                    </div>

                    <Image
                        className={cls.picture}
                        src={pictureUrl}
                        webp={pictureWebPUrl}
                        alt={t('financial social network app')}
                        width={1083} height={2352}
                    />

                </div>
            </Container>

            <div className={cls.descContainer}>
                <Container>
                    <p className={cls.desc}
                       dangerouslySetInnerHTML={
                           {__html: t('desc', {interpolation: {escapeValue: false}})}
                       }
                    />
                </Container>
            </div>

            <div className={cls.advantageContainer}>
                <Container>
                    <Advantage/>
                </Container>
            </div>

        </section>
    );
};

export default Usp;