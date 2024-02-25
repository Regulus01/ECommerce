import React from 'react'

//CSS
import styles from "./NotFound.module.css"

import notFoundImg from "../../assets/notFoundNBG.png"

const NotFound = () => {
  return (
    <div className={styles.div}>
        <h1>Ops, nada foi encontrado...</h1>
        <img src={notFoundImg} alt="" />
    </div>
  )
}

export default NotFound