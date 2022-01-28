import React from 'react';
import cls from './Preloader.module.scss'


import load from './load.gif'

const Preloader = () => {
    return (
        <div className={cls.container}>
            <img className={cls.picture} src={load}/>
        </div>
    );
};

export default Preloader;