import styles from './ContactStyles.module.css';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "b243c422-8eb3-4a42-a515-892013c47add");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your message has been submitted successfully!");
      form.reset();
    } else {
      console.log("Failed to send the form", res);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.contact}>
      <section id="contact" className={styles.container}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <form action="" method="post" onSubmit={onSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name="name" id="name" placeholder="Name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" hidden>Email</label>
            <input type="text" name="email" id="email" placeholder="Email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" hidden>Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              required
            />
          </div>
          <input className={styles.submitButton} type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
}

export default Contact;
