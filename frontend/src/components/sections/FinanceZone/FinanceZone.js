import React from 'react';
import cls from './FinanceZone.module.scss'
import Present from "../../ui/Present/Present";

import picture from './finance-zone-picture.png'
import arrow from './finance-zone-arrow.png'
import {useTranslation} from "react-i18next";

const FinanceZone = () => {
    const {t} = useTranslation('FinanceZone')

    return (
        <Present.Section type={'blue'} className={cls.section} id={'#financial-zone'}>
            <Present.Overflow>
                <Present.Content className={cls.content}>
                    <Present.TextContainer
                        size={'big'}
                    >
                        <div
                            dangerouslySetInnerHTML={
                                {__html: t('content', {interpolation: {escapeValue: false}})}
                            }
                        />
                    </Present.TextContainer>
                    <Present.PictureContainer className={cls.picture}>
                        <Present.Picture src={picture} alt={t('Finance management zone')}
                            width={600} height={1920}
                        />
                    </Present.PictureContainer>
                </Present.Content>
            </Present.Overflow>
            <img src={arrow} className={cls.arrow} alt={''}/>
        </Present.Section>
    );
};

export default FinanceZone;