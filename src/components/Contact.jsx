function Contact() {
  return (
    <section className="flex flex-row justify-center items-center pt-[10rem] sm2:pt-[3rem] pb-[5rem] gap-[4rem] xs:flex-col xs:mt-[3rem]">
      <div className="text-5xl font-light leading-snug sm2:text-4xl xs:text-3xl">
        <p className="relative ">
          Let's work{" "}
          <span className="absolute top-[3.75rem] right-[4rem] w-[250px] h-[20px] bg-lightblue -z-10 rounded-lg xs:top-[1.75rem] xs:w-[220px] xs:h-[15px]"></span>{" "}
          together on
        </p>
        <p className="text-right">your next product.</p>
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <span className="text-yellow">
          <a href="">Github</a>
        </span>
        <span className="black">
          <a href="">Personal Blog</a>
        </span>
        <span className="text-lightblue">
          <a href="">Linkedin</a>
        </span>
        <span className="text-darkpink">
          <a href="">Email</a>
        </span>
      </div>
      <div>
        <a
          className="rounded-full font-md px-4 py-2 pb-5 shadow-lg hover:bg-lightblue bg-yellow transition duration-300 text-5xl shadow-2xl border-4 border-blue3"
          href="https://buymeacoffee.com/mrtkcu0101t"
          target="_blank"
        >
          <span className="text-3xl text-[#754E1A] font-playfair">Buy me </span>
          <span className="text-5xl text-[#754E1A] shadow-2xl">☕︎</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
