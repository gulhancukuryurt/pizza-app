import React from 'react';
import Image from 'next/image';
import styles from '../styles/Sign.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {motion} from "framer-motion";

function Sign() {
  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    // İstediğiniz işlemleri yapabilirsiniz
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name field is required';
    }

    if (!values.surname) {
      errors.surname = 'Surname field is required';
    }

    if (!values.email) {
      errors.email = 'Email field is required';
    }

    if (!values.phone) {
      errors.phone = 'Phone field is required';
    }

    if (!values.password) {
      errors.password = 'Password field is required';
    }

    return errors;
  };

  return (
    <motion.div
    initial= {{opacity:0, translateY:30}}
    animate = {{opacity:1, translateY:0}}
    className={styles.container}>
      <div className={styles.left}>
      <div className={styles.imgWrapper}>
        <Image className={styles.img} src="/img/pizzarest2.webp" width={600} height={700} alt='' />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>Sign In</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
          <Form>
            <div className={styles.personal}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <Field className={styles.emailArea} type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />

              <label className={styles.label} htmlFor="surname">
                Surname
              </label>
              <Field className={styles.emailArea} type="text" id="surname" name="surname" />
              <ErrorMessage name="surname" component="div" />
            </div>

            <div className={styles.email}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <Field className={styles.emailArea} type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />

              <label className={styles.label} htmlFor="phone">
                Phone
              </label>
              <Field className={styles.emailArea} type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>

            <div className={styles.passwordArea}>
              <div className={styles.password}>
                <label className={styles.label} htmlFor="password">
                  Password
                </label>
                <Field className={styles.passwordArea} type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />

                <label className={styles.label} htmlFor="passwordConfirmation">
                  Password Again
                </label>
                <Field
                  className={styles.passwordArea}
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                />
                <ErrorMessage name="passwordConfirmation" component="div" />
              </div>
            </div>

            <button className={styles.login} type="submit">
              Sign In
            </button>
          </Form>
        </Formik>
        </div>
        
    </motion.div>
  );
}

export default Sign;
