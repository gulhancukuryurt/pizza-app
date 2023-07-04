import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Login.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {motion} from "framer-motion"

function Login() {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const [loginMessage, setLoginMessage] = useState('');

  const onSubmit = (values) => {
    if (values.email === 'gcukuryurt@gmail.com' && values.password === '1234') {
      setLoginMessage(`Welcome ${values.email}`);
      history.push('/anasayfa');
    }
    if (values.rememberMe) {
      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
    }
    else {
      setLoginMessage('Sorry, information is not correct!');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email field cannot be left blank';
    }

    if (!values.password) {
      errors.password = 'Password field cannot be left blank';
    }

    return errors;
  };

  return (
    <motion.div
    initial= {{opacity:0, translateY:30}}
    animate = {{opacity:1, translateY:0}}
     className={styles.container}>
      <div className={styles.left}>
        <Image className={styles.img} src="/img/pizzarest1.jpg" width={600} height={700} alt='' />
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>Login</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
          <Form>
            <div className={styles.email}>
              <label className={styles.label} htmlFor="email">E-mail </label>
              <Field className={styles.emailArea} type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className={styles.password}>
              <label className={styles.label} htmlFor="password">Password</label>
              <Field className={styles.passwordArea} type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className={styles.loginprocses}>
              <div className={styles.remember}>
                <Field type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe"> Remember me</label>
              </div>
              <div className={styles.passwordremember}>
                <label  htmlFor="forgotPassword">Forgot Password</label>
              </div>
            </div>
            <button className={styles.login} type="submit">
              Login
            </button>
            {loginMessage && <div className={styles.loginMessage}>{loginMessage}</div>}
          </Form>
        </Formik>
      </div>
    </motion.div>
  );
}

export default Login;
