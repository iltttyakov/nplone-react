import React from 'react';
import cls from './FooterMenu.module.scss'
import {Link} from "react-router-dom";
import Social from "../../ui/Social/Social";
import {useTranslation} from "react-i18next";
import LangNavLink from "../../ui/LangNavLink/LangLink";

const FooterMenu = () => {
    const {t} = useTranslation('FooterMenu')

    return (
        <div className={cls.row}>

            <div className={cls.column}>
                <h4 className={cls.columnTitle}>{t('Product')}</h4>
                <ul className={cls.list}>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/#financial-zone'}>{t('Financial Zone')}</LangNavLink>
                    </li>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/#shared-zone'}>{t('Shared Zone')}</LangNavLink>
                    </li>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/#public-zone'}>{t('Public Zone')}</LangNavLink>
                    </li>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/#get-the-app'}>{t('Get the App')}</LangNavLink>
                    </li>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/pricing'}>{t('Pricing')}</LangNavLink>
                    </li>
                </ul>
            </div>

            <div className={cls.column}>
                <h4 className={cls.columnTitle}>{t('Useful links')}</h4>
                <ul className={cls.list}>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/use-cases'}>{t('Use cases')}</LangNavLink>
                    </li>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/blog'}>{t('Blog')}</LangNavLink>
                    </li>
                    {/*<li className={cls.item}>*/}
                    {/*    <Link className={cls.link} to={'#'}>{t('FAQ')}</Link>*/}
                    {/*</li>*/}
                </ul>
            </div>

            <div className={cls.column}>
                <h4 className={cls.columnTitle}>{t('Legal')}</h4>
                <ul className={cls.list}>
                    <li className={cls.item}>
                        <LangNavLink className={cls.link} to={'/legal-and-impressum'}>{t('Legal & Impressum')}</LangNavLink>
                    </li>
                </ul>
            </div>

            <div className={cls.column}>
                <h4 className={cls.columnTitle}>{t('Socials')}</h4>
                <Social
                    linkedin={'https://www.linkedin.com/company/npl1'}
                    telegram={'https://t.me/nplusoneco'}
                />
            </div>

        </div>
    );
};

export default FooterMenu;