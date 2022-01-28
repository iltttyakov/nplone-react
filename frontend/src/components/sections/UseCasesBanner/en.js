import React from "react";
import {renderToString} from 'react-dom/server'
import cls from "./UseCasesBanner.module.scss";

const title = renderToString(
    <>Handle finance and<br/>spread ideas with<br/>one <span className={cls.fade}>hand</span> foot - so easy</>
)

export default {
  "N+1 is an innovative banking technologies hub, wrapped in social network form, to give people previously unavailable powerful financial instruments in a simple way.": "N+1 is an innovative banking technologies hub, wrapped in social network form, to give people previously unavailable powerful financial instruments in a simple way.",
  "Some Use Cases": "Some Use Cases",
  title
}