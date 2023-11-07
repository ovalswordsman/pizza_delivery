import React, { useState } from "react";
import styles from "./Login.module.css";
import show_img from "../Assets/Icons/show.png";
import hide_img from "../Assets/Icons/hide.png";
import login_avatar from "../Assets/Icons/login_avatar.png";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.form_container}>
        <form className={styles.login_form}>
          <span className={styles.login_form_title}>Welcome</span>
          <span className={styles.login_form_avatar}>
            <img src={login_avatar} alt="AVATAR" />
          </span>
          <div className={styles.wrap_username} data-validate="Enter username">
            <input className={styles.input100} type="text" name="username" />
            <span
              className={styles.focus_input100}
              data-placeholder="Username"
            ></span>
          </div>
          <div className={styles.wrap_username} data-validate="Enter password">
            <input className={styles.input100} type="password" name="pass" />
            <span
              className={styles.focus_input100}
              data-placeholder="Password"
            ></span>
          </div>
          <div className={styles.form_btn}>
            <button className={styles.login100_form_btn}>Login</button>
          </div>
          <ul className={styles.login_more}>
            <li class="m-b-8">
              <span className={styles.txt1}>Forgot </span>
              <a href="#" className={styles.txt2}>
                Password?
              </a>
            </li>
            <li>
              <span className={styles.txt1}>Don't have an account? </span>
              <a href="#" className={styles.txt2}>
                Sign up
              </a>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Login;
