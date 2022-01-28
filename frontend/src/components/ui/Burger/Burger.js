import React from 'react';
import cls from './Burger.module.scss'
import Icons from "../Icons/Icons";

const Burger = ({onClick, isOpen = false}) => {
    return (
        <button className={cls.box} onClick={onClick}>
            <Icons
                name={isOpen ? 'close' : 'burger'}
                className={cls.icon}
                size={24}
            />
        </button>
    );
};

export default Burger;