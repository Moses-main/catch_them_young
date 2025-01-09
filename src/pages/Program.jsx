import React from "react";

const ProgramPage = () => {
  return (
    <main className="program-page max-w-screen-xl md:mt-40 mt-20 mx-auto p-6">
      {/* BMI-CTY Entrepreneurship Education Program Section */}
      <section className="bmi-cty-program bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-emerald-800 md:mb-10 mb-4 text-center">
          BMI-CTY Entrepreneurship Education Program
        </h2>
        <div className="flex flex-col items-center gap-8">
          <div className="image w-full">
            <img
              className="w-full h-auto rounded-lg"
              src="/images/teacher_explaining_concetp_to_children.jpeg"
              alt="Teacher explaining concepts"
            />
          </div>
          <div className="text-content w-full">
            <p className="text-justify text-gray-700 md:text-lg text-sm font-bold">
              BMI-CTY’s Entrepreneurship Education Program is designed to teach
              young learners about the various facets of building a business.
              From brainstorming innovative ideas to presenting business plans
              and executing strategies, our students will learn by doing. Our
              program encourages creativity, critical thinking, and leadership,
              preparing children to take on challenges and seize opportunities
              in the future business world.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview Section */}
      <section className="curriculum-overview my-16 bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
          Curriculum Overview
        </h3>
        <div className="flex flex-col items-center gap-8">
          <div className="image w-full">
            <img
              className="w-full h-auto max-h-[350px] sm:max-h-[350px] md:max-h-[350px] lg:max-h-[370px] rounded-lg object-cover"
              src="/images/early_adoption.jpg"
              alt="Curriculum map or group presenting ideas"
            />
          </div>

          <div className="curriculum-list space-y-6 w-full">
            <div className="curriculum-item">
              <h4 className="text-xl font-semibold text-emerald-800">
                Business Idea Generation
              </h4>
              <p className="text-gray-700 md:text-lg text-sm font-bold">
                Teaching children how to brainstorm and turn ideas into feasible
                business opportunities.
              </p>
            </div>
            <div className="curriculum-item">
              <h4 className="text-xl font-semibold text-emerald-800">
                Market Research
              </h4>
              <p className="text-gray-700 md:text-lg text-sm font-bold">
                Learning how to analyze and understand market demands, customer
                needs, and competitors.
              </p>
            </div>
            <div className="curriculum-item">
              <h4 className="text-xl font-semibold text-emerald-800">
                Financial Literacy
              </h4>
              <p className="text-gray-700 md:text-lg text-sm font-bold">
                Introducing kids to the basics of budgeting, investing, and
                managing business finances.
              </p>
            </div>
            <div className="curriculum-item">
              <h4 className="text-xl font-semibold text-emerald-800">
                Teamwork & Leadership
              </h4>
              <p className="text-gray-700 md:text-lg text-sm font-bold">
                Fostering collaboration, communication, and leadership skills in
                group projects.
              </p>
            </div>
            <div className="curriculum-item">
              <h4 className="text-xl font-semibold text-emerald-800">
                Practical Projects
              </h4>
              <p className="text-gray-700 md:text-lg text-sm font-bold">
                Hands-on projects where children create business plans and pitch
                their ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Skill Labs Section */}
      <section className="digital-skill-labs my-16 bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
          Digital Skill Labs
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="image lg:w-1/2">
            <img
              className="w-full h-auto rounded-lg"
              src="/images/children_learning_coding.jpeg"
              alt="Children learning coding"
            />
          </div>
          <div className="text-content lg:w-1/2">
            <p className="md:text-lg text-justify text-sm font-bold text-gray-700 ">
              In today's digital age, having technical skills is crucial. That’s
              why BMI-CTY includes a Digital Skill Lab program where children
              learn vital digital skills such as coding, web development,
              graphic design, and online marketing. These skills will empower
              them to innovate and operate in the digital business landscape.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramPage;
