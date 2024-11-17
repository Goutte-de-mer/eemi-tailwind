import ContactForm from "@/components/contact/ContactForm";
const ContactPageView = () => {
  return (
    <>
      <div className="section mb-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">Get In Touch</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          asperiores vero eveniet quos laboriosam, fuga perferendis, labore
          natus ?
        </p>
      </div>

      <div className="section">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPageView;
