import React from 'react';
import cls from './Popup.module.scss'
import Overlay from "../../ui/Overlay/Overlay";


import load from './load.gif'
import loadWebP from './load.webp'

const loadUrl = isWebpSupported()
    ? loadWebP
    : load

import success from './success.svg'
import error from './error.svg'
import {useTranslation} from "react-i18next";
import {isWebpSupported} from "react-image-webp/modules/utils";


const Popup = (
    {
        isOpen,
        onClose,
        status
    }
) => {
    const {t} = useTranslation('Popup')

    let icon = loadUrl
    let text = t('Loading...')

    if (status === 'success') {
        icon = success
        text = t('Thank you!')
    } else if (status === 'error') {
        icon = error
        text = t('Something went wrong...')
    }

    return (
        <Overlay isOpen={isOpen} onClick={onClose}>
            <div className={[cls.box, status].join(' ')} id={'subscription-status'}>
                <img className={cls.icon} src={icon} alt={'status icon'} width={160} height={160}/>
                <p className={cls.label}>{text}</p>
                <button className={cls.button} onClick={onClose}>Ok</button>
            </div>
        </Overlay>
    );
};

export default Popup;