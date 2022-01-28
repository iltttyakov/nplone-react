import React from "react";
import {renderToString} from 'react-dom/server'
import cls from "./UseCasesBanner.module.scss";

const title = renderToString(
    <>
        Finanzen managen und Ideen verbreiten - <br/>
        Die Finanzwelt wird dir zu Füßen liegen!
    </>
)

export default {
    "N+1 is an innovative banking technologies hub, wrapped in social network form, to give people previously unavailable powerful financial instruments in a simple way.": "N+1 ist ein innovatives Portal für Bankentechnologien -  verpackt in Form eines sozialen Netzwerks, das Menschen auf einfache Art und Weise bisher nicht verfügbare, leistungsstarke Finanzinstrumente zur Verfügung stellt.",
    "Some Use Cases": "Anwendungsgebiete",
    title
}