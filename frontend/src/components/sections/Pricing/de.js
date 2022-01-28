import React from "react";
import {renderToString} from 'react-dom/server'

const note = renderToString(
    <>
        * Persönlicher Gebrauch - wenn nur ein einziger aktiver Nutzer im Gemeinschaftsbereich ist.<br/>
        * Benutzer gelten als <b>aktiv</b>, wenn sie Administrationsrechte haben oder ihre Bankkonten mit den
        Gemeinschaftsseiten verbunden haben.<br/>
        * Zielgruppe: Beobachter, Abonnenten und Follower gelten nicht als aktive Nutzer. Lade also so viele Personen
        ein, wie du möchtest, um deine verfügbaren Finanzdaten von ihnen kommentieren, inspizieren oder exportieren zu
        lassen - völlig kostenlos.<br/>
    </>
)


export default {
    "Pricing": "Preise",
    "/mo": "/Mo.",
    "of income": "der Einkünfte",

    "Free": "Kostenlos:",
    "Access to third-party private or public projects": "Zugang zu privaten oder öffentlichen Projekten Dritter ",
    "14-day trial. Multi-banking & Extended version of Shared pages": "14-Tage-Testversion: Multibanking & erweiterte Version von Gemeinschaftsseiten ",
    "Unlimited cloud storage for your projects": "Unbegrenzter Cloud-Speicher für deine Projekte",

    "unlimited number of Shared Pages. Only for personal use & Multi-banking - limited version": "unbegrenzte Anzahl von Gemeinschaftsseiten. Nur für den persönlichen Gebrauch & Multibanking - begrenzte Version",
    "per each active user - extended functionality": "für jeden aktiven Nutzer in den Gemeinschaftsseiten - erweiterte Funktionalität",
    "pro-version of a Shared Page: includes professional financial tools for interacting with the audience": "Pro-Version von Gemeinschaftsseiten: enthält professionelle Finanztools zur Interaktion mit der Zielgruppe",
    "monetization of unique financial content through subscription": "Monetarisierung von einzigartigen Finanzinhalten durch Abonnements ",
    note
}