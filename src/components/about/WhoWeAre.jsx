const WhoWeAre = () => (
  <section className="who-we-are flex flex-col min-h-screen mt-12 md:mt-0 bg-white shadow-lg rounded-lg">
    {/*  Team Section */}
    <div className="mt-8 bg-white shadow-lg rounded-lg p-6 lg:p-8 lg:w-full">
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <img src="" alt="BMI Group " />
        {/* Placeholder for Map Embed */}
        {/* <p className="text-gray-600">Map embed coming soon!</p> */}
      </div>
    </div>
    <div className="content w-full p-2">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <h2 className="md:text-3xl text-lg font-bold text-emerald-800 mb-4 mt-8">
          Who We Are
        </h2>
        <p className="md:text-lg font-bold text-sm text-justify text-gray-700 mb-4">
          Founded in 2015, Business Matters Incubators (BMI) has been dedicated
          to nurturing young minds with the entrepreneurial spirit. Our mission
          is simple yet profound: to teach children aged 8-13 the fundamentals
          of entrepreneurship. We believe the younger we start, the greater the
          impact on future generations. BMI-CTY is a key program designed to
          equip young learners with skills that will help them excel in both
          business and life..
        </p>
        <p className="md:text-lg text-sm font-bold text-justify text-gray-700 mb-4">
          With our Online Entrepreneurship Courses, you will learn how to
          develop skills in leadership, communication, decision-making, being a
          team player, and the ability to telescope.
        </p>
        <p className="md:text-lg text-sm font-bold text-justify text-gray-700 mb-4">
          You will also be taught how to create a business that perfectly suits
          your aims and needs, and study the characteristics of successful
          entrepreneurs through one-on-one mentorship. Once you have learned the
          ins and outs of entrepreneurship, nothing and no one will stand in the
          way of your success.
        </p>
        <p className="md:text-lg font-bold text-justify text-sm text-gray-700 mb-2">
          Every business person needs to learn the core entrepreneurial skills
          taught in these entrepreneurship courses from The Finishing School.
        </p>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
