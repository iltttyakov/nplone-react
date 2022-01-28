import React from 'react';
import Preview from "../../ui/Preview/Preview";
import {useTranslation} from "react-i18next";
import cls from './Feed.module.scss'

import post1 from './post-1.jpg'
import post2 from './post-2.jpg'
import post3 from './post-3.png'
import post4 from './post-4.png'


const Feed = () => {
    const {t} = useTranslation('Feed')

    const feed = [
        {
            "name": t('title1'),
            "desc": t('desc1'),
            'transaction': {
                'type': 'adding',
                'sum': '2,000,000'
            },
            "thumbnail": post1,
            "url": '/blog/what-is-n1',
            "alt": t('alt1')
        },
        {
            "name": t('title2'),
            "desc": t('desc2'),
            'transaction': {
                'type': 'withdrawal',
                'sum': '100,249.00'
            },
            "thumbnail": post2,
            "url": '/blog/public-cases',
            "alt": t('alt2')
        },
        {
            "name": t('title3'),
            "desc": t('desc3'),
            "thumbnail": post3,
            "url": '/blog/limited-public-cases',
            "alt": t('alt3')
        },
        {
            "name": t('title4'),
            "desc": t('desc4'),
            "thumbnail": post4,
            "url": '/blog/private-cases',
            "alt": t('alt4')
        },

    ]

    return (
        <div className={cls.section}>
            <ul className={cls.list}>
                {
                    feed.map(
                        (item, index) => {
                            return <li className={cls.item} key={index}>
                                <Preview post={item}/>
                            </li>
                        }
                    )
                }

            </ul>
        </div>
    );
};

export default Feed;