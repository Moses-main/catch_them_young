import React from "react";
import Slider from "react-slick"; // Importing react-slick for the carousel

const testimonies = [
  {
    id: 1,
    quote:
      "BMI Academy has given me the confidence to chase my dreams. Their entrepreneurship training is unmatched!",
    author: "- John Doe",
    image: "/images/web_design.jpg",
  },
  {
    id: 2,
    quote:
      "Critical thinking skills I learned here have transformed my approach to solving business challenges.",
    author: "- Jane Smith",
    image: "/images/critical_thinking.avif",
  },
  {
    id: 3,
    quote:
      "The leadership program taught me how to inspire my team and build a strong, collaborative culture.",
    author: "- Michael Johnson",
    image: "/images/leadership_and_team.jpg",
  },
  {
    id: 4,
    quote:
      "Understanding business models has been a game changer for my startup's growth and sustainability.",
    author: "- Sarah Williams",
    image: "/images/business_model.jpg",
  },
  {
    id: 5,
    quote:
      "The digital marketing insights from BMI Academy have helped me build a powerful online presence.",
    author: "- Emily Brown",
    image: "/images/digital_marketing.avif",
  },
  {
    id: 6,
    quote:
      "Financial literacy training has enabled me to manage resources effectively and scale my business.",
    author: "- David Wilson",
    image: "/images/financial-literacy.jpg",
  },
  {
    id: 7,
    quote:
      "The real-life case studies and projects gave me practical knowledge that I apply daily.",
    author: "- Sophia Taylor",
    image: "/images/real_life_studies.jpeg",
  },
];

const Testimony = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rtl: true, // Right to left direction (for sliding from right to left)
  };

  return (
    <section
      className="relative py-4 md:py-16"
      style={{ backgroundColor: "#fdf1e1" }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-center text-lg md:text-4xl font-bold mb-4 text-emerald-800 animate-fadeInUp">
          What Our Students Say
        </h2>

        {/* Carousel/Slider */}
        <Slider {...settings} className="w-full">
          {testimonies.map((testimony) => (
            <div
              key={testimony.id}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Image Section */}
              <div className="w-full p-4">
                <img
                  src={testimony.image}
                  alt="Testimony"
                  className="md:w-full w-[95%] mx-auto h-[300px] md:h-[650px] object-cover rounded-xl border-4 border-emerald-800 shadow-md"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/4 px-6 py-6 bg-gray-50 rounded-lg shadow-lg border-t-4 border-emerald-800">
                <p className="text-gray-700 italic text-lg md:text-2xl mb-4">
                  "{testimony.quote}"
                </p>
                <p className="text-right text-emerald-800 font-semibold">
                  {testimony.author}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimony;
