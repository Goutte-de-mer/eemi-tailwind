import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="section relative mt-24 rounded-xl bg-gradient-to-t from-blue to-blue_lighter px-8 py-10 sm:px-14 sm:py-12 md:mt-32 md:px-20 md:py-16">
      <Image
        src={"/img/sitting-cat.png"}
        width={400}
        height={400}
        alt="sitting cat"
        className="absolute -bottom-2 -left-16 hidden h-auto w-56 lg:block"
      />
      <div className="ml-auto max-w-[600px]">
        <div>
          <h2 className="mb-4 text-4xl font-medium">You are in great paws!</h2>
          <p className="text-slate-400">
            subscribe us to get more information about pets and pet care. You
            will also get a free maintenance warranty within 1 month at our
            store
          </p>
        </div>
        <div className="m-auto mt-8 flex w-fit overflow-hidden rounded-lg xs:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="text-small max-w-32 bg-white px-3 py-2 focus-visible:outline-none xs:max-w-full xs:flex-grow md:px-4 md:py-3"
          />
          <button className="text-small bg-purple px-4 py-2 text-white md:px-6 md:py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
