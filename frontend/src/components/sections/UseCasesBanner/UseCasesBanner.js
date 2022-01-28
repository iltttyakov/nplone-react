import React from 'react';
import cls from './UseCasesBanner.module.scss'
import Container from "../../wrappers/Container/Container";
import Button from "../../ui/Button/Button";
import {useTranslation} from "react-i18next";
import {isWebpSupported} from "react-image-webp/dist/utils";


import bgWebP from './use-cases-banner-picture.webp'
import bg from './use-cases-banner-picture.png'
import bgMobWebP from './use-cases-banner-picture-mob.webp'
import bgMob from './use-cases-banner-picture-mob.png'

const bgUrl = window.innerWidth >= 1064
    ? isWebpSupported()
        ? bgWebP
        : bg
    : isWebpSupported()
        ? bgMobWebP
        : bgMob


const UseCasesBanner = () => {
    const {t} = useTranslation('UseCasesBanner')

    return (
        <div className={cls.section}>
            <div className={cls.sectionBg} style={{backgroundImage: `url(${bgUrl})`}}/>

            <Container className={cls.container}>
                <p className={cls.desc}>
                    {t('N+1 is an innovative banking technologies hub, wrapped in social network form, to give people previously unavailable powerful financial instruments in a simple way.')}
                </p>
                <h2
                    className={cls.title}
                    dangerouslySetInnerHTML={
                        {__html: t('title', {interpolation: {escapeValue: false}})}
                    }
                />
                <Button
                    decoration={'stroke'}
                    size={'big'}
                    iconName={'arrow-right'}
                    to={'/use-cases'}
                >
                    {t('Some Use Cases')}
                </Button>
            </Container>

        </div>
    );
};

export default UseCasesBanner;