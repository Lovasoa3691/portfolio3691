import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-gray-800 dark:text-white mb-4">
          Contactez-moi
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-3xl mx-auto mb-8">
          Une idée de projet, une collaboration ou simplement une question ?
          N’hésitez pas à me laisser un message. Je vous répondrai dans les plus
          brefs délais.
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            required
            className="p-3 border border-gray-500 rounded bg-transparent text-gray-800 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            required
            className="p-3 border border-gray-500 rounded bg-transparent text-gray-800 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Votre message..."
            required
            className="p-3 border border-gray-500 rounded bg-transparent text-gray-800 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 text-white py-3 px-6 rounded shadow hover:bg-green-700 transition font-semibold"
          >
            Envoyer
          </motion.button>

          {messageSent && (
            <p className="text-green-600 font-medium text-center">
              ✅ Message envoyé avec succès !
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
