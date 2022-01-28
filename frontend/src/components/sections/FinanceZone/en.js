import React from 'react';
import {renderToString} from 'react-dom/server'


const en = renderToString(
    <>
        <h2>Finance management Zone</h2>
        <p>
            All your BANK accounts in one place with extended functionality:
        </p>
        <ul>
            <li>
                <p><b>Connect</b> existing bank account - private & business.</p>
            </li>
            <li>
                <p><b>Create</b> a Shared Page to organize and track your financial transactions.</p>
            </li>
            <li>
                <p>
                    <b>Share</b> any transaction from your transaction history and post it on any Shared
                    Page you've created.
                </p>
            </li>
        </ul>
    </>
)


export default {
    content: en,
    'Finance management zone': 'Finance management zone'
}