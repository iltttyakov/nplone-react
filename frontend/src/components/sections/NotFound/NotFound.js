import React from 'react';
import Page from "../../ui/Page/Page";
import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation('NotFound')

    return (
        <Page.Content>
            <Page.Title>404 | {t('Page not found')}</Page.Title>
        </Page.Content>
    );
};

export default NotFound;