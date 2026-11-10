import { useRef, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { profile } from "../../data/profile";
import { Container } from "../../components/ui";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Enter at least 2 characters.")
    .max(50, "Keep your name under 50 characters.")
    .required("Enter your name."),
  email: Yup.string().email("Enter a valid email address, like name@example.com.").required("Enter your email address."),
  subject: Yup.string()
    .min(3, "Enter at least 3 characters.")
    .max(100, "Keep the subject under 100 characters.")
    .required("Enter a subject."),
  message: Yup.string()
    .min(10, "Enter at least 10 characters.")
    .max(1000, "Keep the message under 1,000 characters.")
    .required("Enter a message."),
});

const inputClass =
  "w-full rounded-md border border-rule bg-white px-3.5 py-2.5 text-[0.9375rem] text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none aria-[invalid=true]:border-red-600";

const FieldBlock = ({ name, label, as, type = "text", rows, placeholder, errors, touched }) => (
  <div>
    <label htmlFor={name} className="mb-1.5 block text-[0.875rem] font-medium">
      {label}
    </label>
    <Field
      id={name}
      name={name}
      as={as}
      type={as ? undefined : type}
      rows={rows}
      placeholder={placeholder}
      aria-invalid={Boolean(errors[name] && touched[name])}
      aria-describedby={`${name}-error`}
      className={`${inputClass} ${as === "textarea" ? "resize-y" : ""}`}
    />
    <ErrorMessage name={name}>
      {(msg) => (
        <p id={`${name}-error`} className="mt-1.5 text-[0.875rem] text-red-700">
          {msg}
        </p>
      )}
    </ErrorMessage>
  </div>
);

FieldBlock.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  as: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

const ContactMe = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setStatus(null);
    try {
      await emailjs.sendForm("service_xez8zdk", "template_usp3ezk", formRef.current, "S8xdCoP-hKk5bC8Kp");
      setStatus("sent");
      resetForm();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 sm:pt-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <header className="lg:col-span-5">
            <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.25rem]">
              Contact
            </h1>
            <p className="mt-3 max-w-[44ch] text-base text-muted">{profile.availability}</p>

            <dl className="mt-8 border-t border-rule text-[0.875rem]">
              {[
                [
                  "Email",
                  <a key="e" href={`mailto:${profile.email}`} className="tap break-all font-semibold text-signal link-underline">
                    {profile.email}
                  </a>,
                ],
                ["Location", profile.location],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-rule py-2.5">
                  <dt className="text-muted">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 flex flex-wrap gap-x-6 text-[0.875rem] font-semibold">
              <a href={profile.resumeUrl} download className="inline-flex min-h-11 items-center gap-2 link-underline">
                <FiDownload aria-hidden="true" /> Download résumé
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 link-underline">
                <FiGithub aria-hidden="true" /> GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 link-underline">
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </header>

          <div className="lg:col-span-7">
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form ref={formRef} noValidate className="space-y-5 rounded-lg border border-rule bg-white p-5 sm:p-7">
                  <h2 className="text-[1.125rem] font-semibold">Send a message</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FieldBlock name="name" label="Name" errors={errors} touched={touched} />
                    <FieldBlock name="email" label="Email" type="email" errors={errors} touched={touched} />
                  </div>
                  <FieldBlock
                    name="subject"
                    label="Subject"
                    placeholder="A role, a project, or a question"
                    errors={errors}
                    touched={touched}
                  />
                  <FieldBlock name="message" label="Message" as="textarea" rows={6} errors={errors} touched={touched} />

                  <div aria-live="polite">
                    {status === "sent" && (
                      <p className="flex items-start gap-2 rounded-md bg-signal/10 px-4 py-3 text-[0.9375rem] text-signal-dark">
                        <FiCheckCircle aria-hidden="true" className="mt-0.5 shrink-0" />
                        Message sent. I&apos;ll reply to the email address you entered.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-[0.9375rem] text-red-800">
                        <FiAlertCircle aria-hidden="true" className="mt-0.5 shrink-0" />
                        The message didn&apos;t send. Check your connection and try again, or email{" "}
                        {profile.email} directly.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-11 w-full rounded-md bg-ink px-5 text-[0.875rem] font-semibold text-paper transition-colors hover:bg-signal-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? "Sending message…" : "Send message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactMe;
