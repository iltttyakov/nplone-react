import React, {useEffect} from 'react';
import cls from './Pricing.module.scss'
import Container from "../../wrappers/Container/Container";
import {useTranslation} from "react-i18next";
import seo from "../../../helpers/seo";

const Pricing = () => {
    const {t, i18n} = useTranslation('Pricing')

    useEffect(() => {
        seo({
            title: t('Pricing'),
            hrefLangEn: 'https://nplone.com/pricing',
            hrefLangDe: 'https://nplone.com/de_de/pricing',
        })
    }, [i18n.language])

    return (
        <div className={cls.section}>
            <Container>

                <h1 className={cls.title}>{t('Pricing')}</h1>

                <ul className={cls.list}>

                    <li className={[cls.item, cls.green].join(' ')}>
                        <div className={cls.price}>
                            <span className={cls.priceValue}>{t('Free')}</span>
                        </div>
                        <ul className={cls.detailList}>
                            <li className={cls.detailItem}>
                                {t('Access to third-party private or public projects')}
                            </li>
                            <li className={cls.detailItem}>
                                {t('14-day trial. Multi-banking & Extended version of Shared pages')}
                            </li>
                            <li className={cls.detailItem}>
                                {t('Unlimited cloud storage for your projects')}
                            </li>
                        </ul>
                    </li>

                    <li className={cls.item}>
                        <div className={cls.price}>
                            <span className={cls.priceValue}>0€</span>
                            <span className={cls.priceHint}>{t('/mo')}</span>
                        </div>
                        <ul className={cls.detailList}>
                            <li className={cls.detailItem}>
                                {t('unlimited number of Shared Pages. Only for personal use & Multi-banking - limited version')}
                            </li>
                        </ul>
                    </li>

                    <li className={cls.item}>
                        <div className={cls.price}>
                            <span className={cls.priceValue}>4€</span>
                            <span className={cls.priceHint}>{t('/mo')}</span>
                        </div>
                        <ul className={cls.detailList}>
                            <li className={cls.detailItem}>
                                {t('per each active user - extended functionality')}
                            </li>
                        </ul>
                    </li>

                    <li className={cls.item}>
                        <div className={cls.price}>
                            <span className={cls.priceValue}>19€</span>
                            <span className={cls.priceHint}>{t('/mo')}</span>
                        </div>
                        <ul className={cls.detailList}>
                            <li className={cls.detailItem}>
                                {t('pro-version of a Shared Page: includes professional financial tools for interacting with the audience')}
                            </li>
                        </ul>
                    </li>

                    <li className={cls.item}>
                        <div className={cls.price}>
                            <span className={cls.priceValue}>23%</span>
                            <span className={cls.priceHint}>{t('of income')}</span>
                        </div>
                        <ul className={cls.detailList}>
                            <li className={cls.detailItem}>
                                {t('monetization of unique financial content through subscription')}
                            </li>
                        </ul>
                    </li>

                </ul>

                <p className={cls.note}
                   dangerouslySetInnerHTML={
                       {__html: t('note', {interpolation: {escapeValue: false}})}
                   }
                />

            </Container>
        </div>
    );
};

export default Pricing;