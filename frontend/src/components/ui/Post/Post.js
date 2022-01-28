import React from 'react';
import cls from './Post.module.scss'


export default {
    Container: ({children}) => <div className={cls.container}>{children}</div>,
    Date: ({children}) => <p className={cls.date}>{children}</p>,
    Title: ({children}) => <h1 className={cls.title}>{children}</h1>,
    Text: ({children}) => <div className={cls.text}>{children}</div>
}