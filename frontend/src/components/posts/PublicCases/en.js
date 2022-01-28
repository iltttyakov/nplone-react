import React from "react";
import {renderToString} from 'react-dom/server'
import Transaction from "../../ui/Transaction/Transaction";
import {BrowserRouter} from "react-router-dom";
import LangLink from "../../ui/LangLink/LangLink";


import picture1 from './img1.jpg'
import picture2 from './img2.jpg'
import picture3 from './img3.jpg'


const text = renderToString(
    <BrowserRouter>

        <p>
            Sometimes, when preparing public articles, <a href="https://nplone.com/blog"> blogs, </a> reports, we need to attach statements, invoices to tell
            about the total cost of the project, or provide confirmation of the transaction. For example, you want to
            tell about how much it costs to build a house in Germany in convenient form with financial statistic.
        </p>

        <figure>
            <img src={picture1} alt={'Costs to build a house'}/>
            <figcaption>Costs to build a house - public page</figcaption>
        </figure>

        <Transaction
            transaction={{
                type: 'withdrawal',
                sum: '100,249.00',
            }}
        />

        <p>
            If your goal is to become financially open or to make your project public, then N + 1 is the right financial
            tool. You can integrate a company and its financial indicators into social networks, the internet in a few
            minutes.
        </p>

        <p>
            N + 1 is a new marketing channel with a ready-made environment for public finance activities. Through this
            channel, you can financially interact with the public, earning money from unique financial content.
        </p>

        <h2>1. Everyday use cases</h2>

        <p>
            Public people have the opportunity to talk about their project with supported financial facts and make money
            on it.
        </p>

        <b id={'#influencers'}>For whom:</b>
        <ul>
            <li>bloggers,</li>
            <li>media people,</li>
            <li>fund representatives,</li>
            <li>community representatives,</li>
            <li>public companies and organization.</li>
        </ul>

        <figure>
            <div><img src={picture2} alt={'Cost of living'}/></div>
            <figcaption>Cost of living in Los Angeles</figcaption>
        </figure>

        <p>
            All personal information remains under control at any given time. There remains complete freedom of action.
        </p>

        <b>There are several options:</b>
        <ul>
            <li>
                do not publish your financial transactions, just watch how public project make it
            </li>
            <li>
                publish transactions selectively with a customizable display of information fields of this transaction:
                for example, only the amount of money or only the recipient,
            </li>
            <li>
                publish absolutely everything - in automatic mode.
            </li>
            <li>
                give the rights to publish to your partner, employee, or team.
            </li>
        </ul>

        <b>Such approach leads to:</b>
        <ul>
            <li>
                Openness will generate greater levels of loyalty.
            </li>
            <li>
                It will help people understand how processes work, directly with an understanding of their financial
                component.
            </li>
            <li>
                The value of the money spent will be directly visible.
            </li>
            <li>
                Worthy ideas will receive support and monetization from society, in proportion to their relevance.
            </li>
        </ul>

        <h2 id={'#large-scale'}>2. Large-scale use cases </h2>

        <p>
            <b>National and international projects & sustainable transformation.</b> There are no significant
            restrictions on the technology side, so N+1 can be used to transparently manage
            large national projects in the EU to avoid inefficient spending of funds. All expenses will be closely
            monitored by the entire public. Violations will be detected faster, without the involvement of additional
            regulatory authorities. This approach will raise the responsibility of managers, employees, and contractors
            since they will all feel responsible to society, understand their high role and importance.
        </p>


        <b>Environmental projects for climate protection and for more sustainability</b>
        <ul>
            <li> Open investing in promoting green technologies.</li>
            <li>Open investing in programs to clean up the world's oceans.</li>
            <li>Open investing in forest restoration programs.</li>
            <li>Population regulation through investment in development and education.</li>
        </ul>


        <figure>
            <img src={picture3} alt={'Foundation organisation'}/>
            <figcaption>The bill & melinda gates foundation in N+1 execution</figcaption>
        </figure>

        <b>Perspective World Research projects:</b>
        <ul>
            <li>Construction of the ITER fusion reactor;</li>
            <li>Investing in space exploration,</li>
            <li>Regulation of artificial intelligence</li>
        </ul>

        <p>
            That is, the <b>world community</b> with N+1 is able to influence the ecological situation <b>in any
            other</b> region of the world.
        </p>

        <p>
            The world community can support an issential important projects and technologies at the early stage untill
            they are financial unprofitable. Like the transition to hydrogen as the main fuel.
        </p>

        <p>
            The world community will be able to influence the state of affairs outside the earth, for example, the
            exploration of Mars.<br/>
            <a href="https://www.independent.co.uk/life-style/gadgets-and-tech/elon-musk-spacex-mars-laws-starlink-b1396023.html">https://www.independent.co.uk/life-style/gadgets-and-tech/elon-musk-spacex-mars-laws-starlink-b1396023.html</a><br/>
            Hi Elon.
        </p>

        <p>
            <b>Who is the N+1 solution for?</b><br/>
            In the EU there is the Platform on Sustainable Finance that unites
            organizations working towards sustainable development:
        </p>

        <ul>
            <li>European Environment Agency,</li>
            <li>European Investment Bank,</li>
            <li>European Investment Fund</li>
        </ul>

        <p>
            These organizations are obliged monitor and report on capital flows towards sustainable investments. With
            N+1 platform these organizations will take their productivity and transparency level to another level.
        </p>


        <figure>
            <video controls src={'https://ec.europa.eu/info/sites/default/files/business_economy_euro/banking_and_finance/video/201207-video-eu-platform-on-sustainable-finance_en.mp4'}/>
            <figcaption>
                EU Platform on sustainable finance<br/>
                Source: https://ec.europa.eu/
            </figcaption>
        </figure>

        <h2 id={'#theoretically'}>3. Theoretically possible projects</h2>

        <p>
            Investment and origin of funds for election campaigns in parliament, presidential elections. It will be
            immediately clear who is behind certain people and what to expect from this person.
        </p>

        <h2>The values ​​of public transparent financial activity</h2>

        <ul>
            <li>
                A painless and smooth transition to a more transparent financial resource management model - to the
                sustainable development
            </li>
            <li>
                Consolidation is one place voluntarily of the executive and controlling parties.
            </li>
            <li>
                Public organizations increase loyalty to their work, making it recognizable. It is easier for
                transparent companies to attract investments and find clients.
            </li>
            <li>
                Transparency enables organic audience growth.
            </li>
            <li>
                Each person gets the opportunity to see the direct result of the organization, its contribution,
                values​​, and aspirations, in exchange for loyalty.
            </li>
            <li>
                Monetizing unique financial content.
            </li>
        </ul>

        <p>
            Access to the shared page can be closed at any time, for any group of people.
        </p>

        <p>
            Read more: <LangLink to={'/blog/limited-public-cases'}>Limited public cases</LangLink>
        </p>

    </BrowserRouter>
)

export default {
    "page description": "N + 1 is a new marketing channel with a ready-made environment for public finance activities. Through this channel, you can financially interact with the public, earning money from unique financial content.",
    "date": "14 September 2021, 12:10",
    "title": "Public cases",
    "keywords": "transparency, transparent finance, Social banking, money management, environmental finances, Sustainable Finance, climate protection and for more sustainability, sustainable transformation, the challenge of sustainable finance, Global Banking",
    text
}
