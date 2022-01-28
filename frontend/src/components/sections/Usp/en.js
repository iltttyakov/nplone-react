import React from "react";
import {renderToString} from 'react-dom/server'
import cls from "./Usp.module.scss";

const title = renderToString(
    <>
        Manage your finances, <br className={cls.mobNone}/>by yourself or as a team
        {/*Enjoy the benefits <br className={cls.mobNone}/> of a joint bank account*/}
        {/*<span className={cls.underline}>*/}
        {/*    <span className={cls.underlineInner}> without opening</span>*/}
        {/*</span>*/}
        {/* a new one*/}
    </>
)

export default {
    title,
    "subtitle": "Financial joint management with your usual bank account. Suitable for corporate and individual use.",
    "Get the App": "Get the App",
    "desc": "N+1 enables <b>multiple members</b> with different bank accounts to jump into the same Shared Zone to manage finance, create and monetize content - live. N+1 is a tool that gives your current bank accounts <b>new possibilities</b>.",
    "financial social network app": "financial social network app",
    "page description": "N + 1 enables multiple members with different bank accounts to jump into the same shared page to live share transactions, split expenses, create financial news, monetize unique financial content, and another."
}