import React from 'react';
import cls from './Responsible.module.scss'

import Social from "../../ui/Social/Social";
import Table from "../../ui/Table/Table";

import avatar from './avatar.png'
import {useTranslation} from "react-i18next";

const Responsible = () => {
    const {t} = useTranslation('Responsible')

    return (
        <div className={cls.section}>
            <Table.Box>
                <Table.Row>
                    <div className={cls.box}>
                        <img className={cls.avatar} src={avatar}/>
                        <div className={cls.text}>
                            <p className={cls.name}>
                                Alexander Palchikov <span className={cls.note}>{t('(owner)')}</span>
                            </p>
                            <p className={cls.job}>
                                CEO
                            </p>
                        </div>
                        <Social
                            size={'small'}
                            linkedin={'https://www.linkedin.com/in/aleksandr-palchikov/'}
                            telegram={'https://t.me/palexser'}
                        />
                    </div>
                </Table.Row>
            </Table.Box>
        </div>
    );
};

export default Responsible;