import React from 'react';
import cls from './Attachment.module.scss'

import Icons from "../Icons/Icons";

import pdf from './pdf.svg'
import text from './text.svg'
import table from './table.svg'
import slides from './slides.svg'

const types = {
    'pdf': pdf,
    'text': text,
    'table': table,
    'slides': slides,
}

const Attachment = (
    {
        type,
        name,
        size,
        link,
    }
) => {
    return (
        <div className={cls.box}>

            <img className={cls.icon} src={types[type]}/>

            <div className={cls.info}>
                <p className={cls.name}>{name}</p>
                <p className={cls.size}>{size}</p>
                <div className={cls.controlList}>
                    <a target={'_blank'} href={link} className={[cls.control, cls.share].join(' ')}>
                        <Icons
                            className={cls.controlIcon}
                            name={'share'}
                            size={24}
                        />
                    </a>
                    <a href={link} className={[cls.control, cls.download].join(' ')}>
                        <Icons
                            className={cls.controlIcon}
                            name={'download'}
                            size={24}
                        />
                        <span className={cls.controlText}>Download</span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Attachment;