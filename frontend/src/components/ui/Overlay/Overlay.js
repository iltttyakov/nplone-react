import React from 'react';
import cls from './Overlay.module.scss'

const Overlay = ({isOpen = false, onClick = null, children}) => {
    const clsArr = [cls.box]

    if (isOpen) clsArr.push(cls.open)

    return (
        <div className={clsArr.join(' ')} onClick={onClick}>
            {children}
        </div>
    );
};

export default Overlay;