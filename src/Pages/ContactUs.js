import React from "react";
import ContactUsForm from "../Components/ContactUsForm";
import ContactUsLocation from "../Components/ContactUsLocation";
import SectionBanner from "../Components/SectionBanner";
import Support from "../Components/Support";

function ContactUs() {
  return (
    <div>
      <SectionBanner title="Contact us" subTitle="Home / Contact us" />
      <div className="pt-5">
        <ContactUsLocation />
        <Support />
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactUs;
