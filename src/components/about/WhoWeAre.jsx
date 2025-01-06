const WhoWeAre = () => (
  <section className="who-we-are flex gap-5 flex-col lg:flex-row p-6 bg-white shadow-lg rounded-lg">
    <div className="image lg:w-1/2 w-full mt-10 lg:mt-0">
      <img
        className="w-full h-auto rounded-lg"
        src="/images/benefits_of_being_a_mentee.jpg"
        alt="Business Network"
      />
    </div>
    <div className="content lg:w-1/2 w-full lg:pr-8 mb-4 lg:mb-0">
      <h2 className="text-3xl font-bold text-emerald-800 mb-4 mt-20">
        Who We Are
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We are a Network of Successful African Business People mentoring and
        teaching Nation Builders how to live a lifestyle of Leadership &
        Excellence. BMI is a hub where young entrepreneurs are groomed for
        excellence.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        With our Online Entrepreneurship Courses, you will learn how to develop
        skills in leadership, communication, decision-making, being a team
        player, and the ability to telescope.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        You will also be taught how to create a business that perfectly suits
        your aims and needs, and study the characteristics of successful
        entrepreneurs through one-on-one mentorship. Once you have learned the
        ins and outs of entrepreneurship, nothing and no one will stand in the
        way of your success.
      </p>
      <p className="text-lg text-gray-700">
        Every business person needs to learn the core entrepreneurial skills
        taught in these entrepreneurship courses from The Finishing School.
      </p>
    </div>
  </section>
);

export default WhoWeAre;
