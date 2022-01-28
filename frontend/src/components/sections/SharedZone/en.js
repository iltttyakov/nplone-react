import React from 'react';
import {renderToString} from 'react-dom/server'

const en = renderToString(
    <>
        <h2>Shared zone</h2>
        <p>
            Post transactions to Shared Page for your organization, family members,
            closed community or the public.
        </p>
        <ul>
            <li>
                <p>
                    Invite to Shared Page people you want: family, friends, partners, employees, sellers - no matter
                    what EU countries they’re in.
                </p>
            </li>
            <li>
                <p>
                    Post transactions while keeping your privacy rights: either display all fields of
                    transactions or just a single field like a sum of money.
                </p>
            </li>
            <li>
                <p>
                    Create news with attached transactions and financial statements.
                </p>
            </li>
            <li>
                <p>
                    Enable unique access settings for each invited member. Members with suitable access
                    rights are able to post their transactions on shared page.
                </p>
            </li>
            <li>
                <p>
                    Publish PoP (Proof of Payments) with your organization & network.
                </p>
            </li>
            <li>
                <p>
                    Manage expenses and income. Analyze the statistic of each participant. Split
                    invoices,
                    run auctions, tenders, purchases.
                </p>
            </li>
            <li>
                <p>
                    Your money remains under your control - every moment. All benefits of the
                    joint-account
                    + safety.
                </p>
            </li>
        </ul>
    </>
)


export default {
    content: en,
    "Get the App": "Get the App",
    "Shared transactions zone": "Shared transactions zone",
}