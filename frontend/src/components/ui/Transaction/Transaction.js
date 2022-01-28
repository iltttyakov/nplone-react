import React from 'react';
import cls from './Transaction.module.scss'
import Icons from "../Icons/Icons";
import LangLink from "../LangLink/LangLink";

// withdrawal - снятие
// adding - полполнение

const Transaction = ({transaction, className = ''}) => {
    const boxClsArr = [cls.box, className]
    let isAdding = true
    const type = transaction['type']
    const sum = transaction['sum']

    switch (type) {
        case 'withdrawal':
            boxClsArr.push(cls.withdrawal)
            isAdding = false
            break
        case 'adding':
            boxClsArr.push(cls.adding)
            break
    }

    return (
        <div className={boxClsArr.join(' ')}>
            <Icons className={cls.icon} name={'clip'} size={24}/>
            <span className={cls.text}>
                <span className={cls.label}>Transaction receipt:</span>
                <span>{isAdding ? '+' : '-'} {sum} €</span>
            </span>
            <LangLink to={'/#get-the-app'} className={cls.link}/>
        </div>
    );
};

export default Transaction;