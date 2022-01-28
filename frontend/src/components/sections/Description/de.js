import React from "react";
import {renderToString} from 'react-dom/server'

const content = renderToString(
    <>
        <p>Was ist N+1?</p>

        <p>
            N+1 ermöglicht es mehreren Mitgliedern mit unterschiedlichen Bankkonten, Transaktionen live zu verfolgen,
            Ausgaben zu teilen, Statistiken zu führen, Finanznachrichten zu erstellen, einzigartige Finanzinhalte zu
            monetarisieren und vieles mehr. N+1 ist keine Bank, sondern vielmehr ein Tool, das deinem Bankkonto
            unbegrenzte Möglichkeiten eröffnet.
        </p>
        <p>
            1. Gemeinschaftsseiten können von mehreren Personen mit unterschiedlichen Zugriffseinstellungen verwaltet
            werden - wie bei Google Docs.
        </p>

        <p>
            2. Gemeinschaftsseiten - wie ein Blog mit finanziellem Schwerpunkt und flexiblem Transparenzmodus -
            Geldströme und Neuigkeiten über dein Projekt können für die Öffentlichkeit, deine Organisation, dein Team
            oder nur für dich selbst sichtbar sein.
        </p>

        <p>
            3. Das erste finanzielle soziale Netzwerk der Welt, das nur auf überprüften Personen und verifizierten
            Projekten basiert.
        </p>

        <p>
            Unsere Mission: der Aufbau der transparentesten und sichersten gemeinsamen Finanzlösung mit einem
            vertrauenswürdigen und innovativen Netzwerk, welches es Privatpersonen und Unternehmen auf der ganzen Welt
            ermöglicht, ihre Aufmerksamkeit und Ressourcen auf lohnenswerte Ideen und Ziele zu konzentrieren.
        </p>

        <p>Werde ein Teil unserer Community!</p>
    </>
)

export default {content}