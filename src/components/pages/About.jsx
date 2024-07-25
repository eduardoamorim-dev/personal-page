const About = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-32">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
        🧑‍💻 Hello, welcome. I'm a{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-transparent bg-clip-text">
          software developer{" "}
        </span>{" "}
      </h2>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
        originally from Brazil 🇧🇷
      </h2>
    </div>
  );
};

export default About;
