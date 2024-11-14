import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-t from-blue to-blue_lighter max-w-[1000px] rounded-xl p-20 mx-auto mt-32 sm:flex relative">
      <Image
        src={"/img/sitting-cat.png"}
        width={400}
        height={400}
        alt="sitting cat"
        className="hidden sm:block w-56 absolute -bottom-2 -left-16"
      />
      <div className="max-w-[600px] ml-auto">
        <div>
          <h2 className="text-4xl font-medium mb-4">You are in great paws!</h2>
          <p className="text-slate-400">
            subscribe us to get more information about pets and pet care. You
            will also get a free maintenance warranty within 1 month at our
            store
          </p>
        </div>
        <div className="rounded-lg overflow-hidden mt-8 flex">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 bg-white flex-1 focus-visible:outline-none"
          />
          <button className="bg-purple text-white h-full px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
