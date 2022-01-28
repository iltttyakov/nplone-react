import React from "react";
import {renderToString} from 'react-dom/server'
import cls from "./Usp.module.scss";

const title = renderToString(
    <>
        Finanzen allein oder im Team verwalten
        {/*Genieße die Vorteile eines gemeinsamen Bankkontos, <span className={cls.underline}><span*/}
        {/*className={cls.underlineInner}>ohne</span></span> extra eins eröffnen zu müssen*/}
    </>
)

export default {
    title,
    "subtitle": "Gemeinsame Finanzverwaltung mit deinem regulären Bankkonto. Für Unternehmen und Privatpersonen geeignet.",
    "Get the App": "App laden",
    "desc": "N+1 ermöglicht es <b>mehreren Mitgliedern</b> mit unterschiedlichen Bankkonten, in den selben Gemeinschaftsbereich einzutreten, um gemeinsam Finanzen zu verwalten, Inhalte zu erstellen und zu monetarisieren.<br>N+1 ist ein Tool, das deinem jetzigen Bankkonto <b>neue Funktionen</b> verpasst.",
    "financial social network app": "Finanzielles soziales Netzwerk",

    "page description": "N+1 ermöglicht es mehreren Mitgliedern mit unterschiedlichen Bankkonten, in den selben Gemeinschaftsbereich einzutreten, um gemeinsam Finanzen zu verwalten, Inhalte zu erstellen und zu monetarisieren."
}