import { React, useState } from "react";
import Email from "../Assets/Email.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [formValues, setFormValues] = useState({
    from_name: "",
    fromMail: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const errors = {};
    if (!formValues.from_name) errors.from_name = "Name is required";
    if (!formValues.fromMail) errors.fromMail = "Email is required";
    if (!formValues.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const sendEmail = (e) => {
    setErrors({});
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          e.target.reset();
          setFormValues({
            from_name: "",
            fromMail: "",
            message: "",
          });
          setTimeout(() => {
            setStateMessage(null);
            e.target.reset();
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          console.log(error);
          console.log(process.env.REACT_APP_SERVICE_ID);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
  };
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact">
        <div className="form">
          <p className="contact-title">Send a Message </p>
          <form onSubmit={sendEmail}>
            <label>
              <input
                type="text"
                placeholder="Name"
                name="from_name"
                value={formValues.from_name}
                onChange={handleChange}
              />
            </label>
            {errors.from_name && <p className="error">{errors.from_name}</p>}
            <label>
              <input
                type="text"
                placeholder="Email"
                name="fromMail"
                value={formValues.fromMail}
                onChange={handleChange}
              />
            </label>
            {errors.fromMail && <p className="error">{errors.fromMail}</p>}
            <label>
              <textarea
                placeholder="Message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </label>
            {errors.message && <p className="error">{errors.message}</p>}
            <input
              className="submit"
              type="Submit"
              value="Contact Me!"
              disabled={isSubmitting}
            />
          </form>
          {stateMessage && <p>{stateMessage}</p>}
        </div>
        <div className="email-image">
          <img src={Email} alt="Email" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
