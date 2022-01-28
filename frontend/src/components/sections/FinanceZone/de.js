import React from 'react';
import {renderToString} from 'react-dom/server'


const de = renderToString(
    <>
        <h2>Finanzbereich</h2>
        <p>
            Alle deine Bankkonten an einem Ort mit erweiterter Funktionalität
        </p>
        <ul>
            <li>
                <p><b>Verbinde</b> bereits vorhandene Geschäfts- oder Privatkonten.</p>
            </li>
            <li>
                <p><b>Erstelle</b> eine Gemeinschaftsseite, um deine finanziellen Transkationen zu verwalten und zu
                    verfolgen.</p>
            </li>
            <li>
                <p>
                    <b>Teile</b> eine beliebige Transaktion aus deinem Transaktionsverlauf und poste sie auf einer von
                    dir erstellten Gemeinschaftsseite.
                </p>
            </li>
        </ul>
    </>
)


export default {
    content: de,
    'Finance management zone': 'Finanzbereich',
}