import React from "react";
import styles from "@/styles/marketplace.module.css";
import useMarketplace from "@/hooks/useMarketplace";

export default function AWSMarketplaceSignup() {
  const { form, handleChangeInput, handleSubmit } = useMarketplace();

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
