import React from 'react';
import cls from './Unavailable.module.scss'
import Button from "../../ui/Button/Button";
import {useTranslation} from "react-i18next";

const Unavailable = () => {
    const {t} = useTranslation('Unavailable')

    return (
        <div className={cls.section}>
            <p className={cls.label}>{t('This info is available for registered users')}</p>
            <Button
                className={cls.button}
                size={'small'}
                decoration={'fill'}
                color={'blue'}
                to={'/#get-the-app'}
            >
                {t('Get the App')}
            </Button>
        </div>
    );
};

export default Unavailable;