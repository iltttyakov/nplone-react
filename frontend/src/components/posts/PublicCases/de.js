import React from "react";
import {renderToString} from 'react-dom/server'
import {BrowserRouter} from "react-router-dom";
import LangLink from "../../ui/LangLink/LangLink";


import picture1 from './img1.jpg'
import picture2 from './img2.jpg'
import picture3 from './img3.jpg'


const text = renderToString(
    <BrowserRouter>

        <p>
            Manchmal, wenn wir Artikel, Blogs oder Berichte für die Öffentlichkeit vorbereiten, müssen wir Auszüge,
            Rechnungen anhängen, um über die Gesamtkosten des Projekts zu informieren. Ein Beispiel hierfür wäre, wenn
            man anhand einer Finanzstatistik zeigen möchte, wie viel es kostet, ein Haus in Deutschland zu bauen.
        </p>

        <figure>
            <img src={picture1} alt={'Kosten für den Hausbau'}/>
            <figcaption>Kostenaufstellung für den Bau eines Hauses - Öffentliche Seite</figcaption>
        </figure>

        <p>
            Wenn du dich finanziell öffnen möchtest und deine Projekte veröffentlichen willst, dann ist N+1 genau das
            richtige Tool für dich. Du dein Unternehmen und dessen Finanzkennzahlen in nur wenigen Minuten in das
            soziale Netzwerk integrieren.
        </p>

        <p>
            N+1 ist ein neuer Marketingkanal für öffentliche Finanzaktivitäten. Über diesen Kanal kannst du mit der
            Öffentlichkeit interagieren und mit einzigartigen Finanzinhalten Geld verdienen.
        </p>

        <h2>1. Alltägliche Anwendungsmöglichkeiten</h2>

        <p>
            Personen des öffentlichen Lebens haben die Möglichkeit, über ihr Projekt mit gestützten finanziellen Fakten
            zu sprechen und damit Geld zu verdienen.
        </p>

        <b id={'#influencers'}>Für wen:</b>
        <ul>
            <li>Blogger,</li>
            <li>Presseleute,</li>
            <li>Fondsvertreter,</li>
            <li>Gemeindevertreter,</li>
            <li>öffentliche Unternehmen und Organisationen</li>
        </ul>

        <figure>
            <div><img src={picture2} alt={'Lebenskosten'}/></div>
            <figcaption>Lebenshaltungskosten in Los Angeles</figcaption>
        </figure>

        <p>
            Alle persönlichen Informationen bleiben zu jedem Zeitpunkt unter deiner Kontrolle. Es besteht weiterhin
            volle Handlungsfreiheit.
        </p>

        <b>Es gibt mehrere Möglichkeiten:</b>
        <ul>
            <li>
                Veröffentliche deine Finanztransaktionen nicht, sondern beobachte, wie dein Projekt sich öffentlich so
                macht.
            </li>
            <li>
                Veröffentliche ausgewählte Transaktionen mit der Möglichkeit, nur gewisse Informationsfelder freizugeben
                (z.B. nur den Geldbetrag oder nur den Empfänger).
            </li>
            <li>
                Veröffentliche absolut alles - im automatischen Modus.
            </li>
            <li>
                gib deinen Geschäftspartnern, Mitarbeitern oder deinem Team Veröffentlichungsrechte
            </li>
        </ul>

        <b>Vorteile:</b>
        <ul>
            <li>
                Offenheit führt zu einem höheren Maß an Loyalität.
            </li>
            <li>
                Hilft den Leuten zu verstehen, wie Prozesse funktionieren und zeigt Verständnis.
            </li>
            <li>
                Transaktionen werden transparent aufgeschlüsselt und sind für alle Berechtigten einsehbar.
            </li>
            <li>
                Innovative Ideen erhalten Unterstützung und Monetarisierung durch die Gesellschaft.
            </li>
        </ul>

        <h2 id={'#large-scale'}>2. Umfangreiche Anwendungsfälle</h2>

        <p>
            <b>Nationale Projekte & nachhaltige Entwicklung</b><br/>
            N+1 schafft, dass große nationale Projekte in der EU transparent verwaltet und organisiert werden können, um
            ineffiziente Mittelverwendung zu vermeiden. Alle Ausgaben werden von der Öffentlichkeit genau überwacht.
            Zuwiderhandlungen werden schneller aufgedeckt, ohne zusätzlich Regierungsbehörden einschalten zu müssen.
            Manager, Angestellte und Antragnehmer werden die Bedeutung ihrer Arbeit noch besser verstehen können und
            werden sich gegenüber der Gesellschaft verantwortlich fühlen.
        </p>


        <b>Umweltprojekte für den Klimaschutz und für mehr Nachhaltigkeit</b>
        <ul>
            <li>Offenes Investieren in die Förderung grüner Technologien.</li>
            <li>Offenes Investieren in Programme zur Säuberung der Weltmeere.</li>
            <li>Offenes Investieren in Programme zur Wiederaufforstung der Wälder.</li>
            <li>Bevölkerungsregulierung durch Investitionen in Entwicklung und Bildung.</li>
        </ul>


        <figure>
            <img src={picture3} alt={'Stiftungsorganisation'}/>
            <figcaption>Die Bill & Melinda Gates Stiftung in N+1 Ausführung</figcaption>
        </figure>

        <b>Forschungsprojekte mit Perspektive:</b>
        <ul>
            <li>Bau des Fusionsreaktors ITER;</li>
            <li>Investitionen in die Erforschung des Weltraums,</li>
            <li>Regulierung der künstlichen Intelligenz</li>
        </ul>

        <p>
            Die <b>Öffentlichkeit</b> ist in der Lage, ökologische Situationen <b>in jeder anderen Region dieser
            Welt</b> zu beeinflussen.
        </p>

        <p>
            Die Öffentlichkeit kann essentiell wichtige Projekte und Technologien im Frühstadium unterstützen, bis sie
            finanziell unrentabel sind. Ein Beispiel hierfür wäre der Umstieg zu Wasserstoff als Hauptkraftstoff.
        </p>

        <p>
            Wir werden in der Lage sein, auch die Dinge außerhalb der Erde, wie z.B. den Mars, zu beeinflussen. <br/>
            <a href="https://www.independent.co.uk/life-style/gadgets-and-tech/elon-musk-spacex-mars-laws-starlink-b1396023.html">https://www.independent.co.uk/life-style/gadgets-and-tech/elon-musk-spacex-mars-laws-starlink-b1396023.html</a><br/>
            Hi Elon.
        </p>

        <p>
            <b>Für wen ist N+1 geeignet?</b><br/>
            Innerhalb der EU gibt es die „International Platform on Sustainable Finance" (zu Deutsch: Internationale
            Plattform für nachhaltiges Finanzwesen), die Organisationen vereint und sich für eine nachhaltige
            Entwicklung einsetzt.
        </p>

        <ul>
            <li>Europäische Umweltagentur,</li>
            <li>Europäische Investitionsbank,</li>
            <li>Europäischer Investitionsfonds</li>
        </ul>

        <p>
            Diese Organisationen sind verpflichtet, Kapitalflüsse in Richtung nachhaltiger Investitionen zu überwachen
            und darüber zu berichten. Mit der N+1-Plattform werden diese Organisationen ihre Produktivität und
            Transparenz auf ein noch nie dagewesenes Niveau anheben können.
        </p>


        <figure>
            <video controls
                   src={'https://ec.europa.eu/info/sites/default/files/business_economy_euro/banking_and_finance/video/201207-video-eu-platform-on-sustainable-finance_en.mp4'}/>
            <figcaption>
                EU-Plattform für nachhaltige Finanzen<br/>
                Quelle: https://ec.europa.eu/
            </figcaption>
        </figure>

        <h2 id={'#theoretically'}>3. Theoretisch mögliche Projekte</h2>

        <p>
            Nehmen wir die Investitionen von Geldern für Wahlkämpfe im Parlament als Beispiel. Mit N+1 werden
            Transaktionen transparent veröffentlicht, sodass sofort klar ist, wer hinter welchen Personen steht und was
            von diesen Personen zu erwarten ist.
        </p>

        <h2>Vorteile der öffentlichen transparenten Finanztätigkeit</h2>

        <ul>
            <li>
                Ein schmerzfreier und reibungsloser Übergang zu einem transparenteren Modell der Finanzmittelverwaltung
                - zur nachhaltigen Entwicklung
            </li>
            <li>
                Die Konsolidierung ist eine freiwillige Leistung der ausführenden und kontrollierenden Parteien.
            </li>
            <li>
                Öffentliche Organisationen erhöhen die Loyalität zu ihrer Arbeit und machen sie erkennbar. Für
                transparente Unternehmen ist es einfacher, Investoren anzuziehen und Kunden zu finden.
            </li>
            <li>
                Transparenz ermöglicht ein organisches Wachstum des Kundenkreises.
            </li>
            <li>
                Monetarisierung einzigartiger Finanzinhalte.
            </li>
        </ul>

        <p>
            Der Zugriff auf die Shared Page kann jederzeit für eine beliebige Gruppe von Personen gesperrt werden.
        </p>

        <p>
            Weitere Informationen: <LangLink to={'/blog/limited-public-cases'}>Eingeschränkt öffentliche
            Anwendungsgebiete</LangLink>
        </p>

    </BrowserRouter>
)

export default {
    "page description": "N+1 ist ein neuer Marketingkanal für öffentliche Finanzaktivitäten. Über diesen Kanal kannst du mit der Öffentlichkeit interagieren und mit einzigartigen Finanzinhalten Geld verdienen.",
    "date": "28. April 2021, 14:10",
    "title": "Öffentliche Anwendungsgebiete",
    "keywords": "Klimaschutz und für mehr Nachhaltigkeit, nachhaltige Transformation, Herausforderung Sustainable Finance",
    text
}