import React from 'react';
import cls from './Wide.module.scss'

import eu from './eu.png'
import {useTranslation} from "react-i18next";

const Wide = () => {
    const {t} = useTranslation('Wide')


    return (
        <div className={cls.box}>
            <img className={cls.flag} src={eu} alt={t('The emblem of the European Union')} width={62} height={62}/>
            <div>
                <p className={cls.title}>{t('EU wide')}</p>
                <p className={cls.subtitle}>3.400 {t('Banks')}</p>
            </div>
        </div>
    );
};

export default Wide;