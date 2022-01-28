import React from 'react';
import cls from './Blog.module.scss'

export default {
    Top: ({children}) => <section className={cls.section}>{children}</section>,
    Content: ({children}) => <div className={cls.content}>{children}</div>,
    ContentHeader: ({children}) => <div className={cls.contentHeader}>{children}</div>,
    Title: ({children}) => <h2 className={cls.contentTitle}>{children}</h2>,
    ContentSubTitle: ({children}) => <p className={cls.contentSubTitle}>{children}</p>,
}
