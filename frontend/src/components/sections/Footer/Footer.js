import React from 'react';
import cls from './Footer.module.scss'
import Container from "../../wrappers/Container/Container";
import Logo from "../../ui/Logo/Logo";
import FooterMenu from "../FooterMenu/FooterMenu";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation('Footer')

    return (
        <div className={cls.section}>

            <Container className={cls.container}>

                <div className={cls.top}>

                    <div className={cls.logo}>
                        <Logo/>
                        <p className={cls.copyright}>
                            © Copyright 2021 N+1.<br/>
                            {t('All rights reserved.')}
                        </p>
                    </div>

                    <div className={cls.menu}>
                        <FooterMenu/>
                    </div>

                </div>

                <p className={cls.desc}>
                    {t('desc')}
                </p>

            </Container>

        </div>
    );
};

export default Footer;