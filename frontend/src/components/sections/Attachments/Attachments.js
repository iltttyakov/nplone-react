import React from 'react';
import cls from './Attachments.module.scss'
import Table from "../../ui/Table/Table";
import Attachment from "../../ui/Attachment/Attachment";
import {useTranslation} from "react-i18next";

const Attachments = () => {
    const {t} = useTranslation('Attachments', { useSuspense: false });

    const attachments = [
        {
            type: 'text',
            name: t('Datenschutzerklärung (Website).doc'),
            size: '10.1 MB',
            link: 'https://docs.google.com/document/d/1WmWfiQrJ3i6qvuBO4AGWMyPQIfbCc4-tGKFR1cis_nw/edit?usp=sharing',
        },
        {
            type: 'text',
            name: t('AGB (Website).doc'),
            size: '10.1 MB',
            link: 'https://docs.google.com/document/d/1KCimOtwzVsRvL2OoJ9PVzJTF2fhCDvCvG_jxymf4WQU/edit?usp=sharing',
        },
    ]

    return (
        <div className={cls.section}>
            <Table.Box>
                {
                    attachments.map(
                        (item, index) => {
                            return <Table.Row key={index}>
                                <Attachment
                                    size={item['size']}
                                    type={item['type']}
                                    name={item['name']}
                                    link={item['link']}
                                />
                            </Table.Row>
                        }
                    )
                }
            </Table.Box>
        </div>
    );
};

export default Attachments;