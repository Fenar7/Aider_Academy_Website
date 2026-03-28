"use client";

import { FormEvent, useMemo, useState } from "react";
import "./style.scss";

const imgEmail =
  "https://www.figma.com/api/mcp/asset/8eea8a5a-34cf-4b41-8f77-243e68153e1b";
const imgPhone =
  "https://www.figma.com/api/mcp/asset/f4ac577e-a177-4acc-80d4-c04c5f7ad2e5";
const imgWhatsapp =
  "https://www.figma.com/api/mcp/asset/0f1ac849-0661-4555-a19a-a4f9ca0f936e";
const imgLocation =
  "https://www.figma.com/api/mcp/asset/82965dda-9cb5-4c7b-a82f-03662cf0670a";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const contactItems = [
  {
    icon: imgEmail,
    title: "Email us",
    value: "aideracademy@gmail.com",
  },
  {
    icon: imgPhone,
    title: "Call us",
    value: "+91 88888 88888",
  },
  {
    icon: imgWhatsapp,
    title: "Whatsapp Us",
    value: "+91 88888 88888",
  },
  {
    icon: imgLocation,
    title: "Location",
    value: "Calicut",
  },
];

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  }

  return errors;
}

export default function ContactFormInfoSection() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(
    () => Object.keys(validateForm(formState)).length === 0,
    [formState]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(formState);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="contact-form-info-main">
      <div className="contact-form-info-container container">
        <div className="contact-form-info__grid">
          <div className="contact-form-info__content">
            <div className="contact-form-info__heading">
              <h2 className="contact-form-info__title">
                The <span>Aider Journal</span>
              </h2>
              <p className="contact-form-info__description">
                Updates, guides, and notes from our team on digital skills and
                real workflows.
              </p>
            </div>

            <div className="contact-form-info__items">
              {contactItems.map((item) => (
                <div className="contact-form-info__item" key={item.title}>
                  <div className="contact-form-info__item-icon">
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </div>
                  <div className="contact-form-info__item-copy">
                    <p className="contact-form-info__item-title">{item.title}</p>
                    <p className="contact-form-info__item-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-info__form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <label className="contact-form__field">
                  <span className="contact-form__label">Name</span>
                  <input
                    className={`contact-form__input ${
                      errors.name ? "contact-form__input--error" : ""
                    }`.trim()}
                    type="text"
                    placeholder="Enter your First Name"
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                  />
                  {errors.name ? (
                    <span className="contact-form__error">{errors.name}</span>
                  ) : null}
                </label>

                <label className="contact-form__field">
                  <span className="contact-form__label">Phone</span>
                  <input
                    className={`contact-form__input ${
                      errors.phone ? "contact-form__input--error" : ""
                    }`.trim()}
                    type="tel"
                    placeholder="Enter your Phone Number"
                    value={formState.phone}
                    onChange={(event) =>
                      setFormState((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                  />
                  {errors.phone ? (
                    <span className="contact-form__error">{errors.phone}</span>
                  ) : null}
                </label>
              </div>

              <label className="contact-form__field">
                <span className="contact-form__label">Email</span>
                <input
                  className={`contact-form__input ${
                    errors.email ? "contact-form__input--error" : ""
                  }`.trim()}
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
                {errors.email ? (
                  <span className="contact-form__error">{errors.email}</span>
                ) : null}
              </label>

              <label className="contact-form__field">
                <span className="contact-form__label">Message</span>
                <textarea
                  className={`contact-form__input contact-form__textarea ${
                    errors.message ? "contact-form__input--error" : ""
                  }`.trim()}
                  placeholder="Enter your Message"
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
                {errors.message ? (
                  <span className="contact-form__error">{errors.message}</span>
                ) : null}
              </label>

              <button className="contact-form__submit" type="submit">
                Send
              </button>

              {submitted && isValid ? (
                <p className="contact-form__success">
                  Thanks. Your enquiry is ready for backend wiring.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
