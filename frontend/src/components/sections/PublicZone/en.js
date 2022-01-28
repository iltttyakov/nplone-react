import React from 'react';
import {renderToString} from 'react-dom/server'


const content = renderToString(
    <>
        <h2>Public Zone - Network</h2>
        <p>
            Stay connected with companies, charitable organizations, funds and people sharing financial
            news
            and statements about new projects & investment opportunities.
            Make the same by yourself
        </p>
        <ul>
            <li>
                <p>Earning money on N+1 Platform</p>
                <small>A great way to be rewarded for good, open, engaging content on the
                    platform.</small>
            </li>
            <li>
                <p>Capture people’s attention and loyalty</p>
                <small>Involve members, subscribers, followers to vote or discuss financial
                    solutions.</small>
            </li>
            <li>
                <p>Spread information in a clever and quick way</p>
                <small>Integrate your transaction history with websites, social networks.</small>
            </li>
            <li>
                <p>Access unique financial information</p>
                <small>Get access to a Network of verified people and companies blogging about financial
                    life with proof of financial activity</small>
            </li>
            <li>
                <p>Influence the process</p>
                <small>Influence global issues worldwide. In enviromental matters, the world has no
                    boundaries.</small>
            </li>
        </ul>
    </>
)


export default {
    "Financial Feed & News Zone": "Financial Feed & News Zone",
    content,
    "Financial feed and news zone": "Financial feed and news zone"
}