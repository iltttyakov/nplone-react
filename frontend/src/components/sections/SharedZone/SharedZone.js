import React from 'react';
import cls from './SharedZone.module.scss'
import {useTranslation} from "react-i18next";
import {isWebpSupported} from "react-image-webp/dist/utils";
import Present from "../../ui/Present/Present";
import Button from "../../ui/Button/Button";

import picture from './shared-zone-picture.png'
import pictureWebP from './shared-zone-picture.webp'

const pictureUrl = isWebpSupported() ? pictureWebP : picture

const SharedZone = () => {
    const {t} = useTranslation('SharedZone')


    return (
        <Present.Section type={'green'} className={cls.section} id={'#shared-zone'}>
            <Present.Overflow>
                <Present.Content className={cls.content}>
                    <Present.PictureContainer className={cls.picture}>
                        <Present.Picture src={pictureUrl} alt={t('Shared transactions zone')}
                            width={903} height={1162}
                        />
                    </Present.PictureContainer>
                    <Present.TextContainer position={'right'}>
                        <div
                            dangerouslySetInnerHTML={
                                {__html: t('content', {interpolation: {escapeValue: false}})}
                            }
                        />
                        <Button
                            size={'big'}
                            decoration={'stroke'}
                            iconName={'arrow-right'}
                            className={cls.button}
                            to={'/#get-the-app'}
                        >
                            {t('Get the App')}
                        </Button>
                    </Present.TextContainer>
                </Present.Content>
            </Present.Overflow>
        </Present.Section>
    );
};

export default SharedZone;