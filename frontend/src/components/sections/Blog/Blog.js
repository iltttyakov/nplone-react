import React, {useEffect, useState} from 'react';
import Feed from "../Feed/Feed";
import Unavailable from "../Unavailable/Unavailable";
import Description from "../Description/Description";
import Responsible from "../Responsible/Responsible";
import Attachments from "../Attachments/Attachments";
import Faq from "../Faq/Faq";
import Bio from "../Bio/Bio";
import Tabs from "../../ui/Tabs/Tabs";
import {useTranslation} from "react-i18next";
import BlogUi from "../../ui/Blog/Blog";

import cls from './Blog.module.scss'
import seo from "../../../helpers/seo";


const Blog = () => {
    const {t, i18n} = useTranslation('Blog')
    const [activeTab, setActiveTab] = useState('news')

    useEffect(() => {
        seo({
            description: t('page description'),
            title: 'Blog',
            hrefLangEn: 'https://nplone.com/blog',
            hrefLangDe: 'https://nplone.com/de_de/blog',
        })
    }, [i18n.language])

    let content = null

    switch (activeTab) {
        case 'news':
            content = <Feed/>
            break

        case 'transactions':
            content = <>
                <BlogUi.ContentHeader>
                    <BlogUi.Title>{t('Transaction History')}</BlogUi.Title>
                </BlogUi.ContentHeader>
                <Unavailable/>
            </>
            break

        case 'description':
            content = <>
                <BlogUi.ContentHeader>
                    <BlogUi.Title>{t('Description')}</BlogUi.Title>
                </BlogUi.ContentHeader>
                <Description/>
            </>
            break

        case 'responsible':
            content = <>
                <BlogUi.ContentHeader>
                    <BlogUi.Title>{t('Responsible people')}</BlogUi.Title>
                    <BlogUi.ContentSubTitle>
                        {t('List of persons responsible for the entire campaign. Personal responsibility.')}
                    </BlogUi.ContentSubTitle>
                </BlogUi.ContentHeader>
                <Responsible/>
            </>
            break

        case 'attachments':
            content = <>
                <BlogUi.ContentHeader>
                    <BlogUi.Title>{t('Attachments')}</BlogUi.Title>
                    <BlogUi.ContentSubTitle>
                        {t('List of documents available for public')}
                    </BlogUi.ContentSubTitle>
                </BlogUi.ContentHeader>
                <Attachments/>
            </>
            break

        // case 'faq':
        //     content = <>
        //         <BlogUi.ContentHeader>
        //             <BlogUi.Title>{t('FAQ')}</BlogUi.Title>
        //         </BlogUi.ContentHeader>
        //         <Faq/>
        //     </>
        //     break
    }

    return (
        <section className={cls.section}>
            <BlogUi.Top>
                <Bio/>
                <Tabs.Row>
                    <Tabs.Item
                        onClick={() => setActiveTab('news')}
                        active={activeTab === 'news'}
                    >
                        {t('News')}
                    </Tabs.Item>
                    <Tabs.Item
                        onClick={() => setActiveTab('transactions')}
                        active={activeTab === 'transactions'}
                    >
                        {t('Transactions')}
                    </Tabs.Item>
                    <Tabs.Item
                        onClick={() => setActiveTab('description')}
                        active={activeTab === 'description'}
                    >
                        {t('Description')}
                    </Tabs.Item>
                    <Tabs.Item
                        onClick={() => setActiveTab('responsible')}
                        active={activeTab === 'responsible'}
                    >
                        {t('Responsible people')}
                    </Tabs.Item>
                    <Tabs.Item
                        onClick={() => setActiveTab('attachments')}
                        active={activeTab === 'attachments'}
                    >
                        {t('Attachments')}
                    </Tabs.Item>
                    {/*<Tabs.Item*/}
                    {/*    onClick={() => setActiveTab('faq')}*/}
                    {/*    active={activeTab === 'faq'}*/}
                    {/*>*/}
                    {/*    {t('FAQ')}*/}
                    {/*</Tabs.Item>*/}
                </Tabs.Row>
            </BlogUi.Top>

            <BlogUi.Content>
                {content}
            </BlogUi.Content>
        </section>
    );
};

export default Blog;