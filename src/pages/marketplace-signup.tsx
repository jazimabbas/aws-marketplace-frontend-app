import React, { useState } from "react";
import styles from "@/styles/marketplace.module.css";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
};

const initialFormValue: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
};

export default function AWSMarketplaceSignup() {
  const [form, setForm] = useState<FormState>(initialFormValue);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setForm((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const handleSubmit = () => {
    if (!_isFormValid()) {
      alert("Please fill all the form fields");
      return;
    }

    alert("submitted");
  };

  const _isFormValid = (): boolean => {
    const { name, company, email, phone } = form;
    if (!name || !company || !email || !phone) {
      return false;
    }

    return true;
  };

  return (
    <div className={styles.container}>
      <h1>AWS Marketplace Signup</h1>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <input
            type="text"
            placeholder="Contact Name"
            name="name"
            value={form?.name}
            onChange={handleChangeInput}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formItem}>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form?.company}
            onChange={handleChangeInput}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formItem}>
          <input
            type="text"
            placeholder="Contact Email"
            name="email"
            value={form?.email}
            onChange={handleChangeInput}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formItem}>
          <input
            type="text"
            placeholder="Contact Phone Number"
            name="phone"
            value={form?.phone}
            onChange={handleChangeInput}
            className={styles.formInput}
          />
        </div>

        <button className={styles.formBtn} onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}
