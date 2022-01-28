import React, {useEffect} from 'react'
import cls from './Layout.module.scss'
import Footer from "../../sections/Footer/Footer";
import {useLocation} from "react-router";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import smoothScroll from "../../../helpers/scroll";


import gradientDesktop from './gradients/radian-gradient.png'
import gradientDesktopWebP from './gradients/radian-gradient.webp'
import gradientMob from './gradients/radian-gradient-mob.png'
import gradientMobWebP from './gradients/radian-gradient-mob.webp'

const gradient = window.innerWidth >= 768
    ? isWebpSupported()
        ? gradientDesktopWebP
        : gradientDesktop
    : isWebpSupported()
        ? gradientMobWebP
        : gradientMob


const Layout = ({children, radian = false}) => {
    const location = useLocation()
    const clsArr = [cls.box]

    if (radian) clsArr.push(cls.sectionRadian)


    useEffect(() => {
        const hash = location.hash
        if (hash) {
            try {
                smoothScroll(hash)
            } catch (e) {
                window.scrollTo(0, 0)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    return (
        <div className={clsArr.join(' ')}>
            {
                radian
                    ? <div
                        className={cls.radian}
                        style={{backgroundImage: `url(${gradient})`}}
                    />
                    : null
            }
            {children}
            <Footer/>
        </div>
    )
}

export default Layout