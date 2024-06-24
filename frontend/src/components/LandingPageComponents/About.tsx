const About = () => {
  return (
    <div className="mx-4">
      <div className="border-b-2 border-[white]">
        <span className="text-[40px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[64px] 4xl:text-[72px] 5xl:text-[80px] font-semibold self-start ">
          Sobre Nosotros
        </span>
      </div>
      <ul className="flex justify-center items-center space-x-10 mx-[2em]">
        <li>
          <img
            className="w-[20vw] drop-shadow-crimson-medium"
            src="/src/assets/LogoMotorBike.png"
            alt="Logo"
          />
        </li>
        <li className="lg:text-[20px] xl:text-[24px] 3xl:text-[32px] 4xl:text-[40px] 5xl:text-[48px] w-[70vw] m-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vel turpis velit. Sed sit amet lectus a metus pretium rhoncus. Integer
          malesuada ex id quam hendrerit, in placerat leo aliquet. Sed in ipsum
          ut nisl posuere pretium. Nullam nec vestibulum justo. Mauris nec nulla
          vitae sem condimentum tristique. Morbi varius sapien eu quam faucibus,
          non cursus magna viverra. Donec ultricies sagittis magna, sit amet
          lacinia metus. Integer consectetur suscipit est, eu tempor orci
          placerat vitae. Ut vehicula urna non risus aliquam, auctor vestibulum
          lectus vestibulum. Nullam in libero ut leo malesuada malesuada.
          Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Phasellus ultrices
          sollicitudin leo, vel posuere lectus. Cras efficitur nibh et sem
          congue, id convallis nisl malesuada.
        </li>
      </ul>
    </div>
  );
};

export default About;
