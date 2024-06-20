const NavContact = () => {
  return (
    <>
      <div className="flex w-full font-semibold lg:h-[50px] 3xl:h-[55px] 4xl:h-[60px] 5xl:h-[65px]">
        <header className="flex w-full fixed items-center lg:h-[50px] 3xl:h-[55px] 4xl:h-[60px] 5xl:h-[65px] justify-between top-0 left-0 spa z-10 bg-charcoal-black-900 shadow-2xl">
          <ul className="flex justify-center items-center space-x-[19px] ml-8">
            <li className="flex items-center justify-start space-x-2">
              <img
                className="w-[16.5px] h-[22px] object-contain"
                src="/src/assets/location-dot-solid 1.svg"
                alt="location icon"
              />
              <h4 className="lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 4xl:text-[24px] text-center">
                Córdoba, Argentina
              </h4>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <img
                className="w-[22px] h-[22px] object-contain"
                src="/src/assets/phone-solid 1.svg"
                alt="phone icon"
              />
              <h4 className="lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 4xl:text-[24px] text-center">
                +123-456-7890
              </h4>
            </li>
          </ul>

          <ul className="flex justify-center items-center space-x-[19px] mr-8">
            <li className="flex items-center justify-start space-x-2">
              <img
                className="w-[16.5px] h-[22px] object-contain"
                src="/src/assets/percent-solid 1.svg"
                alt="percent icon"
              />
              <h4 className="lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 4xl:text-[24px] text-center">
                Descuento del 25% en todos los servicios
              </h4>
            </li>
            <li className="flex justify-center">
              <h4 className="lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 4xl:text-[24px] text-center">
                |
              </h4>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <img
                className="w-[22px] h-[22px] object-contain"
                src="/src/assets/clock-regular 1.svg"
                alt="clock icon"
              />
              <h4 className="lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 4xl:text-[24px]">
                08:00AM - 18:00PM
              </h4>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default NavContact;
