import React, {useEffect} from 'react';
import Post from "../../ui/Post/Post";
import {useTranslation} from "react-i18next";
import seo from "../../../helpers/seo";

const LimitedPublicCases = () => {
    const {t, i18n} = useTranslation('LimitedPublicCases', {useSuspense: false});

    useEffect(() => {
        seo({
            description: t('page description'),
            title: t('title'),
            keywords: t('keywords'),
            hrefLangEn: 'https://nplone.com/blog/limited-public-cases',
            hrefLangDe: 'https://nplone.com/de_de/blog/limited-public-cases',
        })
    }, [i18n.language])

    return (
        <Post.Container>
            <Post.Date>{t('date')}</Post.Date>
            <Post.Title>{t('title')}</Post.Title>
            <Post.Text>
                <div
                    dangerouslySetInnerHTML={
                        {__html: t('text', {interpolation: {escapeValue: false}})}
                    }
                />
            </Post.Text>
        </Post.Container>
    );
};

export default LimitedPublicCases;