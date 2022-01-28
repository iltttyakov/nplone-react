import React from 'react';
import cls from './PublicZone.module.scss'
import {useTranslation} from "react-i18next";

import Present from "../../ui/Present/Present";

import picture from './public-zone-picture.png'
import pictureWebP from './public-zone-picture.webp'
import {isWebpSupported} from "react-image-webp/dist/utils";

const pictureUrl = isWebpSupported() ? pictureWebP : picture


const PublicZone = () => {
    const {t} = useTranslation('PublicZone')

    return (
        <Present.Section type={'grey'} className={cls.section} id={'#public-zone'}>
            <Present.Overflow>
                <Present.Content className={cls.content}>
                    <Present.TextContainer>
                        <div
                            dangerouslySetInnerHTML={
                                {__html: t('content', {interpolation: {escapeValue: false}})}
                            }
                        />
                    </Present.TextContainer>
                    <Present.PictureContainer className={cls.picture}>
                        <div className={cls.label}>
                            {t('Financial Feed & News Zone')}
                        </div>
                        <Present.Picture src={pictureUrl} alt={t('Financial feed and news zone')}
                            width={916} height={1225}
                        />
                    </Present.PictureContainer>
                </Present.Content>
            </Present.Overflow>
        </Present.Section>
    );
};

export default PublicZone;