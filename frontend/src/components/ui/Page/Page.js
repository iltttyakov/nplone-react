import React from "react";
import cls from './Page.module.scss'
import Container from "../../wrappers/Container/Container";

export default {
    Content: ({children}) => <Container className={cls.content}>{children}</Container>,
    Title: ({children}) => <h1 className={cls.title}>{children}</h1>,
    Text: ({children}) => <div className={cls.text}>{children}</div>,
}