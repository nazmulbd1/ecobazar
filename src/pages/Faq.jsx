import React, { useState } from "react";
import Container from "../components/layouts/Container";
import faqimg from "../assets/images/faqimg.webp"
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "In elementum est a ante sodales iaculis.",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 2,
      question: "Etiam lobortis massa eu nibh tempor elementum.",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 3,
      question: "In elementum est a ante sodales iaculis.",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 4,
      question: "Aenean quis quam nec lacus semper dignissim.",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
    {
      id: 5,
      question: "Nulla tincidunt eros id tempus accumsan.",
      answer:
        "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Container>
        <div className="flex justify-between gap-[73px]">
          <div className="w-[648px] pt-47">
            <h2 className="w-[532px] font-pop font-semibold text-[48px] pb-5">
              Welcome, Let's Talk About Our Ecobazar
            </h2>
            <div className="">
              {faqData.map((item, index) => (
                <div key={item.id} className="">
                  <button onClick={() => handleClick(index)}
                    className="w-full flex items-center justify-between border border-green-300 py-4 pl-4 pr-3 mt-3 rounded">
                    <h3 className="">{item.question}</h3>

                    {activeIndex ===  index ?
                    <FaMinus/>
                    :
                    <FaPlus/>
                    }
                  </button>
                  {activeIndex === index && (
                    <div className="w-full border border-green-300 p-4 rounded-b">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pt-20">
            <img src={faqimg} alt="image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
