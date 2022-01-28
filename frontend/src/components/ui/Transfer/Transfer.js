import React from 'react';
import cls from './Transfer.module.scss'
import Icons from "../Icons/Icons";

const Transfer = ({iconName, href, children}) => {
    return (
        <div className={cls.container}>
            <Icons className={cls.icon} size={24} name={iconName}/>
            <span className={cls.text}>{children}</span>
            <a className={cls.link} target={'_blank'} href={href}/>
        </div>
    );
};

export default Transfer;