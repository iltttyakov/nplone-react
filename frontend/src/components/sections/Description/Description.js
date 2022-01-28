import React from 'react';
import cls from './Description.module.scss'
import {useTranslation} from "react-i18next";

const Description = () => {
    const {t} = useTranslation('Description')

    return (
        <div
            className={cls.section}
            dangerouslySetInnerHTML={
                {__html: t('content', {interpolation: {escapeValue: false}})}
            }
        />
    );
};

export default Description;