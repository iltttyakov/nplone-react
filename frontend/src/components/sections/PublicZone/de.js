import React from 'react';
import {renderToString} from 'react-dom/server'


const content = renderToString(
    <>
        <h2>Öffentlicher Bereich - Netzwerk</h2>
        <p>
            Bleibe mit Unternehmen, gemeinnützigen Organisationen, Geldgebern und Personen in Verbindung, die
            Finanznachrichten und Berichte über neue Projekte und Investitionsmöglichkeiten teilen.
            Schließe dich ihnen an!
        </p>
        <ul>
            <li>
                <p>Geld verdienen auf der N+1 Plattform</p>
                <small>Eine tolle Möglichkeit, um für gute, offene und ansprechende Inhalte auf der Plattform belohnt zu
                    werden.</small>
            </li>
            <li>
                <p>Erwecke Aufmerksamkeit und Loyalität</p>
                <small>Binden Mitglieder, Abonnenten und Follower ein, um über Ideen abzustimmen oder
                    Finanzierungslösungen zu diskutieren.</small>
            </li>
            <li>
                <p>Verbreite Informationen auf clevere und schnelle Weise</p>
                <small>Integriere deinen Transaktionsverlauf in Websiten und soziale Netzwerke.</small>
            </li>
            <li>
                <p>Zugriff auf einzigartige Finanzinformationen</p>
                <small>Erhalte Zugang zu einem Netzwerk von verifizierten Personen und Unternehmen, die über das
                    Finanzwesen bloggen.</small>
            </li>
            <li>
                <p>Beeinflusse den Prozess</p>
                <small>Beteilige dich an internationalen Themen.</small>
            </li>
        </ul>
    </>
)


export default {
    "Financial Feed & News Zone": "Finanzielle Feeds & News Zone",
    content,
    "Financial feed and news zone": "Finanzielle News Zone"
}