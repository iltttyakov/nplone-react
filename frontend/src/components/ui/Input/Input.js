import React from 'react';
import cls from './Input.module.scss'
import Icons from "../Icons/Icons";

const Input = (
    {
        value,
        onChange,
        type = 'text',
        placeholder='',
        iconName = null,
    }
) => {
    return (
        <div className={cls.box}>
            <label className={cls.label}>
                {
                    iconName
                        ? <Icons
                            className={cls.icon}
                            size={24}
                            name={iconName}
                        />
                        : null
                }
                <input
                    value={value}
                    onChange={onChange}
                    className={cls.input}
                    type={type}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
};

export default Input;