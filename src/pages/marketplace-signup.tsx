import styles from "@/styles/marketplace.module.css";

export default function AWSMarketplaceSignup() {
  return (
    <div className={styles.container}>
      <h1>AWS Marketplace Signup</h1>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <input type="text" placeholder="Contact Name" className={styles.formInput} />
        </div>
        <div className={styles.formItem}>
          <input type="text" placeholder="Company Name" className={styles.formInput} />
        </div>
        <div className={styles.formItem}>
          <input type="text" placeholder="Contact Email" className={styles.formInput} />
        </div>
        <div className={styles.formItem}>
          <input type="text" placeholder="Contact Phone Number" className={styles.formInput} />
        </div>

        <button className={styles.formBtn}>Register</button>
      </div>
    </div>
  );
}
