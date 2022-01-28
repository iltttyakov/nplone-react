import React, {useState} from 'react';
import cls from './Accordion.module.scss'
import Icons from "../Icons/Icons";

const Accordion = (
    {
        head,
        body,
        note
    }
) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={[cls.box, isOpen ? cls.open : null].join(' ')}>

            <div className={cls.head} onClick={() => setIsOpen(!isOpen)}>
                <Icons className={cls.icon} size={24} name={'arrow-bottom'}/>
                <h3 className={cls.title}>{head}</h3>
            </div>

            <div className={cls.body}>
                <div className={cls.bodyInner}>
                    <div className={cls.text}>
                        {body}
                    </div>
                    <div className={cls.note}>
                        {note}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Accordion;