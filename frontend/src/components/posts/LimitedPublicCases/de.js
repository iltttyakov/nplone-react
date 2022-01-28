import React from "react";
import {BrowserRouter} from "react-router-dom";
import LangLink from "../../ui/LangLink/LangLink";
import {renderToString} from 'react-dom/server'

import picture1 from './img1.jpg'
import picture2 from './img2.jpg'


const text = renderToString(
    <BrowserRouter>

        <b id={'#general'}>N+1 - für alle, die...</b>
        <ul>
            <li>gemeinsam und effizient Finanzen verwalten wollen.</li>
            <li>sich nach Vertrauen und Transparenz im gemeinsamen Finanzmanagement sehnen.</li>
            <li>sich gemeinsam Ziele setzen und diese anstreben wollen.</li>
            <li>jederzeit die Transaktionsverläufe eines jeden Teilnehmers einsehen wollen.</li>
            <li>ihre Privatsphäre mit Hilfe eines regulären Bankkontos wahren wollen.</li>
            <li>private und geschäftliche Konten miteinander kombinieren wollen - optional.</li>
        </ul>

        <b>N+1 erspart dir:</b>
        <ul>
            <li>die Eröffnung eines neuen Bankkontos und das dazugehörige Durchgehen der Nutzungsbedingungen,</li>
            <li>die Gewöhnung an eine neue Bank,</li>
            <li>die Wartezeiten während dem Autorisierungsprozess,</li>
            <li>das Warten auf Bankkarten für ein neues Konto,</li>
            <li>rechtliche Probleme bei der Aufteilung gemeinsamer Mittel bei Streitigkeiten</li>
        </ul>

        <h2 id={'#family'}>1. Familie</h2>

        <p>
            Du und dein/-e Partner/-in wollen die gesamten gemeinsamen Kosten für beide Seiten transparent gestalten? -
            Kein Problem und besonders in Alltagssituationen wie dem Zahlen der Miete, dem Kaufen von Möbeln oder
            Lebensmitteln, dem Abbezahlen einer Hypothek oder eines Kredits oder beim Buchen des nächsten Urlaubs super
            praktisch.
        </p>

        <p>
            <b>Familienzuwachs</b> - je mehr, desto besser.<br/>
            Du kannst jederzeit weitere Familienmitglieder zu deinem Konto hinzufügen.<br/>
            Finanzberater, Kinder, Lebensgefährten, Assistenten. Jeden.
        </p>

        <p>
            <b>Schutz</b> vor Missbrauch.<br/>
            Mit N+1 kannst du deine Eltern oder minderjährigen Kinder vor Betrug schützen. Alte Menschen gehören zur
            Zielgruppe von Betrüger.<br/>
            Du kannst auf die Transaktionen deiner Familienangehörigen zugreifen und verdächtige Buchungen schnell
            erkennen.
        </p>


        <h2 id={'#dormitory'}>2. WGs oder Freunde</h2>

        <p>
            Benny, Stefan und Maria leben in einem Wohnheim in Berlin. Sie müssen sich die Ausgaben für Miete,
            Nebenkosten, den Kauf eines neuen Wasserkochers oder Sofas, das Streichen der Wand, den Einkauf von
            Lebensmitteln teilen.
        </p>

        Deshalb registrieren sie sich bei N+1 und eröffnen in 5 Minuten eine Gemeinschaftsseite.
        <ul>
            <li>Sie müssen kein neues Bankkonto eröffnen.</li>
            <li>Sie müssen auch nicht Kunden der gleichen Bank sein.</li>
            <li>Sie müssen nicht einmal Kunde einer Bank in demselben Land sein.</li>
            <li>Alles, was sie brauchen, sind ihre aktuellen Standard-Bankkonten.</li>
        </ul>

        <figure>
            <div><img src={picture1} alt={'Screenshot von geteilten Transaktionen'}/></div>
            <figcaption>Abschnitt über gemeinsame Transaktionen auf der Gemeinschaftsseite "Mitbewohner"</figcaption>
        </figure>

        <p>
            N+1 erlaubt es ihnen, einen gemeinsamen Bereich zu eröffnen, in welchem relevante Transaktionen
            veröffentlicht und Kosten geteilt werden. Kein Raum für Streitigkeiten mehr. Jeder weiß immer, wann er was
            bezahlt hat.
        </p>

        <p>
            <b>In der Bar</b><br/>
            Das gemeinsame Konto ist sogar für den nächsten Ausflug zur örtlichen Bar perfekt. Selbst wenn alle
            betrunken waren, können Benny, Stefan und Marie am nächsten Morgen sehen, wie viel sie ausgegeben haben.
        </p>

        <p>
            <b>Abschlussballnacht mit Flug nach Sri Lanka</b><br/>
            Die Truppe hat es zum Abschlussball geschafft. Hurra! Stefan hat eine eigene Shared Page für den gesamten
            Studiengang erstellt. Jetzt kann jeder ganz einfach sehen, wie viel jeder besteuern muss. Alle Finanzen sind
            für alle Studierenden einsehbar.
        </p>

        <h2 id={'#apartment'}>3. Mehrfamilienhäuser mit einer Hausverwaltung</h2>

        <p>
            Wer stimmt dafür, wer dagegen? - Halte einfach eine Umfrage ab! Geld sammeln für eine neue Mülltonne, einen
            neuen Rasenmäher oder eine Dachreparatur? - Kein Problem! Bis heute mussten wir alle Entscheidungen noch
            über Messenger wie WhatsApp treffen, doch das ist jetzt vorbei.
        </p>

        <b>Schwierigkeiten bei der Verwendung von Messenger:</b>
        <ul>
            <li>Es ist nicht immer klar, wer über was schreibt.</li>
            <li>Viele Themen überschneiden sich.</li>
            <li>Es ist schwierig, bei einer Diskussion den Überblick zu behalten.</li>
            <li>Es ist unklar, ob alle Bewohner Geld besteuern oder nicht.</li>
            <li>Es ist nicht klar, wann die Hausverwaltung den Kauf getätigt hat.</li>
            <li>Es ist unklar, wie hoch die Anschaffungskosten waren.</li>
            <li>Im Laufe der Zeit ist es schwierig, noch nachzuvollziehen wer was wann bezahlt hat.</li>
        </ul>

        <b>Der gleiche Prozess mit N+1:</b>
        <ol>
            <li>
                Die Hausverwaltung erstellt mit ihrem aktuellen Bankkonto ganz einfach eine Gemeinschaftsseite. Eine
                Hausverwaltung kann unendlich viele Seiten für verschiedene Häuser einrichten.
            </li>
            <li>
                Für jedes Haus ernennt die Verwaltungsgesellschaft ggf. einen verantwortlichen Verwalter = Admin für die
                Gemeinschaftsseite.
            </li>
            <li>
                Anschließend öffnet die Hausverwaltung den Zugang zur Seite für die Bewohner des Hauses. Jetzt kann sie
                Berichte mit Transaktionen veröffentlichen und Neuigkeiten mit den Bewohnern teilen.
            </li>
        </ol>

        <b>Anwohner können...</b>
        <ul>
            <li> ...Nachrichten über ihr Wohngebäude mit dazugehörigen Transaktionen sehen.</li>
            <li>...den gesamten Transaktionsverlauf sehen.</li>
            <li>...unter jeder Nachricht oder Transaktion einen Kommentar hinterlassen.</li>
            <li>...für die gewünschte Finanzierungsoption abstimmen.</li>
            <li>...mit nur einem Klick eine Spendenaktion organisieren.</li>
        </ul>

        <p>
            Der Prozess wird sowohl für die Hausverwaltung, als auch für die Anwohner des Gebäudes transparenter. Die
            Hausverwaltung kann sich die Hälfte ihrer Zeit sparen und die Entscheidungen eines jeden Bewohners
            berücksichtigen und sie über Fortschritte informieren.
        </p>

        <figure>
            <div><img src={picture2} alt={'Gemeinsame Seite für Bewohner und Verwaltungsgesellschaft'}/></div>
            <figcaption>N+1 Gemeinschaftsseite für Bewohner und Hausverwaltungen</figcaption>
        </figure>

        <b>Wertvoll für die Hausverwaltung und die Bewohner:</b>
        <ul>
            <li>
                Es sind alle notwendigen Rahmenbedingungen für die Durchführung finanzieller Aktivitäten der
                Hausverwaltungen gegeben. Lediglich eine Registrierung ist erforderlich.
            </li>
            <li>
                Deutliches Zeitersparnis für die Hausverwaltung. Das Wechseln zwischen den Shared Pages für die
                jeweiligen Häuser geht im Handumdrehen. Die Veröffentlichung und Besprechung von Transaktionen erfolgt
                im Rahmen von Veranstaltungen. Das Geld für notwendige Anschaffungen kann im Nu gesammelt werden.
            </li>
            <li>
                Die Hausverwaltung kann den Bewohnern volle Transparenz über finanzielle Aktivitäten bieten.
            </li>
            <li>
                Die Hausverwaltung erhöht die Loyalität ihrer Bewohner aufgrund der erhöhten Interaktion.
            </li>
            <li>
                N+1 bringt Unternehmen und Privatpersonen zusammen.
            </li>
            <li>
                Die Bewohner können am Problemlösungsprozess teilnehmen.
            </li>
            <li>
                Die Bewohner haben jetzt einen neuen Ort, an dem sie sich austauschen können.
            </li>
            <li>
                Alle Menschen, die eine Wohnung in diesem Haus kaufen oder mieten, wissen nun über alle Aktivitäten und
                über die Geschichte dieses Hauses Bescheid.
            </li>
        </ul>

        <h2 id={'#department'}>4. Finanzabteilung im Unternehmen</h2>

        <p>
            Ein Geschäftsinhaber besitzt zwei Unternehmen. Angenommen Unternehmen 1 hat seinen Firmensitz in
            Deutschland, Unternehmen 2 hat seinen Sitz in Portugal. In den meisten Fällen ist es profitabler, bei
            verschiedenen Banken Kunde zu sein.
        </p>

        <p>
            Der Inhaber integriert nun ganz einfach die Bankkonten in N+1 - und das in weniger als 5 Minuten! Er
            erstellt im Handumdrehen eine Gemeinschaftsseite für jedes seiner Unternehmen und zack - schon hat er all
            seine Finanzen im Blick.
        </p>

        <p>
            <b>Unternehmen 1</b><br/>
            Für das erste Unternehmen erstellt der Inhaber 4 Gemeinschaftsseiten.
        </p>

        <ul>
            <li>
                <b>Gemeinschaftsseite 1.</b> Finanzabteilung - gibt den Finanzverantwortlichen Zugang zur Einsicht in
                alle
                Transaktionen. Jeder von ihnen erhält die Möglichkeit, Transaktionen zu sehen, zu analysieren und
                schnell zu reagieren. Die Effizienz des Finanzteams und das Niveau seiner Verantwortung werden erhöht.
            </li>

            <li>
                <b>Gemeinschaftsseite 2.</b> Die Gründungsmitglieder - haben stets alle Zahlen über das Unternehmen, sie
                können
                jeden Vorgang besprechen, ohne sich gegenseitig Screenshots schicken zu müssen.
            </li>

            <li>
                <b>Gemeinschaftsseite 3.</b> Gründer oder Analytiker wählen die notwendigen Transaktionen aus, fügen
                ihnen
                Nachrichten hinzu und veröffentlichen sie für Investoren im allgemeinen Bereich.
            </li>

            <li>
                <b>Gemeinschaftsseite 4.</b> Das Unternehmen möchte Einkäufe tätigen und Auktionen oder Ausschreibungen
                durchführen. Interessenten aus der gesamten EU können der Gemeinschaftsseite hinzugefügt werden, um den
                Prozess effizient und bequem zu gestalten.
            </li>
        </ul>

        <p>
            <b>Unternehmen 2</b><br/>
            Für das zweite Unternehmen kann man, wenn gewünscht, einfach die Schritte 1, 2, 3 & 4 wiederholen. -
            Glückwunsch! Jetzt hat unser Unternehmensinhaber zwei Unternehmen vollständig in N+1 integriert. Er kann
            jetzt zwischen seinen Banken und Abteilungen in sekundenschnelle hin- und herwechseln und dabei den vollen
            Überblick über sein Unternehmen haben.
        </p>

        <b>Vorteile:</b>
        <ul>
            <li>
                N+1 ermöglicht es dir, zwischen zwei Firmen, Bankkonten und Zielgruppen über eine Anwendung zu wechseln.
                Du kannst dein Unternehmen effektiv verwalten und mit verschiedenen Abteilungen oder mehreren
                Unternehmen aus unterschiedlichen EU-Ländern interagieren.
            </li>
            <li>
                Unternehmensinhaber und Administratoren erhalten die volle Kontrolle über Kapitalbewegungen innerhalb
                des Unternehmen und können schnell Entscheidungen treffen. Projektleiter können ihre Teams schneller und
                effizienter organisieren und ausgewogenere Entscheidungen treffen.
            </li>
            <li>
                Eigentümer und Admins können jegliche Information oder Transaktion mit anderen Abteilungen,
                Vorstandsmitgliedern, Investoren oder anderen Mitgliedern teilen und Erklärungen abgeben.
            </li>
            <li>
                Um N+1 nutzen zu können, muss nicht extra ein weiteres Bankkonto eröffnet werden.
            </li>
            <li>
                Behalte das gleiche Maß an Bankensicherheit bei. N+1 hat keinen Zugriff auf geschlossene
                Bankinformationen und private Dienstleistungen.
            </li>
        </ul>

        Mit einem Bankkonto können mehrere Gemeinschaften organisiert und verwaltet werden. Es spielt keine Rolle, um
        was es bei der Gemeinschaft geht.
        Sei es...
        <ul>
            <li>ein Yacht oder geschlossener Investorenclub,</li>
            <li>gebührenpflichte Veranstaltungen</li>
            <li>oder Orchester,</li>
        </ul>
        <p>...bei N+1 ist jeder willkommen!</p>

        <p>
            Die Teilnehmer können sich sofort zusammenschließen, um Gruppeneinkäufe oder eine Gruppeninvestition zu
            tätigen. Jede beliebige Gruppe kann sich sofort zusammenschließen und sich finanziell austauschen.
        </p>

        <p>
            <b>Verdienstmöglichkeiten </b>
            Mitglieder zahlen Gebühren, um Zugang zum öffentlichen Bereich mit einzigartigen Finanzinformationen zu
            erhalten. Zusätzliche erforderliche Beiträge können schnell geleistet werden.<br/>
            Jedes Mitglied kann die Ausgaben der Gemeinschaft einsehen, kontrollieren und an Abstimmungen teilnehmen.
        </p>

        <h2 id={'#communities'}>5. Geschlossene Gemeinschaften </h2>

        <h2>Fazit:</h2>

        <p>
            N+1 bietet die Möglichkeit, in kürzester Zeit zusammen Projekte zu finanzieren. Der Transaktionsverlauf ist
            völlig transparent und schützt somit vor unehrlichen Menschen und Betrügern.<br/>
            Wir nennen das finanzielle Demokratie.
        </p>

    </BrowserRouter>
)

export default {
    "page description": "N+1 bietet die Möglichkeit, in kürzester Zeit zusammen Projekte zu finanzieren. Der Transaktionsverlauf ist völlig transparent und schützt somit vor unehrlichen Menschen und Betrügern.",
    "date": "28. Juli 2021, 14:10",
    "title": "Eingeschränkt öffentliche Anwendungsgebiete oder geschlossene Gemeinschaften",
    "keywords": "Gemeinschaftskonto, Partnerkonto, Alle Bankkonten",
    text
}