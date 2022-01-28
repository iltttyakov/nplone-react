import React, {useState} from 'react';
import cls from './BookDemo.module.scss'
import Container from "../../wrappers/Container/Container";
import Form from "../../ui/Form/Form";
import Input from "../../ui/Input/Input";
import {useTranslation} from "react-i18next";
import Icons from "../../ui/Icons/Icons";
import Popup from "../Popup/Popup";
import {isWebpSupported} from "react-image-webp/dist/utils";
import api from "../../../api/api";

import titleArrow from './book-demo-arrow.svg'

import gradientDesktop from './book-demo-gradient.jpg'
import gradientDesktopWebP from './book-demo-gradient.webp'
import gradientMob from './book-demo-gradient-mob.jpg'
import gradientMobWebP from './book-demo-gradient-mob.webp'

const gradient = window.innerWidth >= 768
    ? isWebpSupported()
        ? gradientDesktopWebP
        : gradientDesktop
    : isWebpSupported()
        ? gradientMobWebP
        : gradientMob


const BookDemo = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false)

    const {t, i18n} = useTranslation('BookDemo')

    const tick = <Icons name={'tick-round'} size={24} className={cls.propertyIcon}/>


    const subscribe = (e) => {
        e.preventDefault()
        setLoading(true)

        api.subscription.new(email, name, i18n.language)
            .then(res => {
                setStatus('success')
                setEmail('')
                setName('')
                setPopupOpen(true)
                setLoading(false)
            })
            .catch(error => {
                setStatus('error')
                setPopupOpen(true)
                setLoading(false)
            })
    }


    return (
        <>
            <section className={cls.section} id={'#get-the-app'} style={{backgroundImage: `url(${gradient})`}}>
                <Container className={cls.container}>
                    <h1 className={cls.title}>
                        <span
                            dangerouslySetInnerHTML={
                                {__html: t('Get the first Financial Social Network<br/>Book your free demo', {interpolation: {escapeValue: false}})}
                            }
                        />
                        <span className={cls.titleArrow} style={{backgroundImage: `url(${titleArrow})`}}/>
                    </h1>
                    <p className={cls.subTitle}>{t('Invite only - early adopters phase')}</p>

                    <Form.Box className={cls.form} onSubmit={subscribe}>
                        <Form.Item>
                            <Input
                                onChange={e => setName(e.target.value)}
                                value={name}
                                placeholder={t('Name...')}
                                iconName={'person'}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                type={'email'}
                                placeholder={t('Email...')}
                                iconName={'mail'}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Submit loading={loading}>
                                {t('Get the App')}
                            </Form.Submit>
                        </Form.Item>
                    </Form.Box>


                    <ul className={cls.propertyList}>
                        <li className={cls.propertyItem}>
                            {tick}
                            <span className={cls.propertyText}>{t('Speed up repetitive tasks up to 100 times')}</span>
                        </li>
                        <li className={cls.propertyItem}>
                            {tick}
                            <span className={cls.propertyText}>{t('Control over member expenses')}</span>
                        </li>
                        <li className={cls.propertyItem}>
                            {tick}
                            <span className={cls.propertyText}>{t('Public finance-transparency option')}</span>
                        </li>
                        <li className={cls.propertyItem}>
                            {tick}
                            <span
                                className={cls.propertyText}>{t('First authorised financial network of people and projects')}</span>
                        </li>
                    </ul>

                </Container>

            </section>

            <Popup
                status={status}
                isOpen={popupOpen}
                onClose={() => {
                    setPopupOpen(false)
                    setStatus(undefined)
                }}
            />

        </>
    );
};

export default BookDemo;