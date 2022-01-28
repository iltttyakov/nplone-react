import React from 'react';
import cls from './Form.module.scss'
import Icons from "../Icons/Icons";

import loadingIcon from './load.webp'

export default {
    Box: ({children, onSubmit, className}) => <form className={[cls.form, className].join(' ')} onSubmit={onSubmit}>
        {children}
    </form>,
    Item: ({children}) => <div className={cls.item}>{children}</div>,
    Submit: ({children, loading = false}) => {


        return (
            <button type={'submit'} className={[cls.submit, loading ? cls.disabled : ''].join(' ')} disabled={loading}>
                {
                    loading
                        ? <img className={cls.loading} src={loadingIcon} alt={'status icon'} width={45} height={45}/>
                        : <>
                            <span className={cls.submitText}>{children}</span>
                            <Icons className={cls.submitIcon} name={'arrow-right'} size={25}/>
                        </>
                }
            </button>
        )
    },
}