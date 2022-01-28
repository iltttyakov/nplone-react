import React from "react";
import {renderToString} from 'react-dom/server'

const note = renderToString(
    <>
        * Personal use - when the only one active user consists in shared zone - owner.<br/>
        * Users are considered <b>active</b> if they have admin rights or connected their bank accounts
        to the Shared Space.<br/>
        * Audience: observers, subscribers, followers are not considered active users. Invite as many people as you want
        to view, comment, inspect, or export available financial data from your Shared Pages - for free.<br/>
    </>
)


export default {
    "Pricing": "Pricing",
    "/mo": "/mo",
    "of income": "of income",

    "Free": "Free",
    "Access to third-party private or public projects": "Access to third-party private or public projects",
    "14-day trial. Multi-banking & Extended version of Shared pages": "14-day trial. Multi-banking & Extended version of Shared pages",
    "Unlimited cloud storage for your projects": "Unlimited cloud storage for your projects",
    "unlimited number of Shared Pages. Only for personal use & Multi-banking - limited version": "unlimited number of Shared Pages. Only for personal use & Multi-banking - limited version",
    "per each active user - extended functionality": "per each active user - extended functionality",
    "pro-version of a Shared Page: includes professional financial tools for interacting with the audience": "pro-version of a Shared Page: includes professional financial tools for interacting with the audience",
    "monetization of unique financial content through subscription": "monetization of unique financial content through subscription",
    note
}