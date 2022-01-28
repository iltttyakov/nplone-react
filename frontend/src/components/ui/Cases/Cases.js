import React from "react";
import cls from './Cases.module.scss'
import LangLink from "../LangLink/LangLink";

import icon from './expand-more.svg'

export default {
    Content: ({children}) => <div className={cls.content}>{children}</div>,
    Row: ({children}) => <div className={cls.row}>{children}</div>,
    Title: ({children}) => <h3 className={cls.title}>{children}</h3>,
    List: ({children}) => <ul className={cls.list}>{children}</ul>,
    Item: ({children, link}) => <li className={cls.item}>
        <LangLink to={link} className={cls.link}>
            {children}
            <span className={cls.expandMore} style={{backgroundImage: `url(${icon})`}}/>
        </LangLink>
    </li>,
}