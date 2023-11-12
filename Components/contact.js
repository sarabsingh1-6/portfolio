import React from "react";
import SocialIcons from '../Components/socialMedia'
import Form from "./form";

const Contact = () => {
  return (
    <section id="contact">
      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none"></dl>
      <h1 className="text-5x-l sm:text-7xl md:text-9xl mb-8 text-opacity-100 text-primary font-bold">
        Contact
      </h1>
    
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:py-6">
        {/* <SocialIcons title="Connect with me" /> */}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
