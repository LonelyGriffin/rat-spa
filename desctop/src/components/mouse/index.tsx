import React, {useContext, useState} from "react";
import {NavHandler} from "../nav_handler";
import {NavContext} from "../../lib/nav_context";
const css  = require('./index.module.css');

export const MouseIcon = () => {

  const {hasNav} = useContext(NavContext)

  if (hasNav) {
    return null;
  }

  return (
    <div className={css.root}>
      <div className={css.button}/>
    </div>
  )
}
