import React from "react";
import {renderToString} from 'react-dom/server'
import {BrowserRouter} from "react-router-dom";
import LangLink from "../../ui/LangLink/LangLink";


const text = renderToString(
    <BrowserRouter>

        <p>
            In N + 1 you can connect all your bank accounts, crypto accounts from EU countries, and see the general
            transaction history in one place.
        </p>

        <p>
            You can use N + 1 as a place where you keep online records and organize your financial life by projects. For
            example:
        </p>

        <ul>
            <li>How much did it cost to study in England.</li>
            <li>How much did it cost to organize a grandmother's banquet.</li>
            <li>How much do you spend on gear.</li>
            <li>How much does it cost to maintain a car per year.</li>
        </ul>

        <p>
            At any time, open the project to certain people or the public. If the information you provide is valuable,
            then you can make money from it.
        </p>

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
    "page description": "In N + 1 you can connect all your bank accounts, crypto accounts from EU countries, and see the general transaction history in one place.",
    "date": "28 September 2021, 14:10",
    "title": "Private cases",
    text
}