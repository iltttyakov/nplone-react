import React from 'react';
import cls from './Preview.module.scss'
import Transaction from "../Transaction/Transaction";
import LangLink from "../LangLink/LangLink";


const Preview = ({post}) => {
    const clsArr = [cls.box]
    if (post['transaction']) clsArr.push(cls.withTransaction)

    return (
        <div className={clsArr.join(' ')}>

            <img className={cls.thumbnail} src={post['thumbnail']}/>

            <div className={cls.info}>
                <h4 className={cls.name}>{post['name']}</h4>
                <p className={cls.desc}>
                    {post['desc']}
                </p>
                {
                    post['transaction']
                        ? <Transaction className={cls.transaction} transaction={post['transaction']}/>
                        : null
                }
            </div>
            <LangLink to={post['url']} className={cls.link}/>
        </div>
    );
};

export default Preview;