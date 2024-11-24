import styles from './ContactStyles.module.css';

function Contact() {
  // Contact API to send emails:
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target; // Access the form element
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
      alert("Your message has been submitted successfully!"); // Alert the user
      form.reset(); // Reset the form fields
    } else {
      console.log("Failed to send the form", res);
      alert("Something went wrong. Please try again."); // Notify the user of failure
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" method="post" onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="text" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
