import React from "react";
import {renderToString} from 'react-dom/server'
import {BrowserRouter} from "react-router-dom";
import LangLink from "../../ui/LangLink/LangLink";


const text = renderToString(
    <BrowserRouter>

        <p>
            In N+1 kannst du alle deine Bankkonten und Kryptowährungskonten aus EU-Ländern miteinander verbinden und
            deinen gesamten Transaktionsverlauf im Blick haben.
        </p>

        <p>
            Du kannst N+1 als Sammelstelle für deine Online-Aufzeichnungen nutzen und dein Finanzleben nach Projekten
            organisieren.
        </p>

        Beispiele:
        <ul>
            <li>Wie viel hat es gekostet, in England zu studieren?</li>
            <li>Wie viel hat es gekostet, das Festessen für die Großeltern auszurichten?</li>
            <li>Wie viel geben gibst du für Ausrüstung aus?</li>
            <li>Wie viel kostet der Unterhalt für dein Auto?</li>
        </ul>

        <p>
            Du kannst das Projekt jederzeit für bestimmte Personen oder für die Öffentlichkeit zugänglich machen. Falls
            die Informationen, die du bereitstellst, für andere von Nutzen sind, kannst du sogar Geld verdienen.
        </p>

        <h2>Weitere Einzelheiten:</h2>

        <p>
            <LangLink to={'/blog/public-cases'}>Öffentliche Anwendungsgebiete</LangLink>
        </p>

        <p>
            <LangLink to={'/blog/limited-public-cases'}>Eingeschränkt öffentliche Anwendungsgebiete</LangLink>
        </p>

        <p>
            <LangLink to={'/blog/private-cases'}>Private Anwendungs</LangLink>
        </p>

    </BrowserRouter>
)

export default {
    "page description": "In N+1 kannst du alle deine Bankkonten und Kryptowährungskonten aus EU-Ländern miteinander verbinden und deinen gesamten Transaktionsverlauf im Blick haben.",
    "date": "28. September 2021, 14:10",
    "title": "Private Anwendungsgebiete",
    text
}