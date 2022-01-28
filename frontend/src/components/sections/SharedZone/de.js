import React from 'react';
import {renderToString} from 'react-dom/server'

const de = renderToString(
    <>
        <h2>Gemeinschaftsbereich</h2>
        <p>
            Poste Transaktionen für Organisationen, Familienmitglieder, geschlossene Communities oder die Öffentlichkeit
            auf der Gemeinschaftsseite.
        </p>
        <ul>
            <li>
                <p>
                    Lade zu deiner Gemeinschaftsseite ein, wen du möchtest: Familie, Freunde, Partner, Mitarbeiter oder
                    Händler - ganz egal, in welchem EU-Land sie sich befinden.
                </p>
            </li>
            <li>
                <p>
                    Veröffentliche Transaktionen unter Wahrung deiner Privatsphäre: Teile entweder alle Felder deiner
                    Transaktion oder poste nur ein einzelnes Feld, wie beispielsweise den Geldbetrag.
                </p>
            </li>
            <li>
                <p>
                    Erstelle Neuigkeiten mit angehängten Zahlungsbelegen und Finanzberichten.
                </p>
            </li>
            <li>
                <p>
                    Lege individuelle Zugriffseinstellungen für jedes eingeladene Mitglied fest. Nutzer mit geeigneten
                    Zugriffsrechten können ihre Transaktionen ebenfalls auf der Gemeinschaftsseite veröffentlichen.
                </p>
            </li>
            <li>
                <p>
                    Teile Zahlungsbelege mit deiner Organisation und deinem Netzwerk.
                </p>
            </li>
            <li>
                <p>
                    Verwalte deine Ausgaben und Einnahmen. Analysiere die Statistiken der einzelnen Teilnehmer. Teile
                    Rechnungen auf oder führe Auktionen, Ausschreibungen und Einkäufe durch.
                </p>
            </li>
            <li>
                <p>
                    Dein Geld bleibt jederzeit unter deiner Kontrolle. Genieße alle Vorteile eines gemeinsamen Kontos +
                    zusätzliche Sicherheit.
                </p>
            </li>
        </ul>
    </>
)


export default {
    content: de,
    "Get the App": "Get the App",
    "Shared transactions zone": "Gemeinsame Transaktionszone",
}