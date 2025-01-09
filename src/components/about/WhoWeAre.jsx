const WhoWeAre = () => (
  <section className="who-we-are flex flex-col min-h-screen mt-20 md:mt-0 bg-white shadow-lg rounded-lg">
    <div className="image w-full h-1/2">
      <img
        className="w-full h-full object-cover rounded-t-lg"
        src="/images/benefits_of_being_a_mentee.jpg"
        alt="Business Network"
      />
    </div>
    <div className="content w-full p-6">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <h2 className="md:text-3xl text-lg font-bold text-emerald-800 mb-4 mt-8">
          Who We Are
        </h2>
        <p className="md:text-lg font-bold text-sm text-justify text-gray-700 mb-4">
          We are a Network of Successful African Business People mentoring and
          teaching Nation Builders how to live a lifestyle of Leadership &
          Excellence. BMI is a hub where young entrepreneurs are groomed for
          excellence.
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
        <p className="md:text-lg font-bold text-justify text-sm text-gray-700">
          Every business person needs to learn the core entrepreneurial skills
          taught in these entrepreneurship courses from The Finishing School.
        </p>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
