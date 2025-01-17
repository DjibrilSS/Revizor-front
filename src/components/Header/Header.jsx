import React, { useState } from "react";
import styles from "./header.module.css";
import Auth from "../Authorization/Auth";

const Header = () => {

  const [modal, setModal] = useState(false)

const handleAuth = () => {
  setModal(true)
}

  return (
    <>
      {modal ? <Auth setModal={setModal} /> : null}
      <div className={styles.header}>
      <div className={styles.header_items}>
        <div className={styles.logo}>
          <img src="logo.png" alt="" />
        </div>
        <p>Gogolь-Mogolь</p>
        <div>
          <input className={styles.header_input} type="text" />
          <img className={styles.lupa} src="lupa.png" alt="" />
        </div>
      </div>
      <div className={styles.review_and_btn}>
        <div className={styles.review}>
          <img src="pencil.png" alt="" />
          <p>Отзыв</p>
        </div>
        <button onClick={handleAuth} className={styles.auth_btn}>Войти</button>
      </div>
    </div>
    </>
  
  );
};

export default Header;
