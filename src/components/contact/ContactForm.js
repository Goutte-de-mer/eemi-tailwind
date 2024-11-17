import ContactInfos from "./ContactInfos";
import ButtonGradient from "../buttons/ButtonGradient";
const ContactForm = () => {
  return (
    <form className="flex flex-col justify-between rounded-2xl bg-white p-3 sm:flex-row">
      <ContactInfos />
      {/* Form inputs */}
      <div className="flex flex-wrap justify-between gap-x-3 gap-y-7 px-5 py-7 sm:gap-y-10 sm:px-9 md:max-w-[600px]">
        <div className="flex flex-col-reverse md:w-2/5">
          {" "}
          <input type="text" name="name" id="name" className="input peer" />
          <label htmlFor="name" className="label">
            Your Name
          </label>
        </div>
        <div className="flex flex-col-reverse md:w-2/5">
          <input type="email" name="email" id="email" className="input peer" />
          <label htmlFor="email" className="label">
            Your Email
          </label>
        </div>
        <div className="flex flex-col-reverse">
          {" "}
          <input
            type="text"
            name="subject"
            id="subject"
            className="input peer"
          />
          <label htmlFor="subject" className="label">
            Your Subject
          </label>
        </div>
        <div className="flex w-full flex-col-reverse">
          {" "}
          <textarea
            placeholder="Write your message here"
            name="message"
            id="message"
            className="input peer"
          />
          <label htmlFor="message" className="label">
            Message
          </label>
        </div>

        <button type="submit">Submit</button>
        {/* <ButtonGradient type={"submit"} text={"Submit"} /> */}
      </div>
    </form>
  );
};

export default ContactForm;
