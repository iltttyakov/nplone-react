import React from "react";
import cls from './Table.module.scss'

export default {
    Box: ({children}) => <ul className={cls.box}>{children}</ul>,
    Row: ({children}) => <li className={cls.row}>{children}</li>,
}