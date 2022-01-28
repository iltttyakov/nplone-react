import React from 'react';
import cls from './Social.module.scss'
import Icons from "../Icons/Icons";

const Social = (
    {
        size = 'big',
        linkedin = '',
        telegram = '',
        facebook = '',
        instagram = '',
    }
) => {
    const clsArr = [cls.list]
    if (size === 'small') clsArr.push(cls.small)

    const iconSize = size === 'big' ? 24 : 18

    const item = (name, link) => <li className={cls.item}>
        <Icons
            className={cls.icon}
            name={name}
            size={iconSize}
        />
        <a className={cls.link} href={link} target={'_blank'}/>
    </li>

    return (
        <ul className={clsArr.join(' ')}>
            {linkedin ? item('linkedin', linkedin) : null}
            {telegram ? item('telegram', telegram) : null}
            {facebook ? item('facebook', facebook) : null}
            {instagram ? item('instagram', instagram) : null}
        </ul>
    );
};

export default Social;