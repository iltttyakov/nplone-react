import React from 'react';
import cls from './Tick.module.scss'
import Icons from "../Icons/Icons";

const Tick = (
    {
        className = '',
        size = 'big',
        color = 'blue',
    }
) => {
    const clsArr = [cls.box, className]
    let iconSize = 20

    switch (size) {
        case 'small':
            iconSize = 10
            clsArr.push(cls.small)
            break
        case 'big':
            clsArr.push(cls.big)
            break
    }

    switch (color) {
        case 'blue':
            clsArr.push(cls.blue)
            break
        case 'green':
            clsArr.push(cls.green)
            break
        case 'white':
            clsArr.push(cls.white)
            break
    }

    return (
        <span className={clsArr.join(' ')}>
            <Icons className={cls.icon} size={iconSize} name={'tick'}/>
        </span>
    );
};

export default Tick;