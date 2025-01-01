function Contact() {
  return (
    <section className="flex flex-row justify-center items-center pt-[10rem] sm2:pt-[3rem] pb-[5rem] gap-[4rem] xs:flex-col xs:mt-[3rem] ">
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
    </section>
  );
}

export default Contact;
