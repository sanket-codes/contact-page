import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { TbMessage } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("yourName");
  const [email, setEmail] = useState("s@s.com");
  const [text, setText] = useState("Hello");

  const onSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<TbMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea rows="10" name="text" />
          </div>
          <div className={styles.form_submit_btn}>
            <Button text="SUBMIT" />
          </div>

          <div>{`${name} ${email} ${text}`}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/ser.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
