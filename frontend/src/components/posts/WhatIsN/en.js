import React from "react";
import {renderToString} from 'react-dom/server'
import Transaction from "../../ui/Transaction/Transaction";
import {BrowserRouter} from "react-router-dom";
import LangLink from "../../ui/LangLink/LangLink";


const text = renderToString(
    <BrowserRouter>
        <p>
            N + 1 enables multiple members with different bank accounts to jump into the same shared page to
            live share transactions, split expenses, create financial news, monetize unique financial content,
            and another. N + 1 is not a bank. It is a tool that gives your bank account unlimited possibilities.
        </p>

        <Transaction
            transaction={{
                type: 'adding',
                sum: '2,000,000',
            }}
        />

        <h2>
            N + 1 has three Zones: Finance Zone, Shared Zone, Network Zone.
        </h2>

        <p>
            <b>1. Financial Zone.</b><br/>
            Zone for the owner of bank accounts to manage the finance, choose the transactions for publishing on
            Shared Page, and set the visibility of these transactions.
        </p>

        <p>
            <b>2. Shared Zone.</b><br/>
            Shared Page - for your partners, friends, a certain group of people, community, subscribers,
            donators, and visitors. Through this page, you will be able to interact with any auditorium for any
            goal. Shared Page can be shared via a link to other participants.
        </p>

        <p>
            <b>3. Network Zone.</b><br/>
            <b>For influencers.</b> If you make the Shared Page of your project open for publicity you will get
            some
            preferences and a high level of responsibility from your customers. Your Shared Page in this case is
            like - Public disclosure Zone. You can earn the loyalty of your clients. You can monetize unique
            financial information.
        </p>

        <p>
            <b>For followers.</b> Thus, you can not only conveniently manage your finances, but also support
            local businesses in your region. The value of your money will be much higher than on the stock
            exchange. At the same time, you will be able to see how your funds are spent. You can learn by
            watching other public projects. You can support any project, nearby with you and on another
            continent.
        </p>

        <h2>
            Advantages and benefits over standard joint accounts.
        </h2>

        <ul>
            <li>
                N+1 is suitable for any scenario where you need to have shared costs, even if the participants
                are from different EU countries.
            </li>
            <li>
                You do not need to open a new bank account for co-management.
            </li>
            <li>
                Shared Space is easy to open and close. It does not oblige the participants of shared Space to
                anything.
            </li>
            <li>
                The money remains under the control of its owners at any time.
            </li>
            <li>
                No one can manipulate others. In case of complex disputes, you do not need to contact a lawyer
                to split the money from the joint account.
            </li>
        </ul>

        <h2>
            Conclusion
        </h2>

        <p>
            N+1 is like a Social Network with a strong financial focus, integrated with your bank accounts.
        </p>

        <h2>Our Mission</h2>

        <p>
            To build the most transparent, and secure joint financial management solution with a trusted and
            innovative network that empowers people and businesses around the world to focus attention and
            resources on worthy ideas and goals.
        </p>

        <p>Be n + 1 among us!</p>

        <h2>More details:</h2>

        <p>
            <LangLink to={'/blog/public-cases'}>Public Case</LangLink>
        </p>

        <p>
            <LangLink to={'/blog/limited-public-cases'}>Limited Public Case</LangLink>
        </p>

        <p>
            <LangLink to={'/blog/private-cases'}>Private Case</LangLink>
        </p>
    </BrowserRouter>
)

export default {
    "page description": "N + 1 enables multiple members with different bank accounts to jump into the same shared page to live share transactions, split expenses, create financial news, monetize unique financial content, and another. N + 1 is not a bank. It is a tool that gives your bank account unlimited possibilities.",
    "date": "28 April 2021, 10:34",
    "title": "What is N + 1?",
    text
}