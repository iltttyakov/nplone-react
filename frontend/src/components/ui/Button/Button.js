import React from 'react';
import cls from './Button.module.scss'
import Icons from "../Icons/Icons";
import LangLink from "../LangLink/LangLink";

const Button = (
    {
        children,
        className = '',
        size = 'small',
        decoration = 'fill',
        color = 'blue',
        to = null,
        onClick = null,
        iconName = null,
        iconPosition = 'right',
    }
) => {
    const clsArr = [cls.box, className]
    let iconSize = 24

    switch (size) {
        case 'micro':
            clsArr.push(cls.micro)
            break
        case 'small':
            clsArr.push(cls.small)
            break
        case 'big':
            clsArr.push(cls.big)
            iconSize = 32
            break
    }

    switch (decoration) {
        case 'fill':
            clsArr.push(cls.fill)
            break
        case 'stroke':
            clsArr.push(cls.stroke)
            break
    }

    switch (color) {
        case 'blue':
            clsArr.push(cls.blue)
            break
    }
    switch (iconPosition) {
        case 'left':
            clsArr.push(cls.iconLeft)
            break
    }

    const text = <span className={cls.text}>{children}</span>
    const icon = iconName ? <Icons className={cls.icon} name={iconName} size={iconSize}/> : null

    return to
        ? <LangLink className={clsArr.join(' ')} to={to} onClick={() => console.log('click')}>
            {text}{icon}
        </LangLink>
        : <button className={clsArr.join(' ')} onClick={onClick}>
            {text}{icon}
        </button>
};

export default Button;