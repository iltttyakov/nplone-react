import React from "react";
import {BrowserRouter} from "react-router-dom";
import LangLink from "../../ui/LangLink/LangLink";
import {renderToString} from 'react-dom/server'

import picture1 from './img1.jpg'
import picture2 from './img2.jpg'


const text = renderToString(
    <BrowserRouter>

        <b id={'#general'}>N + 1 who want to:</b>
        <ul>
            <li>jointly and efficiently manage finances blogs</li>
            <li>have trust and transparency in joint financial management,</li>
            <li>set goals together and go towards them,</li>
            <li>see at any time the statistics of transactions of each of the participants,</li>
            <li>maintain privacy using a regular bank account,</li>
            <li>combine private and business accounts - optional.</li>
        </ul>


        <b>N + 1 will save you from:</b>
        <ul>
            <li>opening a new bank account, studying the terms of use, getting used to a new bank,</li>
            <li>waiting for the process of joint authorization and approval by the bank,</li>
            <li>waiting for bank cards for a new account,</li>
            <li>the presence of legal problems with the division of joint funds,</li>
            <li>most disputable situations.</li>
        </ul>

        <h2 id={'#family'}>1. Case Family</h2>
        <p>
            You and your partner want to make total joint costs transparent for both sides. In such situations as paying
            rent, buying furniture, buying groceries, paying off a mortgage or loan, flying on vacation, and so on.
        </p>

        <p>
            <b>Family expansion</b> - the more the merrier.<br/>
            You can add anytime anyone to your account: financial advisor, children, lovers, assistant. Anyone.
        </p>

        <p>
            <b>Fraud protection.</b><br/>
            You can also protect your old parents or underage children from cheating. Old people are an attractive
            opportunity for scammers. Therefore, you can access their transactions, with their permission and be
            informed about suspicious situations.
        </p>

        <h2 id={'#dormitory'}>2. Hostel or friends</h2>
        <p>
            Benny, Stefan, and Maria live in a hostel in Berlin. They must share expenses for rent, utilities, buying a
            new kettle or sofa, painting the wall, buying groceries.
        </p>

        <ul>
            <li>Therefore, they register at N + 1 and open a shared page in 5 minutes.</li>
            <li>They don't need to open a new bank account.</li>
            <li>They don't need to be clients of the same bank.</li>
            <li>They don't even need to have a bank in one country.</li>
            <li>All they need is their current standard bank accounts.</li>
        </ul>

        <figure>
            <div><img src={picture1} alt={'Shared transactions screenshot'}/></div>
            <figcaption>Shared transactions section of “Roommates” shared page</figcaption>
        </figure>

        <p>
            N + 1 will allow them to open a common area = shared page where relevant transactions will be published and if
            costs need to be split. There will be no more controversial actions. Everyone always knows who, when and
            what paid.
        </p>

        <p>
            <b>Going to the bar case.</b><br/>
            They can use the same account when going to the bar. Even though everyone was drunk, in the morning Benny,
            Stefan, and Maria can see how much was spent.
        </p>

        <p>
            <b>Prom night with flight to Sri Lanka case.</b><br/>
            The guys made it to prom. Hooray! Stefan created a separate general page for the entire university course.
            Now everyone can see the process of bringing money to the party, for each participant. All finances are open
            to all students. There are no more questions about how to manage money quickly, transparently, efficiently.
        </p>

        <h2 id={'#apartment'}>3. Apartment buildings with a management company</h2>

        <p>
            My house is Am Milchbornsberg 26. There are 12 apartments in my apartment building. About 20 people must
            meet decisions related to the house. Vote for. Vote against. Collect money for a new trash can, a new lawn,
            roof repairs, and so on. Today we met all decisions related to the home in Messengers, like WhatsApp.
        </p>

        <b>Current difficulties:</b>
        <ul>
            <li>It is not always clear who is writing about what</li>
            <li>Many themes overlap</li>
            <li>
                It is difficult to find the beginning and end of the discussion to understand the general opinion
            </li>
            <li>It is unclear whether all residents contributed money</li>
            <li>It is not clear when the management company made the purchase</li>
            <li>It is not clear for what amount the management company purchased the service</li>
            <li>It is difficult to find information about a particular purchase over time</li>
        </ul>


        <b>The same process with N + 1:</b>
        <ol>
            <li>
                Management company with their current bank account just creates Shared Pages in N + 1. A management
                company can have infinitely many Pages for each of their houses.
            </li>
            <li>
                For each house, if necessary, the management company appoints a responsible manager = admin for the
                shared page.
            </li>
            <li>
                Further, the management company opens access to the Public page for residents of the house. Then the
                management company publishes reports with transactions, news on the shared page.
            </li>
        </ol>

        <b>Residents can:</b>
        <ul>
            <li>
                see news about their home with transactions attached to them.
            </li>
            <li>
                See the entire transaction history.
            </li>
            <li>
                under each news or transaction, you can leave a comment, attach documents, receipts, photos - at
                least get to know each other.
            </li>
            <li>
                vote for the required financial solutions.
            </li>
            <li>
                organize a fundraiser in one click.
            </li>
        </ul>

        <p>
            The process becomes transparent for residents and the management company. The management company saves 50x
            time to take into account all decisions of residents and inform them.
        </p>

        <figure>
            <div><img src={picture2} alt={'Shared page for residents and management company'}/></div>
            <figcaption>N + 1 shared page for residents and management company</figcaption>
        </figure>

        <b>Values for management company and residents:</b>
        <ul>
            <li>
                there is all the necessary environment for conducting the financial activities of the management
                company. Only registration is required.
            </li>
            <li>
                saving 50x time on facility management. Switching between Shared Spaced for every house is instant. The
                publication and discussion of transactions take place in the context of events – inflow. The money for
                the necessary purchases can be easily collected.
            </li>
            <li>
                The management company can provide full transparency of its activities related to each house.
            </li>
            <li>
                The management company increases loyalty to its activities, due to transparency and effective
                interaction
            </li>
            <li>
                N + 1 brings together business and ordinary people in one place.
            </li>
            <li>
                residents take part in resolving issues, including financial ones.
            </li>
            <li>
                residents now have a page and their home: a new community.
            </li>
            <li>
                All people who buy housing in this house will know about all the activities, about the history of this
                house.
            </li>
        </ul>

        <h2 id={'#department'}>4. Finance department in the company</h2>

        <p>
            Owner has a two companies. Suppose Company One in Germany. The company’s bank is N26. The Company Two in
            Portugal - presumably, it is more profitable for you to use two banks, like Novo Banco and Revolut.
        </p>

        <p>
            Owner integrates three bank accounts for two companies in N + 1 in 5 minutes: N26, Novo Banco, Revolut and
            creates shared pages for each of the companies.
        </p>

        <p>
            <b>The Company One</b><br/>
            Presumable for the first company, you create 4 shared spaces linked to an N26 account:
        </p>

        <ul>
            <li>
                <b>Shared Page 1.</b> Finance Department - gives financiers access to view all transactions. Each of
                them will be able to see, analyze and quickly respond to transactions. The efficiency of the financial
                team and the level of its responsibility will be increased.
            </li>
        </ul>
        <ul>
            <li>
                <b>Shared Page 2.</b> Founders - always have all the numbers about the company, they can discuss any
                transaction without sending screenshots to each other.
            </li>
        </ul>
        <ul>
            <li>
                <b>Shared Page 3.</b> Investors - founders or analytics select the necessary transactions, attach them
                to the news and publish them in the general area for investors.
            </li>
        </ul>
        <ul>
            <li>
                <b>Shared Page 4.</b> Business environment. The company wants to carry out purchases, conduct auctions,
                or tenders. All candidates from all EU can be added to the shared Page to make the process efficient and
                convenient.
            </li>
        </ul>

        <p>
            <b>Company Two</b><br/>
            You have integrated into N + 1 extra two bank accounts: Novo Banco, Revolut to see the sum of all transactions
            - like an aggregator. Steps 1, 2, 3, 4 can be conducted as in the first company, if necessary.<br/>
            Congratulations. Now you have two companies integrated into N + 1. You switch between companies, between banks
            and departments in one second, while having complete financial information.
        </p>


        <b>Values:</b>
        <ul>
            <li>
                N + 1 allows you to switch between companies, bank accounts, and audiences through one application.
                You can effectively manage an entire enterprise, with different departments or just several
                companies located in different EU countries.
            </li>
            <li>
                Owner and admins get control over the movement of funds within the company, and the decisions made.
                Owner and admins are always in the flow and respond to calls quickly. Project owners, teams will
                make more efficient, responsible, and balanced decisions.
            </li>
            <li>
                Owner and admins can instantly share any information or transaction: with other departments, with
                board members, investors, with other closed communities, or make a public statement.
            </li>
            <li>
                You shouldn't open a third bank account to start using N + 1. You are not changing the structure of
                the company to start using N + 1.
            </li>
            <li>
                You keep the same level of banking security, like without N + 1. N + 1 does not have access to closed
                bank information and private banking services.
            </li>
        </ul>

        <h2 id={'#communities'}>5. Closed Communities</h2>


        Several communities can be organized with one bank account. It doesn’t matter what you do:
        <ul>
            <li>yacht or closed investors club;</li>
            <li>organize paid courses;</li>
            <li>orchestra.</li>
        </ul>


        <p>
            People can immediately get together to make a group purchase, group investment, and save money. Any group of
            people can instantly organize themselves to conduct transparent financial activities.
        </p>

        <p>
            Earning opportunities.<br/>
            Members pay fees to get access to Public Page to unique finance information. Additional required
            contributions can also be made quickly.<br/>
            Each member of a community can view, control the spending of the community, and participate in voting.
        </p>

        <h2>Conclusion:</h2>
        <p>
            N + 1 gives people the ability to immediately get together, instantly finance partners, leaders while
            controlling them. Such social control filter out bad ideas, dishonest people and scammers. This is like a
            financial democracy.
        </p>

        <p>Read more: <LangLink to={'/blog/public-cases'}>Public cases</LangLink></p>
    </BrowserRouter>
)

export default {
    "page description": "N + 1 gives people the ability to immediately get together, instantly finance partners, leaders while controlling them. Such social control filter out bad ideas, dishonest people and scammers. This is like a financial democracy.",
    "date": "28 July 2021, 15:12",
    "title": "Limited-Public use cases or Closed Communities",
    "keywords": "joint account, shared account, bank account, aggregator, wallet, multi-banking, funds management, manage money together",
    text
}
