function Profile() {
  return (
    <>
      <div className="bg-darkwhite dark:bg-gray-900 dark:text-white">
        <section className=" mt-10 mb-10 h-[500px] xl-sm:h-[600px] mx-auto">
          <h4 className="text-4xl leading-snug pt-10 pb-10 font-medium text-center">
            Profile
          </h4>

          <div className="flex justify-center gap-10 xs:gap-0">
            <div className="bg-white dark:bg-gray-800 w-[25%] xl-sm:w-[50%] xl-sm:max-h-[500px] xs:p-4 flex flex-col gap-4 p-10 rounded-lg border-b-8 border-r-8 dark:border-gray-500 ">
              <h5 className="text-3xl text-pink mb-5 font-playfair xs:text-xl">
                Basic Information
              </h5>
              <div className="grid grid-cols-2 gap-y-4 font-light sm2:text-sm xs:text-xs xs:gap-x-2">
                <span className="font-semibold ">Doğum tarihi</span>
                <span>09.11.1999</span>
                <span className="font-semibold">İkamet Şehri</span>
                <span>Eskişehir</span>
                <span className="font-semibold">Eğitim Durumu</span>
                <span>Çukurova Ünv. Bilgisayar Müh Lisans, 2021</span>
                <span className="font-semibold">Tercih Ettiği Rol</span>
                <span>Frontend, UI</span>
              </div>
            </div>
            <div className="w-[25%] xl-sm:w-[50%] p-6 xs:p-4">
              <h5 className="text-3xl mb-5 font-playfair xs:text-xl">
                <span className="relative z-0">
                  About m
                  <span className="absolute right-5 top-5 w-[100px] h-[20px] bg-lightblue -z-10 xs:w-[60px] xs:h-[10px]"></span>
                </span>
                e
              </h5>
              <div className="flex flex-col gap-5 font-light text-xl mt-10 sm2:text-[1rem] xs:text-xs">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aliquid et adipisci libero cupiditate enim, dolor
                  numquam accusantium!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aliquid et adipisci libero cupiditate enim, dolor
                  numquam accusantium!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
