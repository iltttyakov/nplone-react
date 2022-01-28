import React from "react";
import {renderToString} from 'react-dom/server'
import Transaction from "../../ui/Transaction/Transaction";
import LangLink from "../../ui/LangLink/LangLink";
import {BrowserRouter} from "react-router-dom";


const text = renderToString(
    <BrowserRouter>
        <p>
            N + 1 ermöglicht es mehreren Mitgliedern mit unterschiedlichen Bankkonten, Transaktionen live zu verfolgen,
            Ausgaben zu teilen, Statistiken zu führen, Finanznachrichten zu erstellen, einzigartige Finanzinhalte zu
            monetarisieren und vieles mehr. N+1 ist keine Bank, sondern vielmehr ein Tool, das deinem Bankkonto
            unbegrenzte Möglichkeiten eröffnet.
        </p>

        <Transaction
            transaction={{
                type: 'adding',
                sum: '+ 2,000,000',
            }}
        />

        <h2>
            N+1 ist in drei Bereiche unterteilt: Finanzbereich, Gemeinschaftsbereich, öffentlicher Bereich
        </h2>

        <p>
            <b>1. Finanzbereich</b><br/>
            Zone für den Bankkontoinhaber zur Verwaltung von Finanzen, Auswahl der Transaktionen, Festlegung der
            Sichtbarkeiten und zur Veröffentlichung von Shared Pages.
        </p>

        <p>
            <b>2. Gemeinschaftsbereich</b><br/>
            Gemeinschaftsseiten - für deine Geschäftspartner, Freunde, eine bestimmte Gruppe von Menschen, Communities,
            Abonnenten, Spender und Besucher. Über diese Seite kannst du mit jeder deiner Zielgruppen interagieren. Die
            Gemeinschaftsseite kann über einen Link für andere Teilnehmer freigegeben werden.
        </p>

        <p>
            <b>3. Öffentlicher Bereich</b><br/>
            <b>Für Influencer.</b> Wenn du die Gemeinschaftsseite deines Projekts für die Öffentlichkeit zugänglich
            machst,
            bekommst du Zuspruch und deutlich mehr Unterstützung von deinen Kunden. Deine Gemeinschaftsseite ist in
            diesem Fall wie ein Offenlegungsbereich. Du kannst dir die Loyalität deiner Kunden verdienen und
            einzigartige finanzielle Informationen monetarisieren.
        </p>

        <p>
            <b>Für Follower.</b> Mit N+1 kannst du nicht nur bequem deine Finanzen verwalten, sondern auch lokale
            Unternehmen
            in deiner Region unterstützen. Der Wert deines Geldes wird viel schneller steigen als an der Börse.
            Gleichzeitig kannst du sehen, wie dein Geld ausgegeben wird. Du kannst dazulernen, indem du andere
            öffentliche Projekte beobachtest und analysierst. Außerdem kannst du jedes Projekt unterstützen - egal ob
            regional in deiner Nähe oder auf dem anderen Ende der Welt.
        </p>

        <h2>Vorteile und Besonderheiten gegenüber herkömmlichen Gemeinschaftskonten.</h2>

        <ul>
            <li>
                N+1 eignet sich für absolut jedes Szenario, bei dem du gemeinsame Kosten hast - auch wenn die
                Projektteilnehmer aus verschiedenen EU-Ländern kommen.
            </li>
            <li>
                Für die Mitverwaltung muss kein zusätzliches Konto eröffnet werden.
            </li>
            <li>
                Der Gemeinschaftsbereich kann kinderleicht eröffnet und wieder geschlossen werden. Die Teilnehmer werden
                zu nichts verpflichtet.
            </li>
            <li>
                Das Geld bleibt zu jeder Zeit in der Kontrolle seiner Besitzer.
            </li>
            <li>
                Keiner kann den anderen hintergehen. Bei komplexen Streitigkeiten musst du dich nicht an einen Anwalt
                wenden, um das Geld eures gemeinsamen Kontos aufzuteilen.
            </li>
        </ul>

        <h2>Fazit</h2>
        <p>
            N+1 ist wie ein soziales Netzwerk mit starkem Finanzfokus, das dein Bankkonto mit einbindet.
        </p>

        <h2>Unsere Mission</h2>
        <p>
            Der Aufbau der transparentesten und sichersten gemeinsamen Finanzlösung mit einem vertrauenswürdigen und
            innovativen Netzwerk, welches es Privatpersonen und Unternehmen auf der ganzen Welt ermöglicht, ihre
            Aufmerksamkeit und Ressourcen auf lohnenswerte Ideen und Ziele zu konzentrieren.
        </p>

        <h2>Weitere Einzelheiten:</h2>

        <p>
            <LangLink to={'/blog/public-cases'}>Öffentliche Anwendungsgebiete</LangLink>
        </p>
        <p>
            <LangLink to={'/blog/limited-public-cases'}>Eingeschränkt öffentliche Anwendungsgebiet</LangLink>
        </p>
        <p>
            <LangLink to={'/blog/private-cases'}>Private Anwendungs</LangLink>
        </p>
    </BrowserRouter>
)

export default {
    "page description": "N + 1 ermöglicht es mehreren Mitgliedern mit unterschiedlichen Bankkonten, Transaktionen live zu verfolgen, Ausgaben zu teilen, Statistiken zu führen, Finanznachrichten zu erstellen, einzigartige Finanzinhalte zu monetarisieren und vieles mehr. N+1 ist keine Bank, sondern vielmehr ein Tool, das deinem Bankkonto unbegrenzte Möglichkeiten eröffnet.",
    "date": "28. April 2021, 14:10",
    "title": "Was ist N+1?",
    text
}