import React from 'react';
import cls from './Faq.module.scss'
import Accordion from "../../ui/Accordion/Accordion";


const faq = [
    {
        head: 'Is it safe?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
    {
        head: 'Why N+1?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
    {
        head: 'Can I create a share account with my counter from France?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
    {
        head: 'Should all my friends have the same bank to create a shared account in N+1?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
    {
        head: 'All transaction from bank account should be posted on shared page?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
    {
        head: 'How many people I can add in Shared Zone?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
    {
        head: 'Can I integrate a business a private account in N+1?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
    {
        head: 'How can I earn money on N+1 platform?',
        body: <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo.
            </p>
            <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum dui faucibus in ornare quam viverra
            </p>
        </>,
        note: 'Last updated: January 27 2021'
    },
]


const Faq = () => {
    return (
        <div className={cls.section}>
            <ul className={cls.list}>
                {
                    faq.map(
                        (item, index) => {
                            return <li className={cls.item}>
                                <Accordion
                                    head={item['head']}
                                    body={item['body']}
                                    note={item['note']}
                                />
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    );
};

export default Faq;