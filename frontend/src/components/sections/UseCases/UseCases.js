import React, {useEffect} from 'react';
import Cases from "../../ui/Cases/Cases";
import Container from "../../wrappers/Container/Container";

import cls from './UseCases.module.scss'
import {useTranslation} from "react-i18next";
import Page from "../../ui/Page/Page";
import seo from "../../../helpers/seo";

const UseCases = () => {
    const {t} = useTranslation('UseCases')

    useEffect(() => {
        seo({
            title: t('title'),
            hrefLangEn: 'https://nplone.com/use-cases',
            hrefLangDe: 'https://nplone.com/de_de/use-cases',
        })
    }, [])

    return (
        <>
            <Page.Content>
                <Page.Title>{t('title')}</Page.Title>
                <Page.Text>
                    <p>
                        {t('subtitle')}
                    </p>
                </Page.Text>
            </Page.Content>
            <section className={cls.section}>
                <Cases.Content>
                    <Container>

                        <Cases.Row>
                            <Cases.Title>{t('What is N+1?')}</Cases.Title>
                            <Cases.List>
                                <Cases.Item link={'/blog/what-is-n1'}>{t('What is N+1?')}</Cases.Item>
                            </Cases.List>
                        </Cases.Row>

                        <Cases.Row>
                            <Cases.Title>Limited Public cases</Cases.Title>
                            <Cases.List>
                                <Cases.Item link={'/blog/limited-public-cases'}>
                                    {t('General description')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/limited-public-cases#family'}>
                                    {t('Family')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/limited-public-cases#dormitory'}>
                                    {t('Dormitory or Friends')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/limited-public-cases#apartment'}>
                                    {t('Apartment building with a House Manager or Management Company')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/limited-public-cases#department'}>
                                    {t('Department of the company')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/limited-public-cases#communities'}>
                                    {t('Closed communities')}
                                </Cases.Item>
                            </Cases.List>
                        </Cases.Row>

                        <Cases.Row>
                            <Cases.Title>{t('Public cases')}</Cases.Title>
                            <Cases.List>
                                <Cases.Item link={'/blog/public-cases'}>
                                    {t('General description')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/public-cases#influencers'}>
                                    {t('Bloggers, Influencers, Public Companies, Charitable foundaton, Communities')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/public-cases#large-scale'}>
                                    {t('National projects and international projects')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/public-cases#theoretically'}>
                                    {t('Theoretically possible projects')}
                                </Cases.Item>
                            </Cases.List>
                        </Cases.Row>

                        <Cases.Row>
                            <Cases.Title>{t('Private cases')}</Cases.Title>
                            <Cases.List>
                                <Cases.Item link={'/blog/private-cases'}>
                                    {t('Bank accounts aggregator')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/private-cases'}>
                                    {t('Possibility of organizing transactions, reciepts and documents of your projects')}
                                </Cases.Item>
                                <Cases.Item link={'/blog/private-cases'}>
                                    {t('Prepare some project to make it public some day')}
                                </Cases.Item>
                            </Cases.List>
                        </Cases.Row>

                    </Container>
                </Cases.Content>
            </section>
        </>
    );
};

export default UseCases;