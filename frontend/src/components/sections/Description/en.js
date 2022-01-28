import React from "react";
import {renderToString} from 'react-dom/server'

const content = renderToString(
    <>
        <p>What is N + 1?</p>

        <p>
            N+1 enables multiple members with different bank accounts to jump into the same shared page to live
            share
            transactions, split expenses, keep statistics, create financial news, monetize unique financial content,
            and much more. N+1 is not a bank. It is a tool that gives your bank account unlimited possibilities.
        </p>
        <p>
            1. Shared pages can be managed by several people with different access settings, like Google Docs.
        </p>
        <p>
            2. Shared page - turns out such a blog with a financial focus, with flexible transparency mode - finance
            flow and news of your project can be visible to the public, your organization, your team, or just
            yourself.
        </p>
        <p>
            3. World's first financial social network based only on verified people and verified projects.
        </p>
        <p>
            Our Mission: to build the most transparent, and secure joint financial solution with a trusted and
            innovative network that empowers people and businesses around the world to focus attention and resources
            on worthy ideas and goals.
        </p>
        <p>
            Be n+1 among us!
        </p>
    </>
)

export default {content}