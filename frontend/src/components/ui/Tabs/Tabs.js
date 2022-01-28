import React from "react";
import cls from './Tabs.module.scss'

export default {
    Row: ({children}) => <ul className={cls.row}>{children}</ul>,
    Item: ({children, active = false, onClick = null}) => {
        const itemClsArr = [cls.item]
        if (active) itemClsArr.push(cls.active)

        return <li className={itemClsArr.join(' ')}>
            <button className={cls.button} onClick={onClick}>{children}</button>
        </li>
    },
}